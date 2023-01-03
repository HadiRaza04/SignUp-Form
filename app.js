
const saveDetails = () => {
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    localStorage.setItem("name", name.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
}
const saveLogDetails = () => {
    let name1 = document.getElementById("name1").toString();
    let password1 = document.getElementById("password1").toString();
    if(localStorage.getItem("name") == name1 && localStorage.getItem("password") == password1){
        document.getElementById("loginFail").innerHTML = "Login SuccessFull"; 
    }
    else{
        document.getElementById("loginFail").innerHTML = "Login Fail";
    }
}