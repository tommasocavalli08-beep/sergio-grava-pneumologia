"use client";

import Link from "next/link";
import { useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="header-inner">
      <Link href="/" className="brand" onClick={() => setOpen(false)} aria-label="Dr. Sergio Grava — Início">
        <span className="brand-mark">SG</span>
        <span><b>Dr. Sergio Grava</b><small>Pneumologia & Endoscopia Respiratória</small></span>
      </Link>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Abrir menu"><i/><i/></button>
      <nav className={open ? "open" : ""}>
        <Link href="/#sobre" onClick={() => setOpen(false)}>Sobre</Link>
        <Link href="/#cuidados" onClick={() => setOpen(false)}>Cuidados</Link>
        <Link href="/#contato" onClick={() => setOpen(false)}>Contato</Link>
        <a className="nav-cta" href="https://wa.me/5544991721222" target="_blank" rel="noreferrer">Agendar consulta <span>↗</span></a>
      </nav>
    </div>
  </header>;
}
