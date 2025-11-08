function signupdata(){
    event.preventDefault();
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let country = document.getElementById("country");
    let phone = document.getElementById("phone");
    let password = document.getElementById("password");
    console.log(name.value);
    console.log(email.value);
    console.log(country.value);
    console.log(phone.value);
    console.log(password.value);
}
function sigindata(){
    event.preventDefault();
    let email = document.getElementById("signin-email");
    let password = document.getElementById("signin-password");
    console.log(email.value);
    console.log(password.value);
}