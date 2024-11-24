document.addEventListener("DOMContentLoaded", function () {
    animation_text_1("#text-anim");
  });
  
  function animation_text_1(element) {
    let newText = "";
    const theText = document.querySelector(element);
  
    for (let i = 0; i < theText.innerText.length; i++) {
      newText += `<div>${theText.innerText[i] === " " ? "&nbsp;" : theText.innerText[i]}</div>`;
    }
    theText.innerHTML = newText;
  
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      element + " div",
      { opacity: 0, y: 90 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        stagger: 0.03,
        ease: "elastic(1.2, 0.5)",
        scrollTrigger: {
          trigger: element,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }
  




document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper('.review-slider', {
      loop: true, // Enable infinite loop
      autoplay: {
          delay: 3000, // Automatically change slides every 3 seconds
          disableOnInteraction: false, // Autoplay won't stop on user interaction
      },
      pagination: {
          el: '.swiper-pagination',
          clickable: true, // Make pagination bullets clickable
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
  });
});