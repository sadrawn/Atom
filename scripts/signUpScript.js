const nextBtn = document.querySelector(".nextBtn");
const pass = document.querySelector(".pass");
const confirmation = document.querySelector(".confirmation");
const Gcode = document.querySelector(".GcodeP");
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
    pass.value === "" ||
    confirmation.value === "" ||
    email.value === "" ||
    name.value === ""
  ) {
    confirmationErrorP.textContent = "یکی از فیلد ها خالی است";
    confirmationErrorP.style.display = "block";
  } else {
    confirmationErrorP.style.display = "none";
  }
  
  // Check pass and confirmation
  if (pass.value !== confirmation.value) {
    confirmationErrorP.textContent = "کلمه ی عبور با تکرار آن یکسان نیست";
    confirmationErrorP.style.display = "block";
  } else {
    confirmationErrorP.style.display = "none";
  }
});
