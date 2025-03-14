const rectangle = {
    width: 10,
    height: 5,
    getArea,
};
function getArea(rectangle) {
    return rectangle.width * rectangle.height;
}
console.log(rectangle.width); // 10
console.log(rectangle.height); // 5
console.log(getArea(rectangle));// 50