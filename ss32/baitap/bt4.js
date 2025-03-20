function checkValue(){
    let textValide = document.getElementById("validate");
        let text = document.getElementById("inputText").value.trim();
        if (text.includes("@")) {
            
            if (text.endsWith(".com") || text.endsWith(".vn")) {
                textValide.innerHTML = "<p style = 'color'>email hợp lệ</p>";
            } else {
                textValide.innerHTML = "<p style = 'color'>email không hợp lệ</p>";
                }
        } else {
            textValide.innerHTML = "<p style = 'color'>email không hợp lệ</p>";
        }
}