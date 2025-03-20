let vanBan = document.getElementById("vanBan");
let coChu = 16;

function tangChu() {
    coChu += 2;
    vanBan.style.fontSize = coChu + "px";
}

function giamChu() {
    if (coChu > 10) {
        coChu -= 2;
        vanBan.style.fontSize = coChu + "px";
    }
}