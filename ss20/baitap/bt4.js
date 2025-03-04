let let str = prompt("Nhập vào chuỗi: ");  
let search = prompt("Nhập vào ký tự cần tìm kiếm: ");
let flag = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] === search) {
        flag = 1;
        break;
    }
}
flag == 1 ? alert("Tồn tại") : alert("Không tồn tại");