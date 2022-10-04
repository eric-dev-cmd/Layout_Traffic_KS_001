function copyModal() {
    var copyText = document.querySelector("#inputCopyModal");
    var copyButton = document.querySelector("#btnCopyModal");
    copyText.select();
    document.execCommand("copy");
    copyButton.innerText = "Copied!";
  }
  
  document.querySelector("#btnCopyModal").addEventListener("click", copyModal);
  let btnReceiver = document.querySelector("#btn-receiver");

         let btnItpark = document.querySelector("#btn-itpark");
         let inputName = document.querySelector("#inputName");
         let inputPassItpark = document.querySelector("#inputPassItpark");


         var alertError1 = document.getElementById("alertError1")
         var alertError2 = document.getElementById("alertError2")

         alertError1.style.display = "none";
         alertError2.style.display = "none";
         
         function errorMessage() {
           var error1 = document.getElementById("error1")
           var error2 = document.getElementById("error2")

           if (!isNaN(inputPassItpark.value)) {
               alertError2.style.display = "block";
               error2.textContent = "Vui lòng nhập mã!"
               alertError2.hidden = false;
           }else {
            error.textContent = ""
            alertError1.hidden = true;
        }
           if (!isNaN(inputName.value)) {
               alertError1.style.display = "block";
               error1.textContent = "Vui lòng nhập họ và tên!"
               alertError1.hidden = false;
           } else {
               error.textContent = ""
               alertError1.hidden = true;
           }
         }