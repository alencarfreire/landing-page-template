function initAccordionList() {
  const accordionList = document.querySelectorAll(".js-accordion dt");

  function activeAccordion() {
    const activeclass = "ativo";
    this.classList.toggle(activeclass);
    this.nextElementSibling.classList.toggle(activeclass);
    this.childNodes[1].classList.toggle(activeclass);
  }

  accordionList.forEach((item) => {
    item.addEventListener("click", activeAccordion);
  });
}

initAccordionList();

function initiAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    const windowsMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowsMetade < 0;
        if (isSectionVisible) {
          section.classList.add("ativo");
        }
      });
    }
  }

  animaScroll();

  window.addEventListener("scroll", animaScroll);
}

initiAnimacaoScroll();
