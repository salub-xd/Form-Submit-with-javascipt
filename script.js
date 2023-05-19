console.log("The Postman Project like form.");
let name1 = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let validUser = false;
let validEmail = false;
let validPhone = false;




name1.addEventListener("blur", () => {
    let regx = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name1.value;
    // console.log(regx, str);
    if (regx.test(str)) {
        // console.log("Your name is valid")
        name1.classList.remove("is-invalid")
        validUser = true;

    }
    else {
        // console.log("Your name is not valid")
        name1.classList.add("is-invalid")
        validUser = false;


    }
})

email.addEventListener("blur", () => {
    let regx = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    // console.log(regx, str);
    if (regx.test(str)) {
        // console.log("Your email is valid")
        email.classList.remove("is-invalid")
        validEmail = true;

    }
    else {
        // console.log("Your email is not valid")
        email.classList.add("is-invalid")
        validEmail = false;


    }
})

phone.addEventListener("blur", () => {
    let regx = /^([0-9]){10}$/;
    let str = phone.value;
    // console.log(regx, str);
    if (regx.test(str)) {
        // console.log("Your phone is valid")
        phone.classList.remove("is-invalid")
        validPhone = true;

    }
    else {
        // console.log("Your phone is not valid")
        phone.classList.add("is-invalid")
        validEmail = false;


    }
})


let submit = document.getElementById("submit");

submit.addEventListener("click", function (e) {

    e.preventDefault()
    // console.log("You have clicked on submit button")
    let success = document.getElementById("success");
    let failure = document.getElementById("failure");



    if (validUser && validEmail && validEmail) {
        name1.value = "";
        email.value = "";
        phone.value = "";
        success = document.getElementById("success");
        success.classList.add("show")
        failure.classList.remove("show")
        // $("failure").hide();
        // $("success").show();

    }
    else {

        failure = document.getElementById("failure");
        success.classList.remove("show")
        failure.classList.add("show")
        // $("success").hide();
        // $("failure").show();
    }

})
