console.log("... logger main.js")
let btnReceiver = document.querySelector("#btn-receiver");
let inputPassWord = document.querySelector("#inputPass");
let text = document.querySelector("#btn-content");
let btnText = document.querySelector("#btn-text");

text.hidden = true;

btnReceiver.addEventListener("click", () => {
  if (text.hidden) {
    text.hidden = false;
  } else {
    text.hidden = true;
  }
});
var alertError = document.getElementById("alertError")
alertError.style.display = "none";
console.log("inputPassWord", inputPassWord.value)
function errorMessage() {
  var error = document.getElementById("error")
  if (isNaN(inputPassWord.value))
  {
      alertError.style.display = "block";
      error.textContent = "Mã của bạn không chính xác hoặc đã hết hạn!"
      alertError.hidden = false;
  } else {
      error.textContent = ""
  }
}
