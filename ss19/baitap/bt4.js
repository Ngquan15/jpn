let num = +(prompt("Nhập vào một số"));

if(num % 3 == 0 && num % 5 == 0){
    document.write(num, " chia hết cho cả 3 và 5");
}else {
    document.write(num, " không chia hết cho cả 3 và 5");
}