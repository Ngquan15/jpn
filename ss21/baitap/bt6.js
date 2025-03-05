let songuyen = +prompt("Moi ban nhap vao so nguyen bat ky:");
let check = isNaN(songuyen);
if (!check && Number.isInteger(songuyen)) {
    for (let i = 1; i <= Math.abs(songuyen); i++) {
        if (songuyen % 1 === 0) {
            console.log(`${i}`)
        }
    }
} else {
    console.log("Thong tin khong hop le!");
}