<<<<<<< HEAD
const nextBtn = document.querySelector(".nextBtn");
const pass = document.querySelector(".pass");
const confirmation = document.querySelector(".confirmation");
const Gcode = document.querySelector(".Gcode");
const confirmationErrorP = document.querySelector(".confirmationErrorP");
const GcodeP = document.querySelector(".GcodeP");
const email = document.querySelector(".email");
const name = document.querySelector(".name");

nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // check Gcode
  if (Gcode.value.length < 10) {
    GcodeP.textContent = "کد ملی نمی تواند کمتر از 10 کاراکتر باشد.";
  } else {
    GcodeP.style.display = "none";
  }
  // check value of inputs
  if (
    pass.value == "" ||
    confirmation.value == "" ||
    confirmation.value == "" ||
    email.value == "" ||
    name.value == ""
  ) {
    confirmationErrorP.textContent = "یکی از فیلد ها خالی است";
  } else {
    confirmationErrorP.style.display = "none";
  }
  // Check pass and confimation
  console.log(Number(pass.value));
  console.log(Number(confirmation.value));

  if (Number(pass.value) !== Number(confirmation.value)) {
    confirmationErrorP.textContent = "کلمه ی عبور با تکرار ان یکسان نیست";
  } else {
    confirmationErrorP.stye.display = "none";
  }
});
=======
const nextBtn = document.querySelector(".nextBtn");
const pass = document.querySelector(".pass");
const confirmation = document.querySelector(".confirmation");
const Gcode = document.querySelector(".Gcode");
const confirmationErrorP = document.querySelector(".confirmationErrorP");
const GcodeP = document.querySelector(".GcodeP");
const email = document.querySelector(".email");
const name = document.querySelector(".name");

nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // check Gcode
  if (Gcode.value.length < 10) {
    GcodeP.textContent = "کد ملی نمی تواند کمتر از 10 کاراکتر باشد.";
  } else {
    GcodeP.style.display = "none";
  }
  // check value of inputs
  if (
    pass.value == "" ||
    confirmation.value == "" ||
    confirmation.value == "" ||
    email.value == "" ||
    name.value == ""
  ) {
    confirmationErrorP.textContent = "یکی از فیلد ها خالی است";
  } else {
    confirmationErrorP.style.display = "none";
  }
  // Check pass and confimation
  console.log(Number(pass.value));
  console.log(Number(confirmation.value));

  if (Number(pass.value) !== Number(confirmation.value)) {
    confirmationErrorP.textContent = "کلمه ی عبور با تکرار ان یکسان نیست";
  } else {
    confirmationErrorP.stye.display = "none";
  }
});
>>>>>>> 6a4e5a403da6f42c76267d4c9a060db9bae4e02a
