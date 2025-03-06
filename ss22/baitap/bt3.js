let numberArray= prompt("Nhập số bất kì");

if(!isNaN(numberArray) && !Number.isInteger(numberArray)){
    console.log(numberArray.split("").reverse().join(""),"PASS!");
}else{
    console.log("ERORR!");
}