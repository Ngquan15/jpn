function checkPass(passw) {
    if (pass.length < 8) {
        return "Mật khẩu phải có ít nhất 8 ký tự.";
    }

    let hasUpper = false;
    let hasLower = false;
    let hasDigit = false;

    for (let i = 0; i < passlength; i++) {
        let char = pass[i];

        if (char >= 'A' && char <= 'Z') hasUpper = true;
        else if (char >= 'a' && char <= 'z') hasLower = true;
        else if (char >= '0' && char <= '9') hasDigit = true;

        if (hasUpper && hasLower && hasDigit) {
            return "Mật khẩu mạnh!";
        }
    }

    if (!hasUpper) return "Mật khẩu cần ít nhất một chữ hoa.";
    if (!hasLower) return "Mật khẩu cần ít nhất một chữ thường.";
    if (!hasDigit) return "Mật khẩu cần ít nhất một số.";
}

let userPass = prompt("Nhập mật khẩu để kiểm tra:");

if (userPass !== null) {    
    let message = checkPass(userPass);
    console.log(message);
}