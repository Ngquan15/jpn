let year = Number(prompt("Nhập số năm kinh nghiệm của nhân viên :"));

if(year < 0){
    document.write("Thông tin không hợp lệ");
}else if(0 <= year && year < 1){
    document.write("Mới vào nghề");
}else if(1 <= year && year <= 3){
    document.write("Nhân viên có kinh nghiệm");
}else if(4 <= year && year <= 6){
    document.write("Chuyên viên");
}else if( year > 6){
    document.write("Quản lý");
}