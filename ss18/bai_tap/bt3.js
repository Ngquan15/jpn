let ADMIN = "ADMIN";
let pass = "TheMaster";

let name = prompt("Vui lòng nhập tên:");

if (name === ADMIN) {
    let pass1 = prompt("Vui lòng nhập mật khẩu:");

    if (pass1 === pass) {
        document.write("Welcome");
    } else if (pass1 === null || pass1 === "") {
        document.write("Cancelled");
    } else {
        document.write("Wrong password");
    }
} else if (name === null || name === "") {
    document.write("Cancelled");
} else {
    document.write("I Don’t know you");
}