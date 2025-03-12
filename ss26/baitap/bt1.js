let test1 = [1, 2, 3, 4, 12, 22, 33, 44, 55, 66, 41];
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

    let result = arr.filter((item) => item >= 10);
    console.log(result);
}

filter(test1); 
filter(test2); 
filter(test3); 