import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { services } from "@/data/services";

const programs = [
  { number: "01", title: "Tabagismo", text: "Acompanhamento personalizado para reduzir a dependência, controlar gatilhos e construir uma vida livre do cigarro.", href: "/cuidados/cessacao-do-tabagismo" },
  { number: "02", title: "DPOC", text: "Plano contínuo para controlar sintomas, prevenir exacerbações e preservar a capacidade respiratória e a autonomia.", href: "/cuidados/consulta-com-pneumologista" },
  { number: "03", title: "Doenças Fibrosantes", text: "Monitoramento especializado da função pulmonar, sintomas e resposta ao tratamento ao longo do tempo.", href: "/cuidados/doencas-fibrosantes" },
  { number: "04", title: "Asma", text: "Controle estruturado das crises, identificação de gatilhos e ajuste do tratamento para respirar com segurança.", href: "/cuidados/asma" },
  { number: "05", title: "Apneia do Sono", text: "Acompanhamento da qualidade do sono e da adaptação ao tratamento para recuperar energia e bem-estar.", href: "/cuidados/apneia-do-sono" },
  { number: "06", title: "Alergias Respiratórias", text: "Investigação de alérgenos, prevenção de crises e acompanhamento da evolução dos sintomas respiratórios.", href: "/cuidados/doencas-alergicas" },
];

export default function Home() {
  return <>
    <SiteHeader />
    <main>
      <section className="hero">
        <div className="hero-atmosphere"><i/><i/><i/></div>
        <div className="hero-copy">
          <p className="kicker">Pneumologia em Maringá</p>
          <h1>Respirar bem.<br/><em>Viver por inteiro.</em></h1>
          <p className="hero-lead">Cuidado respiratório especializado, preciso e humano — da prevenção ao tratamento.</p>
          <div className="hero-actions"><a href="https://wa.me/5544991721222" className="button" target="_blank" rel="noreferrer">Agendar consulta <span>↗</span></a><Link href="#cuidados" className="text-link">Conheça os cuidados <span>↓</span></Link></div>
        </div>
        <div className="lung-art" aria-hidden="true">
          <div className="air air-one"/><div className="air air-two"/><div className="air air-three"/>
          <svg viewBox="0 0 580 660" fill="none"><path d="M291 68v184M291 182c-39 17-64 50-76 98M291 182c39 17 64 50 76 98" className="trachea"/><path d="M269 260c-20-72-66-114-114-104-52 11-90 82-102 167-17 117 18 232 104 238 76 5 113-50 114-120l-2-181Z" className="lung left"/><path d="M313 260c20-72 66-114 114-104 52 11 90 82 102 167 17 117-18 232-104 238-76 5-113-50-114-120l2-181Z" className="lung right"/><path d="M266 278c-47 39-76 91-85 160M316 278c47 39 76 91 85 160M242 323l-59-39M340 323l59-39M224 369l-56 22M358 369l56 22" className="bronchi"/></svg>
          <div className="hero-stat"><b>20+</b><span>anos dedicados<br/>à medicina</span></div>
        </div>
        <div className="scroll-cue"><span>Role para descobrir</span><i/></div>
      </section>

      <section className="intro" id="sobre">
        <Reveal className="intro-visual">
          <div className="intro-photo intro-photo-main"><Image src="/clinic/corredor.jpeg" alt="Ambientes internos do Centro Médico do Pulmão" fill sizes="(max-width: 900px) 86vw, 24vw"/></div>
          <div className="intro-photo intro-photo-detail"><Image src="/clinic/consultorio.jpeg" alt="Consultório do Centro Médico do Pulmão" fill sizes="(max-width: 900px) 38vw, 13vw"/></div>
        </Reveal>
        <Reveal className="intro-title"><p className="kicker">Medicina que escuta</p><h2>Experiência clínica.<br/><em>Cuidado que acolhe.</em></h2></Reveal>
        <Reveal className="intro-copy" delay={160}><p>O cuidado começa por compreender cada história. Uma atuação baseada em evidências, precisão diagnóstica e decisões compartilhadas.</p><Link href="#formacao" className="text-link">Conheça a trajetória <span>↘</span></Link></Reveal>
      </section>

      <section className="care" id="cuidados">
        <div className="section-head"><div><p className="kicker">Áreas de cuidado</p><h2>Um olhar completo<br/>para a sua <em>respiração.</em></h2></div><p>Da investigação de sintomas ao acompanhamento de doenças crônicas e procedimentos especializados.</p></div>
        <div className="service-grid">
          {services.map((service, index) => <Reveal key={service.slug} delay={(index % 3) * 70}><Link className="service-card" href={`/cuidados/${service.slug}`}><span className="service-index">{service.icon}</span><div className="service-icon"><i/><i/><i/></div><h3>{service.title}</h3><p>{service.short}</p><span className="card-link">Saiba mais <b>↗</b></span></Link></Reveal>)}
        </div>
      </section>

      <section className="clinic-feature" aria-labelledby="estrutura-title">
        <Reveal className="clinic-feature-main">
          <div className="clinic-feature-image"><Image src="/clinic/recepcao-ampla.jpeg" alt="Recepção ampla do Centro Médico do Pulmão" fill sizes="(max-width: 900px) 100vw, 58vw"/></div>
          <div className="clinic-feature-caption"><span>Centro Médico do Pulmão</span><b>Conforto desde a chegada</b></div>
        </Reveal>
        <Reveal className="clinic-feature-copy" delay={120}>
          <p className="kicker">Estrutura completa</p>
          <h2 id="estrutura-title">Cuidado e tecnologia<br/><em>no mesmo lugar.</em></h2>
          <p>Ambientes acolhedores e estrutura preparada para consultas, avaliações e exames respiratórios com segurança.</p>
          <div className="clinic-feature-detail"><Image src="/clinic/equipamentos.jpeg" alt="Equipamentos para exames de função pulmonar" fill sizes="(max-width: 900px) 42vw, 22vw"/><span>Equipamentos para avaliação da função pulmonar</span></div>
        </Reveal>
      </section>

      <section className="pat-section" id="programas">
        <Reveal className="pat-heading"><div><p className="kicker light">Cuidado que continua</p><h2>PATs</h2><span>Programas de Acompanhamento<br/>e Tratamento</span></div><p>Planos de cuidado contínuo, pensados para acompanhar cada etapa do tratamento, avaliar a evolução e promover mais qualidade de vida.</p></Reveal>
        <div className="pat-grid">
          {programs.map((program, index) => <Reveal key={program.title} delay={(index % 3) * 80}><Link href={program.href} className="pat-card"><span className="pat-number">{program.number}</span><div className="pat-symbol"><i/><i/></div><h3>{program.title}</h3><p>{program.text}</p><span className="pat-link">Conheça o programa <b>↗</b></span></Link></Reveal>)}
        </div>
      </section>

      <section className="credentials" id="formacao">
        <Reveal className="credentials-visual"><div className="credentials-orbit credentials-orbit-one"/><div className="credentials-orbit credentials-orbit-two"/><div className="credentials-portrait-frame"><Image src="/clinic/dr-sergio-profissional-barba.webp" alt="Retrato profissional do Dr. Sergio Grava com barba" fill sizes="(max-width: 600px) 240px, 360px"/></div><div className="credentials-photo-label"><span>Dr. Sergio Grava</span><small>Pneumologista • RQE 13548</small></div></Reveal>
        <Reveal className="credentials-copy"><p className="kicker light">Formação & experiência</p><h2>Ciência, precisão<br/>e <em>humanidade.</em></h2><p>Médico formado pela Universidade Estadual de Maringá, com especialização em Pneumologia e área de atuação em Endoscopia Respiratória pela UNIFESP.</p><div className="degree-list"><div><span>01</span><p><b>Pneumologista</b>RQE 13548</p></div><div><span>02</span><p><b>Endoscopia Respiratória</b>RQE 158 • UNIFESP</p></div><div><span>03</span><p><b>Mestre em Ciências da Saúde</b>Universidade Estadual de Maringá</p></div><div><span>04</span><p><b>Doutor em Biociências e Fisiopatologia</b>Universidade Estadual de Maringá</p></div></div></Reveal>
      </section>

      <section className="principles"><p className="kicker">Um cuidado diferente</p><div className="principle-grid"><Reveal><span>01</span><h3>Escuta atenta</h3><p>Tempo e atenção para entender seus sintomas, rotina e objetivos.</p></Reveal><Reveal delay={90}><span>02</span><h3>Decisão compartilhada</h3><p>Informação clara para que você participe de cada escolha do tratamento.</p></Reveal><Reveal delay={180}><span>03</span><h3>Medicina baseada em evidências</h3><p>Condutas atualizadas, seguras e adequadas à realidade de cada paciente.</p></Reveal></div></section>

      <section className="location-feature" id="clinica">
        <div className="location-image"><Image src="/clinic/fachada.jpeg" alt="Fachada do Centro Médico do Pulmão em Maringá" fill sizes="100vw"/></div>
        <Reveal className="location-card">
          <p className="kicker light">Onde estamos</p>
          <h2>Centro Médico<br/>do Pulmão</h2>
          <p>Avenida Carlos Gomes, 242<br/>Zona 05 — Maringá, PR</p>
          <a href="https://www.google.com/maps/search/?api=1&query=Avenida+Carlos+Gomes+242+Maringa+PR" target="_blank" rel="noreferrer" className="button button-light">Ver no mapa <span>↗</span></a>
        </Reveal>
      </section>

    </main>
    <SiteFooter />
  </>;
}
