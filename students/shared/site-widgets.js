// Hungarian4You - Közös, minden oldalon megjelenő elemek
// (A Buy Me a Coffee gomb közvetlenül, statikusan van beágyazva minden oldal
//  <body> záró tagje elé, mert az megbízhatóbb, mint a dinamikus JS-es beszúrás.)

// --- Közösségi média ikonsáv (Facebook, Instagram, YouTube, E-mail) ---
// A linkeket itt, egy helyen lehet módosítani — minden oldal automatikusan frissül.
(function () {
  var SOCIAL_LINKS = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/1Ze9X4Vcxu/?mibextid=wwXIfr",
      svg: '<rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M14 8h-1.5c-.8 0-1.5.7-1.5 1.5V11h3l-.4 3h-2.6v6h-3v-6H7v-3h1.5V9.2C8.5 7 10 5.5 12.2 5.5H14V8z" fill="currentColor"/>'
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/hungarian_citizenship_prep?igsh=czAwMW1lc2lkZXhx&utm_source=qr",
      svg: '<rect x="2" y="2" width="20" height="20" rx="6" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="17.2" cy="6.8" r="1.15" fill="currentColor"/>'
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@Hungarian4You",
      svg: '<rect x="2" y="5" width="20" height="14" rx="4" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M10 9l6 3-6 3V9z" fill="currentColor"/>'
    },
    {
      name: "Email",
      url: "mailto:peter@hungarian4you.com",
      svg: '<rect x="2" y="4" width="20" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M3 5.5l9 7 9-7" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>'
    }
  ];

  var style = document.createElement("style");
  style.textContent = [
    "#h4y-social-bar{position:fixed;left:16px;bottom:16px;z-index:9998;display:flex;flex-direction:column;gap:8px;",
    "opacity:0;pointer-events:none;transform:translateY(10px);transition:opacity 0.35s ease, transform 0.35s ease;}",
    "#h4y-social-bar.h4y-visible{opacity:1;pointer-events:auto;transform:translateY(0);}",
    "#h4y-social-bar a{width:38px;height:38px;border-radius:50%;background:#fff;color:#1a1a1a;",
    "border:1.4px solid rgba(0,0,0,0.15);display:flex;align-items:center;justify-content:center;",
    "box-shadow:0 4px 10px rgba(0,0,0,0.12);transition:transform 0.15s ease, box-shadow 0.15s ease;text-decoration:none;}",
    "#h4y-social-bar a:hover{transform:translateY(-2px);box-shadow:0 6px 14px rgba(0,0,0,0.18);color:#000;}",
    "#h4y-social-bar svg{width:19px;height:19px;}",
    "@media (max-width:640px){#h4y-social-bar{left:10px;bottom:10px;}#h4y-social-bar a{width:34px;height:34px;}#h4y-social-bar svg{width:17px;height:17px;}}"
  ].join("");
  document.head.appendChild(style);

  var bar = document.createElement("div");
  bar.id = "h4y-social-bar";
  SOCIAL_LINKS.forEach(function (item) {
    var a = document.createElement("a");
    a.href = item.url;
    a.target = "_blank";
    a.rel = "noopener";
    a.setAttribute("aria-label", item.name);
    a.title = item.name;
    a.innerHTML = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' + item.svg + '</svg>';
    bar.appendChild(a);
  });

  if (document.body) {
    document.body.appendChild(bar);
  } else {
    document.addEventListener("DOMContentLoaded", function () {
      document.body.appendChild(bar);
    });
  }

  // A sáv csak akkor jelenik meg, ha a diák a lap aljához közel görget
  // (kb. 200 pixelen belül a lap végétől).
  function updateSocialBarVisibility() {
    var scrollBottom = window.innerHeight + window.scrollY;
    var pageHeight = document.documentElement.scrollHeight;
    var nearBottom = scrollBottom >= pageHeight - 200;
    bar.classList.toggle("h4y-visible", nearBottom);
  }
  window.addEventListener("scroll", updateSocialBarVisibility, { passive: true });
  window.addEventListener("resize", updateSocialBarVisibility);
  updateSocialBarVisibility();
})();
