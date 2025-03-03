let str = prompt("Nhập vào một chuỗi");
let dapAn;
for(let i = 0; i < str.length; i++){
    if(str[i] === " "){
        dapAn = 1;
        break;
    }
}
if(dapAn==1){
    document.write("Chuỗi có dấu cách");
}else{
    document.write("Chuỗi không chứa dấu cách");
}