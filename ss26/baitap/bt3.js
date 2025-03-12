let test1 = ["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@ out.com"];
let test2 = [];
let test3 = "abc";
let test4 = ["abc", "no_at_symbol.com"];
function filter1(arr) {
    if (!Array.isArray(arr)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }

    if (arr.length === 0) {
        console.log("Mảng không có phần tử nào");
        return;
    }

    let ketQua = arr.filter(function (email) {
        return typeof email === "string" && email.includes("@") && !email.includes(" ");
    });

    console.log( ketQua.length > 0 ? ketQua : "Mảng không có email hợp lệ");
}


filter1(test1); 
filter1(test2); 
filter1(test3); 
filter1(test4);