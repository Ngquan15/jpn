let mua = prompt("Nhập vào một tháng bất kì");
if( mua==1 || mua==2 || mua==3 ){
    document.write("Đây là mùa xuân");
}else if( mua==4 || mua==5 || mua==6 ){
    document.write("Đây là mùa hạ");
}else if( mua==7 || mua==8 || mua==9 ){
    document.write("Đây là mùa thu");
}else if( mua==10 || mua==11 || mua==12 ){
    document.write("Đây là mùa đông");
}else{
    document.write("Tháng không hợp lệ");
}