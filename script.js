let userNameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");
let alertBox = document.querySelector(".alert");
let alertH1 = document.querySelector(".alerth1");
let btn = document.getElementById("btn");
let userNameValue = userNameInput.value;
let passwordValue = passwordInput.value;
function loginErorAlert() {
  if (userNameInput.value.length < 3 || userNameInput.value.length > 10) {
    alertBox.style.display = "flex";
    alertBox.style.color = "red";
    alertH1.innerHTML = "Invalid UserName";
  } else if (passwordInput.value.length < 3 || passwordInput.value.length > 8) {
    alertBox.style.display = "flex";
    alertBox.style.color = "red";
    alertH1.innerHTML = "Invalid PassWord";
  } else {
    alertBox.style.display = "flex";
    alertBox.style.color = "#302f2f";
    alertH1.innerHTML = "WELLCOME";
  }
  setTimeout(function () {
    alertBox.style.display = "none";
  }, 4000);
}
let inputMeseage1 = document.querySelector(".inputMeseage1");

let inputMeseage2 = document.querySelector(".inputMeseage2");

function userNameCharacLenght() {
  if (userNameInput.value.length < 3 || userNameInput.value.length > 10) {
    inputMeseage1.style.display = "block";
    inputMeseage1.style.color = "red";
    inputMeseage1.innerHTML = "Username characters must be beetwin 3-10";
  } else {
    // inputMeseage1.style.display = "none";
    inputMeseage1.style.color = "green";
    inputMeseage1.innerHTML = "Valid Username";
  }
}
function passwordCharacLenght() {
  if (passwordInput.value.length < 3 || passwordInput.value.length > 8) {
    inputMeseage2.style.display = "block";
    inputMeseage2.style.color = "red";
    inputMeseage2.innerHTML = "Password characters must be beetwin 3-8";
  } else {
    // inputMeseage1.style.display = "none";
    inputMeseage2.style.color = "green";
    inputMeseage2.innerHTML = "Valid Password";
  }
}
let icon = document.querySelector("i");
let toggleEye = true;
icon.addEventListener("click", function () {
  if (toggleEye) {
    icon.className = "fa fa-eye-slash";
    passwordInput.type = "text";
    toggleEye = false;
  } else {
    icon.className = "fa fa-eye";
    passwordInput.type = "password";
    toggleEye = true;
  }
});
