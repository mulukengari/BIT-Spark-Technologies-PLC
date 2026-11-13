"use client";

import { useRouter } from "next/navigation";
import { type CSSProperties, type FormEvent, useCallback, useEffect, useRef, useState } from "react";

type ChatMessage = {
  role: "visitor" | "robot";
  text: string;
};

const DISMISSED_KEY = "bitspark-guide-dismissed";
const PAUSED_KEY = "bitspark-guide-paused";
const CHAT_KEY = "bitspark-guide-chat";
const QUICK_REPLIES = [
  { label: "Services", path: "/services", target: "services" },
  { label: "Industries", path: "/industries", target: "industries" },
  { label: "Projects", path: "/projects", target: "projects" },
  { label: "Contact", path: "/contact", target: "contact" },
  { label: "Request a quote", path: "/request-quote", target: "quote" },
];

function isChatMessageArray(value: unknown): value is ChatMessage[] {
  return (
    Array.isArray(value) &&
    value.every(
      (message) =>
        typeof message === "object" &&
        message !== null &&
        "role" in message &&
        "text" in message &&
        (message.role === "visitor" || message.role === "robot") &&
        typeof message.text === "string"
    )
  );
}

function readChat() {
  const stored = sessionStorage.getItem(CHAT_KEY);
  if (!stored) return [];
  try {
    const parsed: unknown = JSON.parse(stored);
    if (isChatMessageArray(parsed)) return parsed;
  } catch (error) {
    console.error("Unable to read robot guide conversation from this session.", error);
  }
  sessionStorage.removeItem(CHAT_KEY);
  return [];
}

export default function RobotCompanion() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [paused, setPaused] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [question, setQuestion] = useState("");
  const [pointingTarget, setPointingTarget] = useState<HTMLElement | null>(null);
  const [formFocused, setFormFocused] = useState(false);
  const chatInputRef = useRef<HTMLInputElement>(null);
  const highlightTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const highlightedTargetRef = useRef<HTMLElement | null>(null);

  const saveMessages = useCallback((next: ChatMessage[]) => {
    const recent = next.slice(-30);
    setMessages(recent);
    sessionStorage.setItem(CHAT_KEY, JSON.stringify(recent));
  }, []);

  useEffect(() => {
    const initializeTimer = setTimeout(() => {
      const isDismissed = sessionStorage.getItem(DISMISSED_KEY) === "true";
      setDismissed(isDismissed);
      setPaused(sessionStorage.getItem(PAUSED_KEY) === "true");
      setMessages(readChat());
      setMounted(true);
    }, 0);
    return () => clearTimeout(initializeTimer);
  }, []);

  useEffect(() => {
    const toggleWithShortcut = (event: KeyboardEvent) => {
      if (event.altKey && event.key.toLowerCase() === "r") {
        event.preventDefault();
        setDismissed((isDismissed) => {
          const next = !isDismissed;
          if (next) {
            sessionStorage.setItem(DISMISSED_KEY, "true");
            setChatOpen(false);
          } else {
            sessionStorage.removeItem(DISMISSED_KEY);
          }
          return next;
        });
      }
    };

    window.addEventListener("keydown", toggleWithShortcut);
    return () => window.removeEventListener("keydown", toggleWithShortcut);
  }, []);

  useEffect(() => {
    if (!mounted || dismissed) return;

    const onFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      setFormFocused(
        !target.closest(".robot-companion") &&
          target.matches("input, textarea, select, [contenteditable='true']")
      );
    };
    const onFocusOut = () => {
      setTimeout(() => {
        const active = document.activeElement as HTMLElement | null;
        setFormFocused(
          !!active &&
            !active.closest(".robot-companion") &&
            active.matches("input, textarea, select, [contenteditable='true']")
        );
      }, 0);
    };
    document.addEventListener("focusin", onFocusIn);
    document.addEventListener("focusout", onFocusOut);
    return () => {
      document.removeEventListener("focusin", onFocusIn);
      document.removeEventListener("focusout", onFocusOut);
    };
  }, [dismissed, mounted]);

  useEffect(
    () => () => {
      if (highlightTimerRef.current) clearTimeout(highlightTimerRef.current);
      highlightedTargetRef.current?.classList.remove("robot-highlighted");
    },
    []
  );

  useEffect(() => {
    if (chatOpen) chatInputRef.current?.focus();
  }, [chatOpen]);

  const pointOut = (target: HTMLElement | null) => {
    if (!target) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reducedMotion ? "instant" : "smooth", block: "center" });
    highlightedTargetRef.current?.classList.remove("robot-highlighted");
    target.classList.add("robot-highlighted");
    highlightedTargetRef.current = target;
    if (highlightTimerRef.current) clearTimeout(highlightTimerRef.current);
    highlightTimerRef.current = setTimeout(() => {
      target.classList.remove("robot-highlighted");
      highlightedTargetRef.current = null;
    }, 4000);
    setPointingTarget(target);
    setChatOpen(false);
  };

  const guideTo = (option: (typeof QUICK_REPLIES)[number], selectedText = option.label) => {
    const target = document.querySelector<HTMLElement>(
      `main [data-robot-target="${option.target}"]`
    );
    const reply = target
      ? `Here’s our ${option.label.toLowerCase()} information.`
      : `I’ll take you to ${option.label.toLowerCase()}.`;
    saveMessages([
      ...messages,
      { role: "visitor", text: selectedText },
      { role: "robot", text: reply },
    ]);

    if (target) {
      pointOut(target);
    } else {
      setChatOpen(false);
      router.push(option.path);
    }
  };

  const submitQuestion = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = question.trim();
    if (!text) return;

    const normalized = text.toLowerCase();
    const option =
      QUICK_REPLIES.find((item) => normalized.includes(item.label.toLowerCase())) ??
      (normalized.includes("cloud") ||
      normalized.includes("network") ||
      normalized.includes("security") ||
      normalized.includes("software")
        ? QUICK_REPLIES[0]
        : normalized.includes("industry")
          ? QUICK_REPLIES[1]
          : normalized.includes("project")
            ? QUICK_REPLIES[2]
            : normalized.includes("quote") || normalized.includes("price")
              ? QUICK_REPLIES[4]
              : normalized.includes("contact") || normalized.includes("talk")
                ? QUICK_REPLIES[3]
                : null);

    if (option) {
      setQuestion("");
      guideTo(option, text);
      return;
    }

    saveMessages([
      ...messages,
      { role: "visitor", text },
      {
        role: "robot",
        text: "I can guide you to Services, Industries, Projects, Contact, or a quote. Choose one to continue.",
      },
    ]);
    setQuestion("");
  };

  const dismissGuide = () => {
    sessionStorage.setItem(DISMISSED_KEY, "true");
    setDismissed(true);
    setChatOpen(false);
  };

  const togglePause = () => {
    setPaused((value) => {
      const next = !value;
      sessionStorage.setItem(PAUSED_KEY, String(next));
      return next;
    });
  };

  if (!mounted || dismissed) return null;

  const targetBounds = pointingTarget?.getBoundingClientRect();
  const shiftX =
    window.innerWidth >= 768 && targetBounds && targetBounds.left > window.innerWidth * 0.62
      ? -100
      : 0;
  const shiftY = targetBounds
    ? targetBounds.top + targetBounds.height / 2 > window.innerHeight * 0.72
      ? -150
      : targetBounds.top + targetBounds.height / 2 > window.innerHeight * 0.48
        ? -70
        : 0
    : 0;
  const robotStyle = {
    "--guide-shift-x": `${shiftX}px`,
    "--guide-shift-y": `${shiftY}px`,
  } as CSSProperties;

  return (
    <aside
      className={`robot-companion${paused ? " is-paused" : ""}${formFocused ? " is-form-focused" : ""}${chatOpen ? " is-active" : ""}`}
      aria-label="BIT Spark interactive website guide"
      style={robotStyle}
    >
      {chatOpen && (
        <section className="robot-chat" aria-label="Chat with the BIT Spark guide">
          <header className="robot-chat-header">
            <span><i /> BIT Spark guide</span>
            <button type="button" onClick={() => setChatOpen(false)} aria-label="Close chat">×</button>
          </header>
          <div className="robot-chat-history" role="log" aria-live="polite" aria-relevant="additions">
            {messages.slice(-6).map((message, index) => (
              <p className={`robot-chat-message is-${message.role}`} key={`${index}-${message.text}`}>
                {message.text}
              </p>
            ))}
            <p className="robot-chat-prompt">What would you like to explore?</p>
          </div>
          <div className="robot-quick-replies">
            {QUICK_REPLIES.map((option) => (
              <button type="button" key={option.label} onClick={() => guideTo(option)}>{option.label}</button>
            ))}
          </div>
          <form className="robot-chat-form" onSubmit={submitQuestion}>
            <label className="sr-only" htmlFor="robot-question">Ask the guide a question</label>
            <input
              ref={chatInputRef}
              id="robot-question"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="Ask about our services…"
              maxLength={240}
            />
            <button type="submit" aria-label="Send question">→</button>
          </form>
          <footer className="robot-chat-controls">
            <button type="button" onClick={togglePause}>{paused ? "Resume animations" : "Pause animations"}</button>
            <button type="button" onClick={dismissGuide}>Hide guide · Alt+R to restore</button>
          </footer>
        </section>
      )}
      <div className="robot-guide-dock">
        <button className="robot-dismiss-dock" type="button" onClick={dismissGuide} aria-label="Hide robot guide">×</button>
        <button
          className="robot-guide-button"
          type="button"
          onClick={() => {
            setChatOpen((open) => !open);
          }}
          aria-label={chatOpen ? "Close robot guide chat" : "Open robot guide chat"}
          aria-expanded={chatOpen}
        >
          <span className="robot-guide-trail" aria-hidden="true"><i /><i /><i /></span>
          <div className={`robot-character${pointingTarget ? " is-pointing" : ""}`} aria-hidden="true">
            <svg className="robot-mascot" viewBox="0 0 88 100">
              <g className="robot-orbit">
                <circle className="robot-orbit-line" cx="44" cy="50" r="43" />
                <ellipse className="robot-orbit-line" cx="44" cy="50" rx="18" ry="43" />
                <ellipse className="robot-orbit-line" cx="44" cy="50" rx="43" ry="16" />
                <circle className="robot-orbit-satellite" cx="44" cy="7" r="3" />
                <circle className="robot-orbit-satellite robot-orbit-satellite-small" cx="44" cy="7" r="2" />
              </g>
              <g className="robot-head-group">
                <path className="robot-antenna" d="M44 16V9" />
                <circle className="robot-antenna-light" cx="44" cy="6" r="4" />
                <rect className="robot-ear" x="9" y="34" width="9" height="22" rx="4" />
                <rect className="robot-ear" x="70" y="34" width="9" height="22" rx="4" />
                <rect className="robot-head" x="17" y="17" width="54" height="49" rx="17" />
                <rect className="robot-face" x="23" y="24" width="42" height="32" rx="12" />
                <circle className="robot-eye" cx="35" cy="39" r="3.5" />
                <circle className="robot-eye" cx="53" cy="39" r="3.5" />
                <path className="robot-smile" d="M36 48c4 4 12 4 16 0" />
              </g>
              <path className="robot-body" d="M24 70c0-5 4-9 9-9h22c5 0 9 4 9 9v20H24V70Z" />
              <path className="robot-panel" d="M37 73h14v8H37z" />
              <circle className="robot-light" cx="33" cy="77" r="2" />
              <circle className="robot-light" cx="55" cy="77" r="2" />
              <path className="robot-left-arm" d="M24 73h-6v13h6" />
              <path className="robot-wave-arm" d="M64 73h6v13h-6" />
              <path className="robot-foot" d="M31 90v4m26-4v4" />
            </svg>
            <span className="robot-spark robot-spark-one" />
            <span className="robot-spark robot-spark-two" />
          </div>
          <span className="robot-guide-arrow" aria-hidden="true" />
        </button>
      </div>
    </aside>
  );
}
