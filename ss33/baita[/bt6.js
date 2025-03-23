function login() {
    let inputName = document.getElementById("userName").value;
    let inputPass = document.getElementById("passWord").value;
    if (inputName == "let-him-cook@gmail.com" && inputPass == "123456") {
        console.log("Dang nhap thanh cong");
    } else {
        console.log("Dang nhap that bai");
    }
}