"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const links = [["01", "Work", "#work"], ["02", "Services", "#services"], ["03", "Process", "#process"], ["04", "Contact", "#contact"]];
  return <div className="mobile-nav-wrap">
    <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
      {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}<span>{open ? "Close" : "Menu"}</span>
    </button>
    <nav id="mobile-nav" className={`mobile-nav ${open ? "is-open" : ""}`} aria-label="Mobile navigation">
      {links.map(([number, label, href]) => <a href={href} key={href} onClick={() => setOpen(false)}><span>{number}</span>{label}</a>)}
      <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Start a conversation ↗</a>
    </nav>
  </div>;
}
