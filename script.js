6
// ========================================
// EDUCAÇÃO FINANCEIRA
// Interatividade do site
// ========================================

// MENU MOBILE
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const opened = navLinks.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", opened);
    menuButton.textContent = opened ? "✕" : "☰";
  });

  // Fecha o menu ao selecionar uma seção
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.textContent = "☰";
    });
  });
}

// BOTÃO VOLTAR AO TOPO
const backTop = document.getElementById("backTop");

if (backTop) {
  window.addEventListener("scroll", () => {
    backTop.classList.toggle("show", window.scrollY > 400);
  });

  backTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// ANIMAÇÕES AO ROLAR A PÁGINA
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  revealElements.forEach(element => {
    observer.observe(element);
  });
} else {
  revealElements.forEach(element => {
    element.classList.add("visible");
  });
}

// ANO AUTOMÁTICO NO RODAPÉ
const copyright = document.querySelector(".copyright");

if (copyright) {
  copyright.textContent = `© ${new Date().getFullYear()} · Projeto educacional`;
}
