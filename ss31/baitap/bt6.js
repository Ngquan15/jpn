const oTen = document.getElementById("ten");
const oMatKhau = document.getElementById("matkhau");
const nutDangNhap = document.getElementById("DangNhap");

const tenDung = "NguyenvanA@gmail.com";
const mkDung = "123";

nutDangNhap.addEventListener("click", function() {
    if (oTen.value === tenDung && oMatKhau.value === mkDung) {
        console.log("Đăng nhập thành công!");
    } else {
        console.log("Sai mât khẩu hoặc tên đăng nhập!");
    }
});