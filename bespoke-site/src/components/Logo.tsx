import Image from "next/image";

export default function Logo() {
  return (
    <span className="brand-lockup" aria-label="BSMH logo">
      <Image
        src="/BS.png"
        alt="BIT SPARK Technologies logo"
        width={260}
        height={90}
        priority
        className="brand-image"
      />
    </span>
  );
}
