import { useState } from "react";
import { PHONE_DISPLAY, WHATSAPP, ADDRESS_SHORT } from "../data.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <div><span className="topbar-dot" />Pan India Delivery Available • {ADDRESS_SHORT}</div>
          <div style={{display:'flex',gap:14}}>
            <a href="tel:916201654425">{PHONE_DISPLAY}</a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" style={{color:'#4ade80'}}>WhatsApp Order</a>
          </div>
        </div>
      </div>
      <nav className="nav">
        <div className="container nav-inner">
          <a href="#home" className="brand">
            <span className="brand-logo"><img src="/logo.svg" alt="Shri Shyam Opticals logo" /></span>
            <span className="brand-name"><b>SHRI SHYAM</b><span>OPTICALS</span></span>
          </a>
          <div className="links">
            <a href="#home">Home</a>
            <a href="#combos">Combos</a>
            <a href="#shop">Shop</a>
            <a href="#experience">Why Us</a>
            <a href="#visit">Visit Store</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="nav-cta">
            <a className="call-pill" href="tel:916201654425">📞 {PHONE_DISPLAY}</a>
            <a className="btn btn-ghost" href="#shop">Explore Frames</a>
            <a className="btn btn-gold" href={WHATSAPP} target="_blank" rel="noreferrer">Order Now →</a>
            <button className="hamburger" onClick={()=>setOpen(!open)} aria-label="menu">☰</button>
          </div>
        </div>
        <div className={`mobile-menu ${open ? 'show' : ''}`}>
          <a href="#home" onClick={()=>setOpen(false)}>Home</a>
          <a href="#combos" onClick={()=>setOpen(false)}>Combos — ₹1100 Onwards</a>
          <a href="#shop" onClick={()=>setOpen(false)}>Shop Frames</a>
          <a href="#experience" onClick={()=>setOpen(false)}>Why Shri Shyam</a>
          <a href="#visit" onClick={()=>setOpen(false)}>Visit Store</a>
          <a href="#contact" onClick={()=>setOpen(false)}>Contact / Order</a>
        </div>
      </nav>
    </>
  );
}
