let a = prompt("Nhập vào giá trị a");
let b = prompt("Nhập vào giá trị b");
let c = prompt("Nhập vào giá trị c");

let delta = b * b - 4 * a * c;
let x1 = (-b - Math.sqrt(delta)) / (2 * a);
let x2 = (-b + Math.sqrt(delta)) / (2 * a);
xkep = -b/ (2*a);
if(delta>0){
    document.write("Phương trình có 2 nghiệm phân biệt : x1=",x1,", x2=",x2 );
}else if(delta==0){
    document.write("Phương trình có nghiệm kép x1=x2=", xkep);
}else if(delta<0){
    document.write("Phương trình vô nghiệm");
}