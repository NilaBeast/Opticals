export const PHONE = "6201654425";
export const PHONE_DISPLAY = "+91 62016 54425";
export const WHATSAPP = `https://wa.me/916201654425`;
export const ADDRESS = "Bairiya Bus Stand Road, In Front of Smart Bazaar, Muzaffarpur, Bihar";
export const ADDRESS_SHORT = "Bairiya Bus Stand Road, Muz.";
export const INSTA = "shri_shyam_opticals_bihar";
export const INSTA_URL = "https://www.instagram.com/shri_shyam_opticals_bihar";

export const combos = [
  {
    id: "combo-1100",
    price: "₹1100",
    mrp: "₹2199",
    title: "2 Frames With 2 Blue Cut Lens",
    tag: "Bestseller",
    desc: "Everyday premium frames + genuine BlueCut lenses. Power included. Pan India delivery.",
    points: ["2 Premium Frames", "2 BlueCut Lenses", "Power Included", "Free Case & Cloth"],
  },
  {
    id: "combo-1449",
    price: "₹1449",
    mrp: "₹2899",
    title: "2 Frames With 2 Bluecut Lens",
    tag: "Crystal / Ikon Choice",
    desc: "As seen in store — transparent Crystallux + Ikon styles. Anti-glare, UV + blue-light guard.",
    points: ["Crystallux + Ikon Styles", "Anti-Glare Coating", "UV 420 Protection", "1 Yr Fitting Support"],
  },
  {
    id: "combo-1549",
    price: "₹1549",
    mrp: "₹3199",
    title: "2 Frames With 2 Bluecut Lens",
    tag: "Most Loved on Instagram",
    desc: "Our viral Instagram combo. Upgrade your look + protect eyes from screens all day.",
    points: ["2 Stylish Frames", "2 Bluecut Lenses", "Pan India Delivery", "WhatsApp Ordering"],
  },
];

export const products = [
  {
    id: "crystallux-grey",
    brand: "CRYSTALLUX",
    name: "Transparent Smoke Grey Square",
    price: "₹749",
    mrp: "₹1499",
    lens: "BlueCut Included Option",
    color: "Smoke Grey",
    shape: "Square / Rectangle",
    bg: "linear-gradient(135deg,#e8edf3,#cbd5e1)",
    frame: "#9aa7b4",
  },
  {
    id: "ikon-clear",
    brand: "IKON",
    name: "Crystal White Transparent",
    price: "₹699",
    mrp: "₹1399",
    lens: "BlueCut Included Option",
    color: "Crystal White",
    shape: "Square Bold",
    bg: "linear-gradient(135deg,#f1f5f9,#dbe4ee)",
    frame: "#cbd5e1",
  },
  {
    id: "tomstar-brown",
    brand: "TOM STAR",
    name: "Walnut Brown — MRP ₹1399",
    price: "₹899",
    mrp: "₹1399",
    lens: "Power + BlueCut Ready",
    color: "Walnut Brown",
    shape: "Rectangle 51□18-140",
    bg: "linear-gradient(135deg,#efe6d8,#d9c7a8)",
    frame: "#5b2118",
  },
  {
    id: "oreo-pink",
    brand: "OREO",
    name: "Blush Pink Round Transparent",
    price: "₹649",
    mrp: "₹1299",
    lens: "Zero Power / Power Ready",
    color: "Transparent Pink",
    shape: "Round Panto",
    bg: "linear-gradient(135deg,#fde8ec,#f9c2cd)",
    frame: "#ff7a9a",
  },
  {
    id: "voyage-black",
    brand: "VOYAGE",
    name: "Midnight Black Aviator Sunglass",
    price: "₹1299",
    mrp: "₹2499",
    lens: "Polarized UV400",
    color: "Black Gold",
    shape: "Aviator / Round",
    bg: "linear-gradient(135deg,#111c30,#334155)",
    frame: "#0b1526",
    dark: true,
  },
  {
    id: "titan-slim",
    brand: "TITAN Eye+",
    name: "Navy Slim Metal Premium",
    price: "₹1799",
    mrp: "₹3200",
    lens: "BlueCut / Progressive Ready",
    color: "Navy Gold",
    shape: "Slim Rectangle",
    bg: "linear-gradient(135deg,#0b2545,#c6a15b)",
    frame: "#0b2545",
    dark: true,
  },
];

export const brands = ["TITAN Eye+", "fastrack", "NXT Eyewear", "VOYAGE EYEWEAR"];

export function waOrder(text) {
  return `${WHATSAPP}?text=${encodeURIComponent(text)}`;
}
