let numBer1= prompt("Moi ban nhap vao so thu nhat: ");
let numBer2= prompt("Moi ban nhap vao so thu hai: ");
let numBer3= prompt("Moi ban nhap vao so thu ba: ");
let numBer4= prompt("Moi ban nhap vao so thu tu: ");
let numBer5= prompt("Moi ban nhap vao so thu nam: ");
let sum= 0;
if(numBer1%2!==0){
    sum+=numBer1;
}
if(numBer2%2!==0){
    sum+=numBer2;
}
if(numBer3%2!==0){
    sum+=numBer3;
}
if(numBer4%2!==0){
    sum+=numBer4;
}
if(numBer5%2!==0){
    sum+=numBer5;
}
console.log("Tong cac so le la",sum);