let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${task} <button class="delete-btn" onclick="deleteTask(${index})">Xóa</button>`;
        taskList.appendChild(li);
    });
}

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value.trim();

    if (task === "") {
        alert("Vui lòng nhập công việc!");
        return;
    }

    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskInput.value = "";
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

renderTasks();