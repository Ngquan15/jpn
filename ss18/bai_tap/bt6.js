let year = Number(prompt("Nhập vào một năm bất kì"));

if(isNaN(year) || year <= 0){
    document.write("Thông tin không hợp lệ");
}else{
    if(year % 400 == 0 || year % 4 == 0 && year %100 != 0){
        document.write("Đây là năn nhuận")
    }else{
        document.write("Đây không phải năm nhuận")
    }
}