<<<<<<< HEAD
const submit = document.querySelector(".submit");
const passInput = document.querySelector(".passInput");
const userNameInput = document.querySelector(".userNameInput");
const passMessageP = document.querySelector(".passMessageP");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (passInput.value == "" || userNameInput.value == "") {
    passMessageP.textContent = "یکی از فیلد ها خالی میباشد";
  }
});

// submit.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("hi");
//   if (passInput.value == "") {
//     passMessageP.textContent = "رمز عبور نمی تواند خالی باشد";
//   } else if (passInput.value.length < 8) {
//     passMessageP.textContent = " رمز عبور کمتر از 8 کاراکتر است.";
//   } else {
//     passMessageP.style.display = "none";
//   }
// });
=======
const submit = document.querySelector(".submit");
const passInput = document.querySelector(".passInput");
const userNameInput = document.querySelector(".userNameInput");
const passMessageP = document.querySelector(".passMessageP");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (passInput.value == "" || userNameInput.value == "") {
    passMessageP.textContent = "یکی از فیلد ها خالی میباشد";
  }
});

// submit.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("hi");
//   if (passInput.value == "") {
//     passMessageP.textContent = "رمز عبور نمی تواند خالی باشد";
//   } else if (passInput.value.length < 8) {
//     passMessageP.textContent = " رمز عبور کمتر از 8 کاراکتر است.";
//   } else {
//     passMessageP.style.display = "none";
//   }
// });
>>>>>>> 6a4e5a403da6f42c76267d4c9a060db9bae4e02a
