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

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".btn-outlined");
  const nextButton = document.querySelector(".btn-text"); // '다음' 버튼

  buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
      this.classList.toggle("selected"); // ✅ 선택/해제 토글

      // ✅ 선택된 버튼 개수 확인
      const selectedButtons = document.querySelectorAll(".btn-outlined.selected").length;

      // ✅ 하나라도 선택되면 '다음' 버튼 활성화
      if (selectedButtons > 0) {
        nextButton.classList.add("btn-primary");
        nextButton.classList.remove("btn-text");
      } else {
        nextButton.classList.add("btn-text");
        nextButton.classList.remove("btn-primary");
      }
    });
  });
});

const activeNext2 = () => {
  const buttons = document.querySelectorAll(".btn-group-vertical button");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const nextBtn = document.querySelector(".btn-text, .btn-primary");

      if (nextBtn.classList.contains("btn-text")) {
        nextBtn.classList.add("btn-primary");
        nextBtn.classList.remove("btn-text");
      } else {
        nextBtn.classList.add("btn-text");
        nextBtn.classList.remove("btn-primary");
      }
    });
  });
};

activeNext2();

gsap.to(".loading-icon", {
  rotation: 360,
  duration: 2,
  repeat: -1,
  ease: "linear",
});
