import { notFound } from "next/navigation";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { getService, services } from "@/data/services";

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const current = services.findIndex((item) => item.slug === slug);
  const next = services[(current + 1) % services.length];
  return <><SiteHeader/><main className="detail-page">
    <section className="detail-hero">
      <div className="detail-orb"><span>{service.icon}</span><i/><i/></div>
      <Link href="/#cuidados" className="back-link">← Todos os cuidados</Link>
      <p className="kicker">{service.eyebrow}</p>
      <h1>{service.title}</h1>
      <p className="detail-lead">{service.intro}</p>
      <a href="https://wa.me/5544991721222" target="_blank" rel="noreferrer" className="button">Agende sua avaliação respiratória <span>↗</span></a>
    </section>
    <section className="detail-content">
      <div className="detail-aside"><span>Dr. Sergio Grava</span><p>Pneumologista<br/>RQE 13548</p></div>
      <div className="detail-sections">{service.sections.map((section, index) => <Reveal key={section.title} className="detail-section"><span>0{index + 1}</span><div><h2>{section.title}</h2><p>{section.body}</p></div></Reveal>)}</div>
    </section>
    <section className="next-service"><p className="kicker light">Continue explorando</p><Link href={`/cuidados/${next.slug}`}><span>Próximo cuidado</span><h2>{next.title}</h2><b>↗</b></Link></section>
  </main><SiteFooter/></>;
}
