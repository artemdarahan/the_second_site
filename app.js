const menuIcon = document.getElementById("menuIcon");
if (menuIcon) {
  menuIcon.addEventListener("click", () => {
    document.getElementById("header").classList.add("show");
  });
}
const closeIcon = document.getElementById("closeIcon");
if (closeIcon) {
  closeIcon.addEventListener("click", () => {
    document.getElementById("header").classList.remove("show");
  });
}
var blocks = document.querySelectorAll(".block");
for (var i = 0; i < blocks.length; i++) {
  blocks[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
