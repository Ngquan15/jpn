let numberArray= [2, 5, 7, 4, 1, 8, 6];
let number= +prompt("Moi ban nhap vao so bat ky:");
for( let i=0; i<numberArray.length; i++){
    if (number.includes(numberArray)) {
        console.log("Juan");
    } else {
        console.log("Chúc bạn may mắn lần sau");
    }
}