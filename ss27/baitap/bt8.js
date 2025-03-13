function soLonNhat(n) {
    if (!n.toFixed || n !== parseInt(n)) {
        return "dữ liệu không hợp lệ"; 
    }
    let mangChuSo = []; 
    let soDuong = Math.abs(n); 
    while (soDuong > 0) {
        let chuSo = soDuong % 10; 
        mangChuSo.push(chuSo);
        soDuong = Math.floor(soDuong / 10); 
    }
    if (mangChuSo.length === 0) {
        return 0;
    }
    for (let i = 0; i < mangChuSo.length - 1; i++) {
        for (let j = i + 1; j < mangChuSo.length; j++) {
            if (mangChuSo[i] < mangChuSo[j]) {
    
                let temp = mangChuSo[i];
                mangChuSo[i] = mangChuSo[j];
                mangChuSo[j] = temp;
            }
        }
    }
    let ketQua = 0;
    for (let i = 0; i < mangChuSo.length; i++) {
        ketQua = ketQua * 10 + mangChuSo[i]; 
    }
    return ketQua;
}
console.log(soLonNhat(213));       
console.log(soLonNhat(9051));     
console.log(soLonNhat(123456789)); 
console.log(soLonNhat(0));       
console.log(soLonNhat(-123));     
console.log(soLonNhat("abc"));    
console.log(soLonNhat(1002));     