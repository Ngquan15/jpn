let arrayLession = ["Toán", "Lý", "Hóa"];

function renderLession() {
    let stringLession = "";
    for (let i = 0; i < arrayLession.length; i++) {
        stringLession += `<li>${arrayLession[i]}</li>`
    }
    let listItem = document.getElementById("listItem");
    listItem.innerHTML = stringLession;
}

function addLession() {
    let textInput = document.getElementById("inputText").value.trim();
    if (textInput==0) {
        alert("Không tồn tại");
    } else {
        arrayLession.push(textInput);
        renderLession();
        document.getElementById("inputText").value = "";
    }
}