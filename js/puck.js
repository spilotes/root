const item = document.querySelector(".puck");

item.animate(
  [{ transform: "translateX()" }, { transform: "translateY(0.5rem)" }],
  {
    duration: 1000,
    easing: "ease-in-out",
    direction: "alternate",
    iterations: Infinity,
  }
);

const item1 = document.querySelector(".puck1");

item1.animate(
  [{ transform: "translateX()" }, { transform: "translateY(0.5rem)" }],
  {
    duration: 1700,
    easing: "ease-in-out",
    direction: "alternate",
    iterations: Infinity,
  }
);
