let toan = Number(prompt("Nhập điểm toán: "));
let van = Number(prompt("nhập điểm văn: "));
let anh = Number(prompt("Nhập điểm anh: "));
let dtb = (toan + anh + van)/3;
if(8 <= tbm && tbm <= 10){
    document.write("Giỏi");
}else if(6.5 <= tbm && tbm <= 7.9){
    document.write("Khá");
}else if(5.0 <= tbm && tbm <= 6.4){
    document.write("Trung bình");
}else if(0.0 <= tbm && tbm <= 5.0){
    document.write("Yếu");
}else{
    document.write("Giá trị nằm ngoài phạm vi");
}
