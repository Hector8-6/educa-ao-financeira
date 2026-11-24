
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-button");
  const navLinks = document.querySelector(".nav-links");
  const backToTop = document.querySelector("#backToTop");

  // MENU MOBILE
  if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
      navLinks.classList.toggle("open");

      const aberto = navLinks.classList.contains("open");
      menuButton.setAttribute("aria-expanded", String(aberto));
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  // BOTÃO VOLTAR AO TOPO
  function controlarBotaoTopo() {
    if (backToTop) {
      backToTop.classList.toggle("show", window.scrollY > 400);
    }
  }

  window.addEventListener("scroll", controlarBotaoTopo);
  controlarBotaoTopo();

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // ANIMAÇÃO AO ROLAR A PÁGINA
  const elementos = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12
    });

    elementos.forEach(elemento => observer.observe(elemento));
  } else {
    elementos.forEach(elemento => {
      elemento.classList.add("visible");
    });
  }

  // DESTAQUE DO LINK DA SEÇÃO ATUAL
  const secoes = document.querySelectorAll("main section[id]");
  const links = document.querySelectorAll(".nav-links a");

  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          links.forEach(link => {
            const destino = link.getAttribute("href");

            link.classList.toggle(
              "active",
              destino === `#${entry.target.id}`
            );
          });
        }
      });
    }, {
      rootMargin: "-30% 0px -60% 0px"
    });

    secoes.forEach(secao => sectionObserver.observe(secao));
  }
});
