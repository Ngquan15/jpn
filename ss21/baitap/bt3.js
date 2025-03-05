let count=0; 
let passWord= "123";
while(count<3){
    let pass= prompt("Moi ban nhap mat khau:");
    if(passWord===pass){
        console.log("Mat khau dung");
        break;
    }else{
        console.log("Mat khau sai");
        count++;
    }
}