/* EDIT YOUR CONTACT LINKS HERE */

// WhatsApp number (international format, no +)
const WHATSAPP_NUMBER = "2349169475025";

// Social media links
const X_LINK = "https://x.com/yourusername";
const FB_LINK = "https://www.facebook.com/profile.php?id=61585429714538";
const TIKTOK_LINK = "https://tiktok.com/@yourusername";

// DO NOT EDIT BELOW
function orderService(service) {
  const message = `Hello Minie Tech, I’d like to discuss your services on WhatsApp.`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

document.getElementById("whatsappBtn").addEventListener("click", function(e) {
  e.preventDefault();
  orderService("contact");
});

// Set social links
document.getElementById("xLink").href = X_LINK;
document.getElementById("fbLink").href = FB_LINK;
document.getElementById("ttLink").href = TIKTOK_LINK;
