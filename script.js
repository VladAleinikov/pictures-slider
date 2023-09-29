const slides = [...document.getElementsByClassName("slide")];

slides.map(slide => {
      slide.addEventListener("click", e => {
            slides.map(slide => slide.classList.remove("active"));
            slide.classList.add("active");
      })
})