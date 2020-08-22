const form = document.querySelector('#taskForm');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('.collection');
const filter = document.querySelector('#filter');
const clearBtn = document.querySelector('.clearTasks');

// To run all event listeners
loadEventListeners();

function loadEventListeners() {
    document.addEventListener('DOMContentLoaded', getTasks);
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);
    clearBtn.addEventListener('click', clearTasks);
    filter.addEventListener('keyup', filterTasks);
};

// Getting tasks from Local Storage
function getTasks() {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task) {
        const li = document.createElement('li');
        li.className = 'addedTask';
        li.appendChild(document.createTextNode(task));

        const link = document.createElement('a'); 
        link.className = 'delete-item icon';
        link.innerHTML = '<i class="far fa-times-circle"></i>';
        li.appendChild(link);
        taskList.appendChild(li);
    });
}

// Adding a task
function addTask(e) {
    if (taskInput.value === '') {
        let alert = document.createElement('div');
        alert.className = 'alert';
        alert.innerHTML = '<p>Please add a task</p>';
        form.appendChild(alert);
        setTimeout(function() {
            alert.style.display = 'none';
        }, 4000);

        e.preventDefault();
    } else {
        const li = document.createElement('li');
        li.className = 'addedTask';
        li.appendChild(document.createTextNode(taskInput.value));

        const link = document.createElement('a'); 
        link.className = 'delete-item icon';
        link.innerHTML = '<i class="far fa-times-circle"></i>';
        li.appendChild(link);
        taskList.appendChild(li);

        storeTaskInLocalStorage(taskInput.value);

        taskInput.value = '';

        e.preventDefault();
    }
} 

// Store task
function storeTaskInLocalStorage(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove task
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();

            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

// Remove from localStorage
function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index) {
        if(taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear tasks
function clearTasks() {
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    clearTaskFromLocalStorage();
}

// Clear from localStorage
function clearTaskFromLocalStorage() {
    localStorage.clear();
}

// filter tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.addedTask').forEach(function(task) {
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'flex';
        } else {
            task.style.display = 'none';
        }
    });
}