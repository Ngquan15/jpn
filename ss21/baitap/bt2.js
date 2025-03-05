let soLe = 0;
let soChan = 0;
for(let i = 1; i <= 5; i++){
    let num= +prompt(`Nhập số nguyên thứ ${i}:`);
    let check = isNaN(num);
    if(!check && Number.isInteger(num)){
        if(num % 2 == 0){
            soChan++;
        }else{
            soLe++;
        }
    }else{
        alert("Số bạn nhập không hợp lệ")
    }
}
alert(`Có ${soChan} số chẵn và ${soLe} số lẻ`);