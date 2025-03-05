let tienGoc = +prompt("Nhập vào số tiền ban đầu");
let laiSuat = +prompt("Lãi suất %");
let soThangGui = +prompt("Số tháng gửi");
let check = isNaN(tienGoc);
let check1 = isNaN(laiSuat);
let check2 = isNaN(soThangGui); 
if(!check && !check1 && !check2){
    let tienLai = tienGoc*laiSuat*soThangGui/100;
    let soTienNhanduoc = tienLai + tienGoc;
    alert(`Tiền lãi: ${tienLai}, tiền nhận được: ${soTienNhanduoc}`);

}else{
    alert("Thông tin không hợp lệ");
}