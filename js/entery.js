gsap
  .timeline({
    scrollTrigger: {
      trigger: ".product-columns",
      marker: true,
      start: "top center",
    },
  })
  .fromTo(
    ".product-scroll li",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      stagger: 0.2,
    }
  )
  .fromTo(
    ".product-columns li",
    {
      opacity: 0,
    },
    {
      opacity: 10,
      stagger: 0.2,
    }
  );
