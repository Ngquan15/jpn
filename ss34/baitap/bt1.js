let users = JSON.parse(localStorage.getItem("users")) || [];

function register() {
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmPasswordError").textContent = "";

    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|vn)$/;

    if (email === "") {
        document.getElementById("emailError").textContent = "Vui lòng nhập email!";
        return;
    }
    if (!emailRegex.test(email)) {
        document.getElementById("emailError").textContent = "Email không hợp lệ!";
        return;
    }


    let emailExists = users.some(user => user.email === email);
    if (emailExists) {
        document.getElementById("emailError").textContent = "Email đã được sử dụng!";
        return;
    }

    if (password === "") {
        document.getElementById("passwordError").textContent = "Mật khẩu không được để trống!";
        return;
    }

    if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Mật khẩu phải có ít nhất 6 ký tự!";
        return;
    }

    if (confirmPassword !== password) {
        document.getElementById("confirmPasswordError").textContent = "Xác nhận mật khẩu không khớp!";
        return;
    }

    let newUser = {
        id: Math.floor(Math.random() * 1000000),
        email: email,
        password: password
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Đăng ký thành công!");
    window.location.href = "./khongcogi.html";
}