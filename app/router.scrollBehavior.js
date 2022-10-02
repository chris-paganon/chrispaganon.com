export default function (to, from, savedPosition) {
  let position = {};

  return new Promise((resolve) => {
    setTimeout(() => {
      if (savedPosition) {
        position = {
          selector: savedPosition,
          behavior: "smooth",
        };
      } else if (to.hash) {
        position = {
          selector: to.hash,
          behavior: "smooth",
        };
      } else {
        position = { x: 0, y: 0 };
      }
      resolve(position);
    }, 50);
  });
}