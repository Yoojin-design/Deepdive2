gsap.timeline({}).fromTo(
  ".product-scroll li",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    stagger: 0.2,
  }
);
