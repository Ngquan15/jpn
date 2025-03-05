let a = prompt("Nhập vào a");
let b = prompt("Nhập vào b");
let c = prompt("Nhập vào c");
let check1 = isNaN(a);
let check2 = isNaN(b);
let check3 = isNaN(c);
if(!check1 && ! check2 && !check3){
    delta = b*b - 4*a*c;
    if(delta < 0){
        document.write("Phương trình vô nghiệm");
    }else if(delta == 0){
        let x = -b / (2*a);
        document.write(`Phương trình có nghiệm kép x1=x2=${x.toFixed(2)}`)
    }else if(delta > 0){
        let x1 = (-b - Math.sqrt(delta)) / (2 * a);
        let x2 = (-b + Math.sqrt(delta)) / (2 * a);
        document.write(`Phương trình có hai nghiệm phân biệt x1=${x1.toFixed(2)} và x2=${x2.toFixed(2)}`);
    }
}else{
    document.write("Thông tin không hợp lệ");
}