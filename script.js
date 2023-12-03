document.addEventListener("DOMContentLoaded", function () {
  const accordionWrappers = document.querySelectorAll(".accordion-wrapper");
  const accordionContents = document.querySelectorAll(".accordion-content");

  accordionWrappers.forEach((wrapper) => {
    wrapper.addEventListener("click", function () {
      const content = this.querySelector(".accordion-content");
      const arrowIcon = this.querySelector(".arrowIcon");
      const isActive = this.classList.contains("active");

      accordionContents.forEach((item) => {
        item.style.display = "none";
      });

      accordionWrappers.forEach((item) => {
        item.style.height = "52px";
        item.classList.remove("active");
        item.querySelector("h3").style.color = "#4B4C5F";
        item.querySelector("h3").style.fontWeight = "400";
        item.querySelector(".arrowIcon").style.transform = "rotate(0deg)";
      });

      if (!isActive) {
        content.style.display = "block";
        const contentHeight = content.clientHeight;
        this.style.height = `${52 + contentHeight}px`;
        this.classList.add("active");
        arrowIcon.style.transform = "rotate(180deg)";
        wrapper.querySelector("h3").style.color = "#1E1F36";
        wrapper.querySelector("h3").style.fontWeight = "700";
      }
    });
  });
});
