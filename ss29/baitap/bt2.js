let sanpham = {}; 
let id = 1;

function addIteams() {
    let name = prompt("Nhập vào tên sản phẩm:");
    let price = parseFloat(prompt("Giá sản phẩm:"));
    let category = prompt("Danh mục sản phẩm:");
    let quantily = parseInt(prompt("Số lượng sản phẩm trong kho:"));

    if (isNaN(price) || isNaN(quantily)) {
        alert("Thông tin nhập vào không hợp lệ!");
        return;
    }

    sanpham[id] = { name, price, category, quantily };
    alert("Đã thêm sản phẩm thành công!");
    id++;
}

function displayIteams() {
    if (Object.keys(sanpham).length === 0) {
        console.log("Không có sản phẩm nào trong danh sách!");
        return;
    }

    console.log("Danh sách sản phẩm:");
    sanpham.forEach(item => { console.log(`ID: ${item.id} - Tên: ${item.name}, Giá: ${item.price}, Danh mục: ${item.category}, Số lượng: ${item.quantily}`) });
}

function searchItems() {
    let searchId = prompt("Nhập vào ID sản phẩm muốn tìm kiếm:");

    if (!sanpham[searchId]) {
        console.log("Không tìm thấy sản phẩm!");
        return;
    }

    let item = sanpham[searchId];
    console.log(`Sản phẩm tìm thấy: ID: ${searchId}, Tên: ${item.name}, Giá: ${item.price}, Danh mục: ${item.category}, Số lượng: ${item.quantily}`);
}

function chinhSuasanPham() {
    let searchId = prompt("Nhập ID sản phẩm cần cập nhật:");

    if (!sanpham[searchId]) {
        console.log("Không tìm thấy sản phẩm!");
        return;
    }

    let item = sanpham[searchId];

    item.name = prompt(`Nhập tên mới (Hiện tại: ${item.name}):`) || item.name;
    item.price = parseFloat(prompt(`Nhập giá mới (Hiện tại: ${item.price}):`)) || item.price;
    item.category = prompt(`Nhập danh mục mới (Hiện tại: ${item.category}):`) || item.category;
    item.quantily = parseInt(prompt(`Nhập số lượng mới (Hiện tại: ${item.quantily}):`)) || item.quantily;

    console.log("Đã cập nhật thông tin sản phẩm!");
}

function deleteItem() {
    let searchId = prompt("Nhập ID sản phẩm cần xóa:");

    if (!sanpham[searchId]) {
        console.log("Không tìm thấy sản phẩm!");
        return;
    }

    delete sanpham[searchId];
    console.log(`Sản phẩm ID ${searchId} đã được xóa!`);
}

function locSanpham() {
    let minPrice = +prompt("Nhập giá nhỏ nhất:");
    let maxPrice = +prompt("Nhập giá lớn nhất:");

    if (isNaN(minPrice) || isNaN(maxPrice) || minPrice < 0 || maxPrice < 0 || minPrice > maxPrice) {
        alert("Giá nhập vào không hợp lệ!");
        return;
    }

    console.log(`Danh sách sản phẩm có giá từ ${minPrice} đến ${maxPrice}:`);
    for (let key in sanpham) {
        let item = sanpham[key];
        if (item.price >= minPrice && item.price <= maxPrice) {
            console.log(`ID: ${key} - Tên: ${item.name}, Giá: ${item.price}, Danh mục: ${item.category}, Số lượng: ${item.quantily}`);
        }
    }
}

do {
    let choice = prompt(
        "Nhập vào lựa chọn: \n" +
        "1. Thêm sản phẩm \n" +
        "2. Hiển thị tất cả sản phẩm \n" +
        "3. Tìm sản phẩm theo ID \n" +
        "4. Cập nhật sản phẩm theo ID \n" +
        "5. Xóa sản phẩm theo ID \n" +
        "6. Lọc sản phẩm theo khoảng giá \n" +
        "7. Thoát"
    );

    switch (choice) {
        case "1":
            addIteams();
            break;
        case "2":
            displayIteams();
            break;
        case "3":
            searchItems();
            break;
        case "4":
            chinhSuasanPham();
            break;
        case "5":
            deleteItem();
            break;
        case "6":
            locSanpham();
            break;
        case "7":
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }
} while (choice !== "7");