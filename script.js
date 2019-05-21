let showCurrentP = document.querySelector('#show-password');
let currentPass = document.querySelector('#password');
let showAllP = document.querySelector("#show-passwords")
let newP = document.querySelector("#new-pw");

document.addEventListener("click", function(event) {
    if(showCurrentP.checked || showAllP.checked){
        currentPass.type = "text";
    } else {
        currentPass.type = "password";
    }

    if(showAllP.checked) {
        newP.type = "text";
    } else {
        newP.type = "password";
    }
}, false);