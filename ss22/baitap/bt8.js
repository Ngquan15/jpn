let soNguyen = [3, 7, 1, 9, 3, 5, 3, 8, 6, 3];

let tanSuat = {};
for (let i = 0; i < soNguyen.length; i++) {
    let so = soNguyen[i];
    tanSuat[so] = (tanSuat[so] || 0) + 1;
}
let maxDem = 0;
let check = 1;
for (let so in tanSuat) {
    if (tanSuat[so] > maxDem || (tanSuat[so] === maxDem && Number(so) < check)) {
        maxDem = tanSuat[so];
        check = Number(so);
    }
}
console.log("Mảng số nguyên:", soNguyen);
console.log(`Phần tử xuất hiện nhiều nhất: ${check} (xuất hiện ${maxDem} lần)`);