let product = [];
let cart = [];
let idproduct = 1;

function main() {
  let choice;

  do {
    choice = showMenu();
    switch (choice) {
      case 1:
        showCategory(product);
        break;
      case 2:
        let newBook = addBook();
        product.push(newBook);
        break;
      case 3:
        searchBook(product);
        break;
      case 4:
        purchaseBook(product, cart);
        break;
      case 5:
        sortProduct(product);
        break;
      case 6:
        checkOut(cart);
        break;
      case 7:
        totalStock(product);
        break;
      case 8:
        alert("Thoát chương trình.");
        break;
      default:
        alert("Lỗi cú pháp, mời bạn nhập lại.");
        break;
    }
  } while (choice !== 8);
}

function showMenu() {
  return +prompt(`
    1. Hiển thị danh sách sách theo thể loại
    2. Thêm sách mới vào kho
    3. Tìm kiếm sách theo tên hoặc ID
    4. Mua sách
    5. Sắp xếp sách theo giá
    6. Tính tổng số lượng sách đã mua và tổng tiền
    7. Hiển thị tổng số lượng sách trong kho
    8. Thoát chương trình
    Mời bạn chọn chức năng:
  `);
}

function showCategory(product) {
  let searchCategory = prompt("Mời bạn nhập tên danh mục:").trim();
  if (!searchCategory) {
    alert("Danh mục không hợp lệ.");
    return;
  }

  let productCategory = product.filter(
    (p) => p.category.toLowerCase() === searchCategory.toLowerCase()
  );

  if (productCategory.length === 0) {
    alert("Danh mục sản phẩm không tồn tại.");
    return;
  }

  productCategory.forEach((p) => {
    alert(`ID: ${p.id}\nTên: ${p.name}\nGiá: ${p.price}\nSố lượng: ${p.quantity}`);
  });
}

function addBook() {
  let name, price, quantity, category;
  
  do {
    name = prompt("Mời bạn nhập tên sách:").trim();
  } while (!name);
  
  do {
    price = parseFloat(prompt("Mời bạn nhập giá sách:"));
  } while (isNaN(price) || price <= 0);
  
  do {
    quantity = parseInt(prompt("Mời bạn nhập số lượng sách:"));
  } while (isNaN(quantity) || quantity <= 0);
  
  do {
    category = prompt("Mời bạn nhập thể loại sách:").trim();
  } while (!category);
  
  return { id: idproduct++, name, price, quantity, category };
}

function searchBook(product) {
  let keyword = prompt("Nhập tên hoặc ID sách cần tìm:").trim().toLowerCase();
  let result = product.filter(p => p.name.toLowerCase().includes(keyword) || p.id.toString() === keyword);

  if (result.length === 0) {
    alert("Không tìm thấy sách.");
  } else {
    result.forEach(p => {
      alert(`ID: ${p.id}\nTên: ${p.name}\nGiá: ${p.price}\nSố lượng: ${p.quantity}`);
    });
  }
}

function purchaseBook(product, cart) {
  let idProduct = parseInt(prompt("Nhập ID sách cần mua:"));
  let book = product.find(p => p.id === idProduct);
  if (!book) {
    alert("ID không tồn tại.");
    return;
  }
  if (book.quantity === 0) {
    alert("Sản phẩm đã hết hàng.");
    return;
  }

  let cartQuantity;
  do {
    cartQuantity = parseInt(prompt("Nhập số lượng sách muốn mua:"));
  } while (isNaN(cartQuantity) || cartQuantity <= 0 || cartQuantity > book.quantity);
  
  book.quantity -= cartQuantity;
  cart.push({ id: book.id, name: book.name, price: book.price, quantity: cartQuantity });
}

function sortProduct(product) {
  let choice = +prompt("Chọn cách sắp xếp: 1. Tăng dần, 2. Giảm dần");
  if (choice === 1) {
    product.sort((a, b) => a.price - b.price);
  } else if (choice === 2) {
    product.sort((a, b) => b.price - a.price);
  } else {
    alert("Lựa chọn không hợp lệ.");
  }
}

function checkOut(cart) {
  if (cart.length === 0) {
    alert("Giỏ hàng trống.");
    return;
  }
  let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  alert(`Tổng số tiền cần thanh toán: ${total}`);
}

function totalStock(product) {
  let total = product.reduce((sum, p) => sum + p.quantity, 0);
  alert(`Tổng số sách trong kho: ${total}`);
}

main();