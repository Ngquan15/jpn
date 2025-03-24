let courses = [{
    id: 1,
    content: 'Learn Javascript Session 01',
    dueDate: '2023-04-17',
    status: 'Pending',
    assignedTo: 'Anh Bách'
},
{
    id: 2,
    content: 'Learn Javascript Session 2',
    dueDate: '2023-04-17',
    status: 'Pending',
    assignedTo: 'Lâm'
},
{
    id: 3,
    content: 'Learn CSS Session 1',
    dueDate: '2023-04-17',
    status: 'Pending',
    assignedTo: 'Hiếu ci ớt ớt'
}
];

function renderData() {
let rowElement = "";
courses.forEach((course, index) => {
    rowElement += `<tr>
        <td>${index + 1}</td>
        <td>${course.content}</td>
        <td>${course.dueDate}</td>
        <td>${course.status}</td>
        <td>${course.assignedTo}</td>
        <td class="actions">
            <button onclick="editCourse(${course.id})">Sửa</button>
            <button onclick="deleteCourse(${course.id})">Xóa</button>
        </td>
    </tr>`;
});
document.getElementById("table_body").innerHTML = rowElement;
}

function createCourse() {
const content = document.getElementById("content").value;
const dueDate = document.getElementById("dueDate").value;
const status = document.getElementById("status").value;
const assignedTo = document.getElementById("assignedTo").value;

if (!content || !dueDate || !assignedTo) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
}

const newCourse = {
    id: courses.length ? courses[courses.length - 1].id + 1 : 1,
    content,
    dueDate,
    status,
    assignedTo
};

courses.push(newCourse);
renderData();
clearForm();
}

function editCourse(id) {
const course = courses.find(c => c.id === id);
if (course) {
    document.getElementById("content").value = course.content;
    document.getElementById("dueDate").value = course.dueDate;
    document.getElementById("status").value = course.status;
    document.getElementById("assignedTo").value = course.assignedTo;

    document.querySelector("button[onclick='createCourse()']").style.display = "none";
    if (!document.getElementById("saveBtn")) {
        const saveBtn = document.createElement("button");
        saveBtn.innerText = "Lưu";
        saveBtn.id = "saveBtn";
        saveBtn.onclick = function () {
            saveEdit(id);
        };
        document.body.appendChild(saveBtn);
    }
}
}

function saveEdit(id) {
const course = courses.find(c => c.id === id);
if (course) {
    course.content = document.getElementById("content").value;
    course.dueDate = document.getElementById("dueDate").value;
    course.status = document.getElementById("status").value;
    course.assignedTo = document.getElementById("assignedTo").value;

    renderData();
    clearForm();

    document.getElementById("saveBtn").remove();
    document.querySelector("button[onclick='createCourse()']").style.display = "inline-block";
}
}

function deleteCourse(id) {
courses = courses.filter(course => course.id !== id);
renderData();
}

function clearForm() {
document.getElementById("content").value = "";
document.getElementById("dueDate").value = "";
document.getElementById("status").value = "Pending";
document.getElementById("assignedTo").value = "";
}

renderData();