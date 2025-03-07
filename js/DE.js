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
