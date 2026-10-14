import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { ADDRESS, INSTA, INSTA_URL, PHONE, PHONE_DISPLAY, WHATSAPP, brands, combos, products, waOrder } from "./data.js";

function Glasses({ color = "#0B2E5B", lens = "rgba(180,210,240,.35)" }) {
  return (
    <svg viewBox="0 0 200 70" fill="none">
      <path d="M10 28 C10 18 28 15 52 15 C78 15 92 20 95 30 C97 38 90 58 68 62 C46 66 20 58 12 40 C10 35 9 32 10 28 Z" fill={lens} stroke={color} strokeWidth="5" strokeLinejoin="round" />
      <path d="M190 28 C190 18 172 15 148 15 C122 15 108 20 105 30 C103 38 110 58 132 62 C154 66 180 58 188 40 C190 35 191 32 190 28 Z" fill={lens} stroke={color} strokeWidth="5" strokeLinejoin="round" />
      <path d="M95 30 C98 24 102 24 105 30" stroke={color} strokeWidth="4" strokeLinecap="round" />
      <path d="M10 28 L4 25 M190 28 L196 25" stroke={color} strokeWidth="4" strokeLinecap="round" />
      <path d="M30 28 L38 52 M160 22 L172 50" stroke="#fff" strokeWidth="3" opacity=".7" strokeLinecap="round" />
    </svg>
  );
}

export default function App() {
  const [filter, setFilter] = useState("All");
  const cats = ["All", "Eyeglasses", "Sunglasses", "BlueCut", "Premium"];
  const filtered = products.filter((p) => {
    if (filter === "All") return true;
    if (filter === "Sunglasses") return p.id.includes("voyage");
    if (filter === "Premium") return p.dark || p.brand.includes("TITAN");
    if (filter === "BlueCut") return !p.id.includes("voyage");
    return !p.id.includes("voyage");
  });

  const [form, setForm] = useState({ name: "", phone: "", need: "2 Frames + 2 BlueCut Lens — ₹1100", power: "With Power" });
  const orderMsg = `Namaste Shri Shyam Opticals! I am ${form.name || "[Name]"} (${form.phone || "[Phone]"}). I want: ${form.need} | ${form.power}. Please confirm order.`;

  return (
    <>
      <Navbar />
      <div className="marquee"><div className="marquee-inner">✦ 2 FRAMES WITH 2 BLUECUT LENS @ ₹1100 ✦ PAN INDIA DELIVERY AVAILABLE — ORDER ON {PHONE_DISPLAY} ✦ AUTHORISED: TITAN Eye+ • FASTRACK • NXT • VOYAGE ✦ Bairiya Bus Stand Road, Muzaffarpur ✦ 2 FRAMES WITH 2 BLUECUT LENS @ ₹1100 ✦ PAN INDIA DELIVERY — ORDER NOW ✦&nbsp;</div></div>

      {/* HERO */}
      <header className="hero" id="home">
        <div className="container hero-grid">
          <div className="hero-card">
            <div className="store-badge">🏬 श्री श्याम ऑप्टिकल्स • {ADDRESS} • Auth. Dealer</div>
            <span className="eyebrow"><i />Muzaffarpur • Since Trusted • Premium Eyewear</span>
            <h1 className="h2">Clear Vision.<br /><span className="gold-text">Premium Look.</span><br />Honest Price.</h1>
            <p className="sub">Shri Shyam Opticals brings branded eyewear to Bairiya Road — transparent pricing, genuine BlueCut lenses, free fitting & Pan India delivery on WhatsApp.</p>
            <div className="offer-strip">
              <div className="offer"><span>Combo @</span><b>₹1100</b><div style={{fontSize:13,fontWeight:700}}>2 Frames + 2 BlueCut Lens</div></div>
              <div className="offer"><span>Viral @</span><b>₹1449</b><div style={{fontSize:13,fontWeight:700}}>Crystallux + Ikon Styles</div></div>
              <div className="offer"><span>Insta @</span><b>₹1549</b><div style={{fontSize:13,fontWeight:700}}>Most Loved Combo</div></div>
            </div>
            <div className="hero-actions">
              <a className="btn btn-gold" href={waOrder("Namaste! I want 2 Frames With 2 BlueCut Lens @ Rs1100. Please share designs.")} target="_blank" rel="noreferrer">Order ₹1100 Combo →</a>
              <a className="btn btn-navy" href="#shop">Shop Frames</a>
              <a className="btn btn-ghost" href={`tel:91${PHONE}`}>📞 {PHONE_DISPLAY}</a>
            </div>
            <div className="hero-meta"><span>✓ Power Included</span><span>✓ Free Case + Cloth</span><span>✓ 2000+ Happy Customers</span><span>★ 4.9 Store Rated</span></div>
          </div>

          <div className="hero-visual">
            <div className="lens-stage">
              <div className="float f1">🔵 BlueCut Protected<small>UV420 + Anti-Glare</small></div>
              <div style={{display:'flex',alignItems:'center',gap:14}}>
                <img src="/logo.svg" alt="exact logo" style={{width:72,height:72,borderRadius:'50%',background:'#fff',border:'2px solid #c6a15b'}} />
                <div><div style={{fontWeight:800,letterSpacing:'.06em'}}>SHRI SHYAM OPTICALS</div><div style={{opacity:.75,fontSize:13}}>Bairiya Bus Stand Road, Muz. • Auth. Dealer</div></div>
              </div>
              <div className="glass-row">
                <div className="glass"><div className="glass-illus" style={{background:'linear-gradient(135deg,#e8edf3,#cbd5e1)'}}><Glasses color="#9aa7b4" /></div><b>Crystallux Grey</b><div style={{fontSize:12,color:'#5c6b84',fontWeight:700}}>₹1449 Combo • BlueCut</div></div>
                <div className="glass"><div className="glass-illus" style={{background:'linear-gradient(135deg,#fde8ec,#f9c2cd)'}}><Glasses color="#ff7a9a" /></div><b>Oreo Pink Round</b><div style={{fontSize:12,color:'#5c6b84',fontWeight:700}}>Lightweight • Kids + Women</div></div>
              </div>
              <div className="float f2">🚚 Pan India Delivery<small style={{color:'#cbd5e1'}}>Order on 6201654425</small></div>
              <div className="hero-strip"><span>📍 In Front of Smart Bazaar</span><span>📸 @{INSTA}</span><span>🕙 Open 10AM–9PM</span></div>
            </div>
          </div>
        </div>
      </header>

      {/* BRANDS */}
      <div className="brands">
        <div className="container brands-inner">
          <div style={{fontWeight:800}}>Authorised Dealer • श्री श्याम ऑप्टिकल्स</div>
          <div className="brands-badges">{brands.map(b => <span key={b} className={b.includes('NXT') ? 'b-badge light' : 'b-badge'}>{b}</span>)}</div>
        </div>
      </div>

      {/* COMBOS */}
      <section className="section" id="combos">
        <div className="container">
          <span className="eyebrow"><i />Viral Combos • Same As Instagram Reels</span>
          <h2 className="h2">2 Frames + 2 BlueCut Lens.<br /><span className="gold-text">One Honest Price.</span></h2>
          <p className="sub">Exactly as shown in our store videos. Choose any 2 frames from the combo wall + power BlueCut lenses. WhatsApp us your power — we ship Pan India.</p>
          <div className="combos-grid">
            {combos.map(c => (
              <div key={c.id} className="combo">
                <div className="combo-top"><span style={{background:'#c6a15b',color:'#0b1e3a',fontSize:11,fontWeight:800,padding:'6px 10px',borderRadius:100}}>{c.tag}</span><div style={{marginTop:12}}><span className="combo-price">{c.price}</span><span className="combo-mrp">{c.mrp}</span></div><div style={{fontWeight:800,marginTop:6}}>{c.title}</div><div style={{opacity:.75,fontSize:13,marginTop:4}}>{c.desc}</div></div>
                <div className="combo-body"><ul>{c.points.map(p=><li key={p}>{p}</li>)}</ul><div style={{display:'flex',gap:10,marginTop:6}}><a className="btn btn-gold" style={{flex:1}} href={waOrder(`Namaste! I want ${c.title} @ ${c.price} (${c.tag}). Please share designs.`)} target="_blank" rel="noreferrer">Order {c.price}</a><a className="btn btn-ghost" href={`tel:91${PHONE}`}>Call</a></div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOP */}
      <section className="section shop" id="shop">
        <div className="container">
          <span className="eyebrow"><i />In-Store Collection • Exact Styles</span>
          <h2 className="h2">Shop The <span className="gold-text">Exact Frames</span> From Our Videos</h2>
          <p className="sub">Crystallux grey, Ikon white, Tom Star brown (MRP ₹1399), Oreo pink — plus Voyage & Titan premium. Tap WhatsApp to get live photos + power fitting.</p>
          <div className="cat-row">{cats.map(c=><button key={c} className={`cat ${filter===c?'active':''}`} onClick={()=>setFilter(c)}>{c}</button>)}</div>
          <div className="grid-products">
            {filtered.map(p=>(
              <div key={p.id} className="product">
                <div className="p-visual" style={{background:p.bg}}><span className="p-tag">{p.brand}</span><Glasses color={p.frame} lens={p.dark ? "rgba(20,30,50,.55)" : "rgba(255,255,255,.55)"} /></div>
                <div className="p-body"><div className="p-brand">{p.brand} • {p.shape}</div><div className="p-name">{p.name}</div><div className="p-meta">{p.color} • {p.lens}</div>
                <div className="p-row"><div className="p-price"><b>{p.price}</b><s>{p.mrp}</s></div><a className="btn btn-navy" style={{padding:'10px 16px',fontSize:13}} href={waOrder(`Namaste! I want ${p.brand} - ${p.name} (${p.price}). Is it available?`)} target="_blank" rel="noreferrer">WhatsApp →</a></div></div>
              </div>
            ))}
          </div>
          <p style={{marginTop:18,color:'#5c6b84',fontSize:13}}>Note: To use your <b>exact shop photos</b>, drop them in <code>client/public/</code> as store-front.jpg, frame-1.jpg… and tell me — I’ll swap them in 1:1. Logo already uses your exact logo at <code>/logo.svg</code>.</p>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section" id="experience">
        <div className="container exp-grid">
          <div>
            <span className="eyebrow"><i />Why Shri Shyam • Premium But Honest</span>
            <h2 className="h2">A Premium Optical Studio, <span className="gold-text">Not Just A Shop.</span></h2>
            <p className="sub">Glass-front studio, back-lit walls, 500+ frames on display, proper trial + fitting — in the heart of Muzaffarpur.</p>
            <div className="exp-cards">
              <div className="exp-card"><div className="icon">👁️</div><b>Free Eye Testing</b><p>Power check + BlueCut guidance. Bring old prescription or get tested in-store.</p></div>
              <div className="exp-card"><div className="icon">🛡️</div><b>Genuine Lenses</b><p>BlueCut, anti-glare, UV420. No duplicate lens — bill + brand cover.</p></div>
              <div className="exp-card"><div className="icon">✨</div><b>1-Year Fitting Support</b><p>Free nose-pad, screw, alignment & cleaning for 1 year.</p></div>
              <div className="exp-card"><div className="icon">🚚</div><b>Pan India Delivery</b><p>WhatsApp your power + selfie. Dispatched in 48 hrs across India.</p></div>
            </div>
          </div>
          <div className="showroom">
            <div style={{fontSize:12,letterSpacing:'.2em',fontWeight:800,color:'#f3d27a'}}>INSIDE OUR STORE • BAIRIYA ROAD</div>
            <h3 style={{fontSize:28,margin:'10px 0'}}>Back-Lit Walls. 500+ Frames. Trial Mirrors.</h3>
            <div className="shelf"><div>👓</div><div>🕶️</div><div>👓</div><div>🤓</div></div>
            <div style={{display:'flex',gap:10,flexWrap:'wrap'}}><span style={{background:'#fff',color:'#0b2545',padding:'8px 14px',borderRadius:100,fontSize:13,fontWeight:800}}>Titan Eye+</span><span style={{background:'#fff',color:'#0b2545',padding:'8px 14px',borderRadius:100,fontSize:13,fontWeight:800}}>Fastrack</span><span style={{background:'#fff',color:'#0b2545',padding:'8px 14px',borderRadius:100,fontSize:13,fontWeight:800}}>Voyage</span><span style={{background:'#c6a15b',color:'#0b1e3a',padding:'8px 14px',borderRadius:100,fontSize:13,fontWeight:800}}>NXT Eyewear</span></div>
            <p style={{color:'#9fb0c8',fontSize:14,lineHeight:1.7}}>Red glass-front facade you saw on Instagram — easy to find, easy parking, right on Bairiya Bus Stand Road, in front of Smart Bazaar.</p>
            <div style={{display:'flex',gap:10,flexWrap:'wrap'}}><a className="btn btn-gold" href="#visit">Get Directions →</a><a className="btn btn-ghost" style={{background:'transparent',color:'#fff',borderColor:'rgba(255,255,255,.3)'}} href={INSTA_URL} target="_blank" rel="noreferrer">Watch Reels</a></div>
          </div>
        </div>
      </section>

      {/* VISIT + CONTACT */}
      <section className="section" id="visit" style={{paddingTop:0}}>
        <div className="container">
          <span className="eyebrow"><i />Visit • Order • Contact</span>
          <h2 className="h2">Visit Store Or <span className="gold-text">Order On WhatsApp.</span></h2>
          <div className="visit-grid" id="contact">
            <div className="visit-card">
              <h3 style={{margin:'0 0 8px',fontSize:24}}>Shri Shyam Opticals — श्री श्याम ऑप्टिकल्स</h3>
              <p style={{color:'#9fb0c8',lineHeight:1.7}}>{ADDRESS}<br />Landmark: Bairiya Bus Stand Road, Muzaffarpur</p>
              <div style={{display:'grid',gap:10,marginTop:16,fontSize:15}}><div>📞 <a href={`tel:91${PHONE}`} style={{color:'#fff',fontWeight:800}}>{PHONE_DISPLAY}</a> — Call / WhatsApp</div><div>📸 Instagram: <a href={INSTA_URL} target="_blank" rel="noreferrer" style={{color:'#f3d27a',fontWeight:700}}>@{INSTA}</a></div><div>🕙 Open Daily: 10:00 AM – 9:00 PM</div><div>🚚 Pan India Delivery: 2–5 Days</div></div>
              <div style={{display:'flex',gap:10,marginTop:18,flexWrap:'wrap'}}><a className="btn btn-gold" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Shri Shyam Opticals Bairiya Bus Stand Road Muzaffarpur")}`} target="_blank" rel="noreferrer">Open in Google Maps →</a><a className="btn btn-ghost" style={{background:'#fff'}} href={WHATSAPP} target="_blank" rel="noreferrer">Chat Now</a></div>
              <div style={{marginTop:18,background:'rgba(255,255,255,.06)',border:'1px solid rgba(255,255,255,.12)',borderRadius:14,padding:14,fontSize:13,color:'#cbd5e1'}}>How to order: 1) Screenshot frame from Insta/reel 2) Send power on WhatsApp 3) Confirm address — pay on UPI/cash. Lenses fitted + shipped.</div>
            </div>
            <div className="form-card">
              <h3 style={{margin:'0 0 6px'}}>Quick Order Form</h3><p style={{margin:0,color:'#5c6b84',fontSize:14}}>Fill → tap Order → opens WhatsApp to {PHONE_DISPLAY} with your message ready.</p>
              <div style={{display:'grid',gap:12,marginTop:16}}>
                <div><label>Your Name</label><input className="input" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="e.g. Rahul Kumar" /></div>
                <div><label>Phone</label><input className="input" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="e.g. 98XXXXXXX" /></div>
                <div className="form-row"><div><label>Combo / Need</label><select value={form.need} onChange={e=>setForm({...form,need:e.target.value})}><option>2 Frames + 2 BlueCut Lens — ₹1100</option><option>2 Frames + 2 Bluecut Lens — ₹1449</option><option>2 Frames + 2 Bluecut Lens — ₹1549</option><option>Single Frame + BlueCut</option><option>Sunglass — Voyage / Fastrack</option><option>Eye Test + Frame</option></select></div><div><label>Power</label><select value={form.power} onChange={e=>setForm({...form,power:e.target.value})}><option>With Power</option><option>Zero Power</option><option>Will Share Prescription</option><option>Need Eye Test In-Store</option></select></div></div>
                <a className="btn btn-gold" href={waOrder(orderMsg)} target="_blank" rel="noreferrer">Order on WhatsApp →</a>
                <a className="btn btn-navy" href={`tel:91${PHONE}`}>Or Call {PHONE_DISPLAY}</a>
              </div>
            </div>
          </div>

          {/* REVIEWS */}
          <div className="rev-grid">
            {[["Ravi K., Muzaffarpur","Took ₹1100 combo — 2 frames + BlueCut with power. Fitting perfect, delivery in 3 days. Shop looks premium. ★★★★★"],["Sneha S., Patna","Ordered on WhatsApp seeing Insta reel. Sent power, got Crystallux transparent pair. Genuine lens, case free. ★★★★★"],["Amit P., Bairiya","Best optical on Bus Stand Road. Titan + Voyage available, eye testing free, honest price. Family shop now. ★★★★★"]].map(r=>(
              <div key={r[0]} className="rev"><div className="stars">★★★★★</div><p style={{lineHeight:1.7,color:'#2a3a56'}}>{r[1]}</p><b>{r[0]}</b></div>
            ))}
          </div>

          {/* FAQ */}
          <div id="faq" style={{marginTop:56,textAlign:'center'}}><span className="eyebrow"><i />FAQ</span><h2 className="h2">Questions? Answered.</h2></div>
          <div className="faq">
            <div className="faq-item"><b>Is power included in ₹1100 / ₹1449 / ₹1549 combos?</b><p>Yes. Single-vision power + BlueCut lenses included. High power / progressive charged extra — confirmed on WhatsApp before fitting.</p></div>
            <div className="faq-item"><b>Do you deliver outside Muzaffarpur?</b><p>Yes — Pan India delivery. Share frame screenshot + power + address on {PHONE_DISPLAY}. Dispatch in 48 hrs.</p></div>
            <div className="faq-item"><b>Which brands do you keep?</b><p>Authorised Dealer — Titan Eye+, Fastrack, NXT Eyewear, Voyage + Crystallux, Ikon, Tom Star, Oreo value range.</p></div>
            <div className="faq-item"><b>Where exactly is the store?</b><p>{ADDRESS}. Search “Shri Shyam Opticals Bairiya” on Google Maps or call us — 2 min from Bus Stand.</p></div>
          </div>
        </div>
      </section>

      <a className="wa-float" href={WHATSAPP} target="_blank" rel="noreferrer"><span>💬</span> Order: {PHONE_DISPLAY}</a>
      <Footer />
    </>
  );
}
