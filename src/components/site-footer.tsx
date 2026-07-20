import Link from "next/link";

export function SiteFooter() {
  return <footer id="contato" className="footer">
    <div className="footer-orbit" />
    <div className="footer-content">
      <p className="kicker light">Vamos conversar</p>
      <h2>Cuidar da sua respiração<br/>é cuidar da sua vida.</h2>
      <a href="https://wa.me/5544991721222" target="_blank" rel="noreferrer" className="button button-light">Agendar pelo WhatsApp <span>↗</span></a>
      <div className="footer-grid">
        <div><span>Consultório</span><p>Avenida Carlos Gomes, 242<br/>Zona 05 — Maringá, PR<br/>CEP 87015-200</p></div>
        <div><span>Contato</span><a href="tel:+5544991721222">(44) 99172-1222</a><a href="mailto:sergiogravapneumo@gmail.com">sergiogravapneumo@gmail.com</a></div>
        <div><span>Redes</span><a href="https://www.instagram.com/drsergiograva.pneumo/">Instagram ↗</a><a href="https://www.linkedin.com/in/sergio-grava-3162102a">LinkedIn ↗</a><a href="https://facebook.com/sergio.grava.1/">Facebook ↗</a></div>
      </div>
      <div className="footer-bottom"><Link href="/" className="brand footer-brand"><span className="brand-mark">SG</span><span><b>Dr. Sergio Grava</b><small>Pneumologista • RQE 13548</small></span></Link><div className="footer-meta"><p>© {new Date().getFullYear()} Dr. Sergio Grava. Todos os direitos reservados.</p><a className="novaweb-credit" href="https://nova-web.it" target="_blank" rel="noreferrer">Made by <strong>NovaWeb Studio</strong> <span>↗</span></a></div></div>
    </div>
  </footer>;
}
