
// For login-form page


let login_btn = document.getElementById("login-btn");
let email_Error = document.getElementById("errorEmail")
let password_Error = document.getElementById("errorPassword")
let login_Error = document.getElementById("errorLoginBtn")



//for signUp-form page
const user_firstName = document.getElementById("first-name");
const user_secondName = document.getElementById("second-name");
const user_phoneNumber = document.getElementById("phone-number");
const user_emailAddress = document.getElementById("signUp-email-address");
const user_password = document.getElementById("signUP-password");
const user_confirmPassword = document.getElementById("confirm-password");
let signUp_btn = document.getElementById("signUp")

const user_firstName_error = document.getElementById("first-name-error")
const user_secondName_error = document.getElementById("second-name-error")
const user_phoneNumber_error = document.getElementById("phone-number-error")
const user_emailAddress_error = document.getElementById("signUp-email-address-error")
const user_password_error = document.getElementById("signUP-password-error")
const user_confirmPassword_error = document.getElementById("confirm-password-error")
const signUP_btn_error = document.getElementById("signUp-error")



// ---------login input valitation --------------------------------------

function loginValidatePassword() {
    let login_password = document.getElementById("input-Password").value;
    password_Validation(login_password, password_Error);
}
function validateEmail() {
    var login_email = document.getElementById("input-email").value;
    email_Validation(login_email, email_Error)

}
login_btn.addEventListener("click",()=> {
    console.log("emile click me")

    if (validateEmail() == false || loginValidatePassword() == false) {
        login_Error.innerHTML = "Enter required info plz"
        return false
    }
    else {
        login_Error.innerHTML = "OK Go ON"
        return true;
    }
})
//---------------------------------   End   ------------------------------------------

// ----------------------validation for  SignUp ----------------------

user_firstName.addEventListener("input", ()=> {
    let meme = user_firstName.value;
    name_Validationin(meme, user_firstName_error)
})
user_secondName.addEventListener("input", () => {
    let meme = user_secondName.value;
    name_Validationin(meme, user_secondName_error)
})
user_phoneNumber.addEventListener("input", () => {
    let meme = user_phoneNumber.value;
    phone_Validationin(meme, user_phoneNumber_error)
})
user_emailAddress.addEventListener("input", () => {
    let meme = user_emailAddress.value
    email_Validation(meme, user_emailAddress_error)
})
user_password.addEventListener("input", () => {
    let meme = user_password.value;
    password_Validation(meme, user_password_error)
})
user_confirmPassword.addEventListener("input",()=>{
let meme = user_confirmPassword.value
let mumu = user_password.value
console.log(meme + mumu)
if(meme == mumu){
    user_confirmPassword_error.innerHTML = "Confirmed"
    return true
}
else{
    user_confirmPassword_error.innerHTML = "Not yet match!!!"
    return false
}
})
signUp_btn.addEventListener("click", ()=>{
    if(user_firstName == false ||
        user_secondName == false ||
        user_phoneNumber == false ||
        user_emailAddress == false ||
        user_password == false ||
        user_confirmPassword == false
    ){
        signUP_btn_error.innerHTML == "fill all required"
        return false;
    }
    else{
        signUP_btn_error.innerHTML == "GO ON"
        return true;
    }
})
//---------------------------------   End   ------------------------------------------

//--------------------------------------GENERAL VALIDATIONS

function email_Validation(input, message) {
    if (input.length == 0) {
        message.innerHTML = "Enter email please"
        return false
    }
    else if (!input.match(/^[a-z]+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        message.innerHTML = "Enter valid email"
        return false
    }
    else {
        message.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
        return true
    }
}
function password_Validation(input, message) {

    if (input.length == 0) {
        message.innerHTML = " Enter password"
        return false
    }
    else if (input.length < 6) {
        message.innerHTML = "minimum 6 character"
    }
    else if (!input.match(/[A-Za-z][0-9]/)) {
        message.innerHTML = "Include all number and string"
        return false
    }
    else {
        message.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
        return true
    }
}

function name_Validationin(input, message) {
    if (input.length == 0) {
        message.innerHTML = "Enter your nam()"
        return false
    }
    else if (!input.match(/^[A-Za-z]+$/)) {
        message.innerHTML = "should be only characters"
        return false;
    }
    else {
        message.innerHTML = "OK"
        return true;
    }

}

function phone_Validationin(input, message) {
    if (input.length == 0) {
        message.innerHTML = "Enter your phone number"
        return false
    }
    else if (!input.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)) {
        message.innerHTML = "Enter valid phone number"
        return false;
    }
    else {
        message.innerHTML = "OK"
        return true;
    }

}























// function login(e) {
  
//     e.preventDefault();
//     var email = document.getElementById('email').value;
//     var pass = document.getElementById('pwd').value;
    
//     console.log(email, pass);
//     const user = users.find(user => user.email === email && user.password === pass)
//     localStorage.setItem("authenticatedUser", JSON.stringify(user))
//     if(user.previllege === "admin") {
//       location.href = "/dashboard.html"
//     }
//     else {
//       location.href = "/"
//     }

//     // if (email === localStorage.getItem('userEmail') && pass === localStorage.getItem('userpwd')) {
//     //   window.location.replace("./dashboard.html");
//     // }
//     // else {
//     //   document.getElementById('error').textContent = 'Invalid credentials'
//     // }
//   }
