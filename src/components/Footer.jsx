import { ADDRESS, INSTA_URL, PHONE, PHONE_DISPLAY, WHATSAPP } from "../data.js";

export default function Footer() {
  return (
    <footer>
      <div className="container foot-grid">
        <div>
          <div className="foot-brand">
            <img src="/logo.svg" alt="Shri Shyam Opticals exact logo" />
            <div><div style={{fontFamily:'Fraunces, serif',fontSize:20,fontWeight:700}}>SHRI SHYAM</div><div style={{fontSize:11,letterSpacing:'.3em',color:'#c6a15b',fontWeight:800}}>OPTICALS</div></div>
          </div>
          <p style={{marginTop:14,lineHeight:1.7}}>Premium eyewear in Muzaffarpur. Authorised Dealer for Titan Eye+, Fastrack, NXT Eyewear & Voyage. 2 Frames + 2 BlueCut Lens combos with Pan India delivery.</p>
          <p style={{marginTop:10}}>📍 {ADDRESS}</p>
          <p>📞 <a href={`tel:91${PHONE}`} style={{display:'inline',color:'#fff'}}>{PHONE_DISPLAY}</a> • <a href={INSTA_URL} target="_blank" rel="noreferrer" style={{display:'inline'}}>Instagram</a></p>
        </div>
        <div>
          <h4>Shop</h4>
          <a href="#combos">Combo ₹1100</a>
          <a href="#combos">Combo ₹1449</a>
          <a href="#combos">Combo ₹1549</a>
          <a href="#shop">Eyeglasses</a>
          <a href="#shop">Sunglasses</a>
          <a href="#shop">BlueCut Lenses</a>
        </div>
        <div>
          <h4>Store</h4>
          <a href="#experience">Why Shri Shyam</a>
          <a href="#visit">Visit Store</a>
          <a href="#contact">Order on WhatsApp</a>
          <a href="#faq">FAQ</a>
          <a href={INSTA_URL} target="_blank" rel="noreferrer">Instagram Reels</a>
        </div>
        <div>
          <h4>Visit Us</h4>
          <p>Bairiya Bus Stand Road,<br/>In Front of Smart Bazaar,<br/>Muzaffarpur, Bihar</p>
          <p style={{marginTop:8}}>Open Daily: 10:00 AM – 9:00 PM<br/>Eye Testing Available</p>
          <div style={{display:'flex',gap:10,marginTop:12}}>
            <a className="btn btn-gold" style={{padding:'11px 18px',fontSize:13}} href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp</a>
            <a className="btn btn-ghost" style={{padding:'11px 18px',fontSize:13,background:'transparent',color:'#fff'}} href={`tel:91${PHONE}`}>Call Store</a>
          </div>
        </div>
      </div>
      <div className="container foot-bottom">
        <span>© {new Date().getFullYear()} Shri Shyam Opticals • श्री श्याम ऑप्टिकल्स • All rights reserved.</span>
        <span>Authorised Dealer: Titan Eye+ • Fastrack • NXT • Voyage • Made for Vercel Deployment</span>
      </div>
    </footer>
  );
}
