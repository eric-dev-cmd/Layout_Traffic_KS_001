console.log("... logger main.js")
let btnReceiver = document.querySelector("#btn-receiver");
let btnReceiver2 = document.querySelector("#btn-receiver-2");
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
btnReceiver2.addEventListener("click", () => {
  if (text.hidden) {
    text.hidden = false;
  } else {
    text.hidden = true;
  }
});

var alertError = document.getElementById("alertError")
alertError.style.display = "none";

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

function copy() {
  var copyText = document.querySelector("#inputCopy");
  var copyButton = document.querySelector("#btnCopy");
  copyText.select();
  document.execCommand("copy");
  copyButton.innerText = "Copied!";
}

document.querySelector("#btnCopy").addEventListener("click", copy);