import Entrance from "@/components/Entrance";

export default function PageHero({ eyebrow, title, description }: { eyebrow:string; title:string; description:string }) {
  return (
    <section className="page-hero">
      <Entrance className="container">
        <span className="kicker">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </Entrance>
    </section>
  );
}
