let test1 = ["apple", "banana", "cat", "elephant", "dog"];
let test2 = [];
let test3 = "fdfd";

function filter(arr) {
    if (!Array.isArray(arr)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }

    if (arr.length === 0) {
        console.log("Mảng không chứa phần tử");
        return;
    }

    let result = arr.filter((item) => item = item.length > 5);
    console.log(result);
}

filter(test1); 
filter(test2); 
filter(test3); 