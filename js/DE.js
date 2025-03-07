////
gsap.fromTo(
  ".splash-logo",
  {
    opacity: 0,
    y: 100,
  },
  {
    opacity: 1,
    duration: 2,
    y: -50,
  }
);

//Onboarding01//

gsap
  .timeline()
  .from(".onboarding-body", {
    // opacity: 0,
    // y: 70,
    width: 0,
    duration: 1,
    ease: "power3.inOut",
  })
  .from(
    ".stepper",
    {
      scale: 1.2,
      opacity: 0,
    },
    ">"
    // "-=0.5"
  )
  .from(
    ".title_v2",
    {
      opacity: 0,
      stagger: 0.3,
    },
    "-=0.5"
  );

gsap.from(".stepper img", { y: 100, opacity: 0, duration: 1, stagger: 0.2, ease: "back. inOut" });

gsap.from(".xchip label", {
  scale: 0,
  opacity: 0,
  ease: "bounce. inOut",
  stagger: {
    each: 0.1,
    from: "random",
  },
});

const activeNext = () => {
  const checkbox = document.querySelectorAll(".xchip input");
  checkbox.forEach((chk) => {
    chk.addEventListener("click", (e) => {
      if (e.target.checked) {
        document.querySelector(".btn-text").classList.add("btn-primary");
        document.querySelector(".btn-text").classList.remove("btn-text");
      } else {
        document.querySelector(".btn-primary").classList.add("btn-text");
        document.querySelector(".btn-text").classList.remove("btn-primary");
      }
    });
  });
};

activeNext();
