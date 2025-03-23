let inputText = document.getElementById("inputText");
let countButton = document.getElementById("Button");
let charCount = document.getElementById("Count");

countButton.addEventListener("click", function () {
    charCount.textContent = inputText.value.length;
});