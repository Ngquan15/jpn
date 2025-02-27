
const date1 = prompt("Nhập ngày thứ nhất (YYYY-MM-DD):");
const date2 = prompt("Nhập ngày thứ hai (YYYY-MM-DD):");

const d1 = new Date(date1);
const d2 = new Date(date2);

const diffTime = Math.abs(d2 - d1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

console.log(`Độ lệch là ${diffDays} ngày`);
