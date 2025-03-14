gsap.fromTo(
  ".product-scroll li",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    stagger: 0.2,
  }
);

gsap.fromTo(
  ".animation1 li",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".animation1",
      start: "top center",
    },
  }
);

gsap.fromTo(
  ".animation2 li",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".animation2",
      // markers: true,
      start: "-100px center",
    },
  }
);

gsap.fromTo(
  ".animation3 li",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".animation3",
      // markers: true,
      start: "-200px center",
    },
  }
);
