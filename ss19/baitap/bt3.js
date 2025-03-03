let money;
let quyDoi;
let luachon = prompt("Nhập vào lựa chọn (1: VND -> USD, 2: USD -> VND)");

switch (luachon) {
    case "1": 
        money = parseFloat(prompt("Nhập vào số tiền VND muốn đổi:"));
        if (!isNaN(money)) {
            quyDoi = money / 23000;
            alert(quyDoi + " USD");
        } else {
            alert("Vui lòng nhập một số hợp lệ.");
        }
        break;
    case "2":
        money = parseFloat(prompt("Nhập vào số tiền USD muốn đổi:"));
        if (!isNaN(money)) {
            quyDoi = money * 23000;
            alert(quyDoi + " VND");
        } else {
            alert("Vui lòng nhập một số hợp lệ.");
        }
        break;
    default:
        alert("Lựa chọn không hợp lệ");
}