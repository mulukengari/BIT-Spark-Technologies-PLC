import Link from "next/link";
import PageHero from "./PageHero";

export default function GenericPage({eyebrow,title,description,cards,robotTarget}:{eyebrow:string,title:string,description:string,cards:{title:string,text:string;href?:string}[],robotTarget?:string}) {
 const target = robotTarget || eyebrow.toLowerCase().replace(/[^a-z0-9]+/g, "-");
 return <><PageHero eyebrow={eyebrow} title={title} description={description}/><section className="content-section" data-robot-target={target}><div className="container"><div className="content-grid">{cards.map(card=><Link href={card.href||"/contact"} className="content-card" key={card.title} data-robot-target={card.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")} data-robot-tip={card.text}><h3>{card.title}</h3><p>{card.text}</p></Link>)}</div><div style={{marginTop:40,textAlign:"center"}}><Link className="button button-primary" href="/contact">Start a conversation</Link></div></div></section></>;
}
