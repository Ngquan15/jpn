let employees = [];
while (true) {
    let choice = +prompt("mời chọn các mục");
    switch (choice) {
        case 1:
            addEmployee();
            break;
        case 2:
            deleteEmployee();
            break;
        case 3:
            updateSalary();
            break;
        case 4:
            searchEmployee();
            break;
        default:
            break;
    }
    if (choice == 0) {
        break;
    }

}
function addEmployee() {
    let name = prompt("tên nhân viên");
    let position = prompt("vị trí");
    let salary = prompt("nhập lương");
    let employee = {
        id: Math.floor(Math.random() * 565466646 + new Date().getMilliseconds()),
        name: name,
        position: position,
        salary: salary
    }
    employees.push(employee);
    console.log("thêm nhân viên thành công", employees);
}
function deleteEmployee() {
    let id = +prompt("Nhập ID nhân viên cần xóa:");
    let index = employees.findIndex(emp => emp.id === id);

    if (index !== -1) {
        let confirmDelete = confirm(`Bạn có chắc muốn xóa nhân viên ${employees[index].name}?`);
        if (confirmDelete) {
            employees.splice(index, 1);
            console.log("Xóa nhân viên thành công!");
        } else {
            console.log("Hủy thao tác xóa.");
        }
    } else {
        console.log("Không tìm thấy nhân viên với ID:", id);
    }

    console.log("Danh sách nhân viên hiện tại:", employees);
}

function updateSalary() {
    let id = +prompt("Nhập ID nhân viên cần cập nhật lương:");
    let employee = employees.find(emp => emp.id === id);

    if (employee) {
        let newSalary = +prompt(`Nhập mức lương mới cho ${employee.name}:`);
        employee.salary = newSalary;
        console.log("Cập nhật lương thành công!", employee);
    } else {
        console.log("Không tìm thấy nhân viên với ID:", id);
    }
}

function searchEmployee() {
    let nameSearch = prompt("Nhập tên nhân viên cần tìm:");
    let foundEmployees = employees.filter(emp => emp.name.toLowerCase().includes(nameSearch.toLowerCase()));

    if (foundEmployees.length > 0) {
        console.log("Nhân viên tìm thấy:", foundEmployees);
    } else {
        console.log("Không tìm thấy nhân viên có tên:", nameSearch);
    }
}