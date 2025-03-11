function checknumebr(arr){
    if (!Array.isArray(arr)) {
        return "Giá trị không hợp lệ";
    }
    if (arr.length === 0) {
        return "Mảng không chứa phần tử";
    }
    return `Phần tử nhỏ nhất trong mảng là ${Math.min(...arr)}`;
}
console.log(checknumebr([2,4,8,1,9]));
