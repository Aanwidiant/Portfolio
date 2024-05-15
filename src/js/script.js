// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("active");
});

window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu && e.target != dropBtn) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.remove("active");
  }
});

// DropDown Menu
const dropBtn = document.querySelector("#dropBtn");
const dropMenu = document.querySelector("#dropMenu");

dropBtn.addEventListener("click", function () {
  dropMenu.classList.toggle("hidden");
});

window.addEventListener("click", function (e) {
  if (e.target != dropBtn && e.target != dropMenu) {
    dropMenu.classList.add("hidden");
  }
});

// Form
const scriptURL = "https://script.google.com/macros/s/AKfycbxg0oWbqUOUDndCjFRj3qqfRho4m1jU70uwnnnSFOquSbF3NbbP3WJyRrRqVAjoROjk/exec";
const form = document.forms["contact-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // ketika tombol kirim diklik
  // tampilkan tombol loading, hilangkan tombol kirim
  btnLoading.classList.toggle("hidden");
  btnKirim.classList.toggle("hidden");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // tampilkan tombol kirim, hilangkan tombol loading
      btnLoading.classList.toggle("hidden");
      btnKirim.classList.toggle("hidden");
      // tampilkan alert
      myAlert.classList.toggle("hidden");
      // reset formnya
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

// Close Alert
const btnClose = document.querySelector(".btn-close");
btnClose.addEventListener("click", function () {
  myAlert.classList.add("hidden");
});

// To Top Button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const toTop = document.querySelector("#to-top");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
}
