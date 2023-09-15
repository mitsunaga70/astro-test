// fadeIn

const fadeIn = document.querySelectorAll(".fadeIn");
const fadeInFunc = () => {
  const scrollY = window.pageYOffset;
  const docH = document.documentElement.scrollHeight;
  for (let i = 0; i < fadeIn.length; i++) {
    const triggerMargin = 80;
    if (
      window.innerHeight >
      fadeIn[i].getBoundingClientRect().top + triggerMargin
    ) {
      fadeIn[i].classList.add("is-fade");
    } else {
      // fadeIn[i].classList.remove('is-fade');
    }
    // 最下部へ着いた時
    if (docH < scrollY + 1300) {
      fadeIn[i].classList.add("is-fade");
    }
  }
};
window.addEventListener("scroll", () => {
  fadeInFunc();
});
setTimeout(function () {
  fadeInFunc();
}, 300);
