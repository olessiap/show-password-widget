let showCurrentP = document.querySelector('#show-password');
let password = document.querySelector('#password');
let showAllP = document.querySelector("#show-passwords");
let currentP = document.querySelector("#current-pw");
let newP = document.querySelector("#new-pw");


document.addEventListener("click", function(event) {
    if(showCurrentP.checked){
        password.type = "text";
    } else {
        password.type = "password";
    }

    if(showAllP.checked) {
        newP.type = "text";
        currentP.type= "text";
    } else {
        newP.type = "password";
        currentP.type = "password";
    }
}, false);