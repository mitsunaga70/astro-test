// リサイズ時ブレイクポイントでリロードをかける。

let currentWidth = window.innerWidth;
let bpPlm = "";
const bp = 840;

if (currentWidth > bp) {
  bpPlm = "pc";
} else {
  bpPlm = "sp";
}

window.addEventListener("resize", () => {
  const resizeWidth = window.innerWidth;
  if (currentWidth == resizeWidth) {
    return;
  }
  if (bpPlm == "pc" && resizeWidth <= bp) {
    location.reload();
  }
  if (bpPlm == "sp" && resizeWidth > bp) {
    location.reload();
  }
  currentWidth = resizeWidth;
});
