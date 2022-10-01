export default function (to, from, savedPosition) {
  if (savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          selector: savedPosition,
          behavior: "smooth",
        });
      }, 100);
    });
  } else if (to.hash) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          selector: to.hash,
          behavior: "smooth",
        });
      }, 100);
    });
  }
}