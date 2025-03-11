function sochan(arr){
    if(!Array.isArray(arr)){
        return "Giá trị không hợp lệ";
    }
    let Innumber = arr.filter(num => typeof num === 'number' && num % 2 === 0);

    if(Innumber.length === 0){
        return "Mảng không chứa số chẵn";
    }
    return Innumber;
}
console.log(sochan[11,4,65,6]);
