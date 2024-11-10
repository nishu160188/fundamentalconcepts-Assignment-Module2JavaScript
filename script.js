const listTitleInput = document.getElementById("list-title");
const itemInput = document.getElementById("item-input");
const addNameButton = document.getElementById("add-name");
const addItemButton = document.getElementById("add-item");
const currentListTitle = document.getElementById("current-list-title");
const listItems = document.getElementById("list-items");
const container2 = document.getElementById("container2");

let tasks = [];

function renderTasks() {
    listItems.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.classList.toggle("completed", task.completed);
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.style.width = "20px";
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", () => toggleTaskCompletion(index));

        const textNode = document.createElement("span");
        textNode.textContent = task.text;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => deleteTask(index));

        li.append(checkbox, textNode, deleteButton);

        listItems.appendChild(li);
    });
}

function addTask() {
    const taskText = itemInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    tasks.push({ text: taskText, completed: false });
    itemInput.value = "";
    renderTasks();
}

function toggleTaskCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

addNameButton.addEventListener("click", () => {
    const title = listTitleInput.value.trim();

    if (title === "") {
        alert("Please enter a list title.");
        return;
    }

    currentListTitle.textContent = title;
    listTitleInput.disabled = true;
    addNameButton.disabled = true;

    container2.style.display = "block";
    itemInput.disabled = false;
    addItemButton.disabled = false;
});

addItemButton.addEventListener("click", addTask);
itemInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        addTask();
    }
});

renderTasks();


