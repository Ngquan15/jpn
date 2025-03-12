function MaxNumber(arr) {
    if (!Array.isArray(arr)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }

    if (arr.length === 0) {
        console.log("Mảng không có dữ liệu");
        return;
    }

    let maxNumber = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNumber) {
            maxNumber = arr[i];
        }
    }

    let positions = [];
    arr.filter((num, index) => {
        if (num === maxNumber) {
            positions.push(index);
        }
    });

    console.log(`max = ${maxNumber}`);
    console.log(`position: ${positions.join(", ")}`);
}

MaxNumber([10, 9, 5, 11, 24, 5]); 
MaxNumber([]);
MaxNumber("abc"); 