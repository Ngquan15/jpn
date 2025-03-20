let count = 0;
document.getElementsByClassName("onclick")[0].addEventListener("click", () => {
    count++;
    document.getElementById(`name`).innerHTML = `Số lần bấm ${count}`;
})