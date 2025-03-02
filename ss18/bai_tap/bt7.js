let a = Number(prompt("Nhập vào số a"));
let b = Number(prompt("Nhập vào số b"));
let phep = prompt("Mời bạn nhập vào các phép tính (+,-,*,/)");

let tinh;

if(isNaN(a) ||isNaN(b)){
    alert("Giá trị không hợp lệ");
}else{
    switch(phep){
        case "+":
            tinh = a + b;
            break;
        case "-":
            tinh = a - b;
            break;
        case "*":
            tinh = a * b;
            break;
        case "/":
            if( b === 0){
                alert("Không thể thực hiện phép tính");
                break;
            }else{
                tinh = a / b;
                break;
            }
            
        default:
            alert("Thông tin bạn nhập không hợp lệ.");
            break;
    }
    alert("Kết quả của phép tính trên " + tinh);
}