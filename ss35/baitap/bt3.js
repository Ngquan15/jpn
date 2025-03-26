let store = [{
    img: "https://laptopworld.vn/media/lib/23-10-2023/screenshot_1698025913.png",
    name: "Laptop Dell XPS 15",
    description: "Laptop cap cap voi man hinh 15 inch, CPU Intel Core i7 va RAM 16GB.",
    price: "35,990,000 VND",
},
{
    img: "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-black-thumbnew-600x600.jpg",
    name: "iPhone 15 Pro Max",
    description: "Dien thoai flagship cua Apple voi camera 48MP va chip A17 Pro.",
    price: "32,990,000 VND",
},
{
    img: "https://cdn.tgdd.vn/Products/Images/42/307174/Slider/samsung-galaxy-s24-ultra-5g-thumb-youtube-1020x570.jpg",
    name: "Samsung Galaxy S24",
    description: "Dien thoai Android manh me voi but S-Pen va camera sieu zoom.",
    price: "28,990,000 VND",
},
{
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_172_2.png",
    name: "Tai nghe Sony WH-1000XM5",
    description: "Tai nghe chong on tot nhat voi thoi luong pin len den 30 gio.",
    price: "7,990,000 VND",
},
{
    img: "https://cdn.tgdd.vn/Products/Images/7077/315998/apple-watch-s9-vien-nhom-day-vai-den-tb-600x600.jpg",
    name: "Apple Watch Series 9",
    description: "Dong ho thong minh cap cap voi tinh nang do nhip tim va ho tro the thao.",
    price: "11,990,000 VND",
},
{
    img: "https://hdradio.vn/upload/hinhanh/loa-di-dong/jbl/charge-5/Loa-JBL-Charge-5.jpg",
    name: "Loa JBL Charge 5",
    description: "Loa Bluetooth chong nuoc voi am bass manh me va pin 20 gio.",
    price: "3,990,000 VND",
},
];

function showItems() {
let message = "";
for (let i = 0; i < store.length; i++) {
    message += `
<div class="item">
<img src="${store[i].img}" alt="">
<h3>${store[i].name}</h3>
<p>${store[i].description}</p>
<p>${store[i].price}</p>
<button>Buy</button>
</div>
`;
}
document.getElementById("items").innerHTML = message;
}

function filter() {
let message = "";

for (let i = 0; i < store.length; i++) {
    if (store[i].name.toLowerCase().includes(document.getElementById("input").value.trim().toLowerCase())) {
        message += `         
<div class="item">             
    <img src="${store[i].img}" alt="">             
    <h3>${store[i].name}</h3>             
    <p>${store[i].description}</p>             
    <p>${store[i].price}</p>             
    <button>Buy</button>         
</div>         
`;
    }
}

document.getElementById("items").innerHTML = message;
}

showItems()