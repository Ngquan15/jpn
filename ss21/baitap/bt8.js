for (let num = 100; num <= 999; num++) {
    let hangDonVi = num % 10;
    let hangChuc = Math.floor((num / 10) % 10);
    let hangTram = Math.floor(num / 100);
    let tongLapPhuong = Math.pow(hangTram, 3) + Math.pow(hangChuc, 3) + Math.pow(hangDonVi, 3);
    if (tongLapPhuong === num) {
        console.log(num);
    }
}