let num = prompt("Nhập vào một chuỗi ký tự");

if (num.indexOf("0") !== -1 || num.indexOf("1") !== -1 || num.indexOf("2") !== -1 || num.indexOf("3") !== -1 || num.indexOf("4") !== -1 || num.indexOf("5") !== -1 || num.indexOf("6") !== -1 || num.indexOf("7") !== -1 || num.indexOf("8") !== -1 || num.indexOf("9") !== -1) {   
    document.write("Chuỗi không phải chỉ gồm chữ cái.");
} else {
    document.write("Chuỗi chỉ chứa chữ cái.");
}