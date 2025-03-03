let month = +prompt("Vui lòng nhập vào tháng : ");
if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12){
    document.write("Tháng có 31 ngày");
}else if(month==4 || month==6 || month==9 || month==11){
    document.write("Tháng có 30 ngày");
}else if(month==2){
    document.write("Tháng 2 có 28 hoặc 29 ngày năm nhuận");
}else{
    document.write("Tháng không hợp lệ");
}   