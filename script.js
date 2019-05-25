document.addEventListener("click", function(event) {
    let selector = event.target.getAttribute("data-show-pw");
    if(!selector) return;

    let passwords = document.querySelectorAll(selector);
    
    Array.from(passwords).forEach(function(password) {
        if(event.target.checked === true) {
            password.type = "text";
        } else {
            password.type = "password";
        }
    })
}, false);