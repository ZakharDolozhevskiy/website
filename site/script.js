// Cursor spotlight
const root = document.documentElement;
window.addEventListener("pointermove", (e) => {
  root.style.setProperty("--mx", e.clientX + "px");
  root.style.setProperty("--my", e.clientY + "px");
});

// Scroll-spy for nav
const links = [...document.querySelectorAll(".nav a")];
const sections = links.map((a) => document.querySelector(a.getAttribute("href")));

const spy = () => {
  const y = window.scrollY + window.innerHeight * 0.3;
  let current = sections[0];
  for (const s of sections) if (s.offsetTop <= y) current = s;
  if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) current = sections[sections.length - 1];
  links.forEach((a) => {
    const isCurrent = a.getAttribute("href") === "#" + current.id;
    a.classList.toggle("active", isCurrent);
    if (isCurrent) a.setAttribute("aria-current", "location");
    else a.removeAttribute("aria-current");
  });
};
window.addEventListener("scroll", spy, { passive: true });
window.addEventListener("resize", spy);
spy();
