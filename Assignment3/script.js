document.getElementById('toggle-button').addEventListener('click', function() {
    var body = document.body;
    var button = this;
    var headerGif = document.getElementById('header-gif');
    
    if (body.classList.contains('night')) {
        body.classList.remove('night');
        body.classList.add('day');
        button.textContent = 'Switch to Night Mode';
        headerGif.src = './Media/SillyCat.gif';
    } else {
        body.classList.add('night');
        body.classList.remove('day');
        button.textContent = 'Switch to Day Mode';
        headerGif.src = './Media/SleepyCat.gif';
    }
});


function addTask() {
    var input = document.getElementById('task-input');
    var taskText = input.value.trim();
    if (taskText) {
        createTaskElement(taskText);
        saveTasks();
        input.value = '';
    }
    input.focus();
}

function createTaskElement(text) {
    var li = document.createElement('li');
    li.className = 'task-item';

    var commentText = document.createTextNode('// ' + text);
    li.appendChild(commentText);

    var textSpan = document.createElement('span');
    textSpan.textContent = text;
    textSpan.className = 'task-text';
    li.appendChild(textSpan);
    
    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function() {
        this.parentNode.remove();
        saveTasks(); 
    };
    li.appendChild(deleteBtn);

    document.getElementById('task-list').appendChild(li);
}


function saveTasks() {
    var tasks = [];
    document.querySelectorAll('#task-list li').forEach(function(taskItem) {
        tasks.push(taskItem.firstChild.textContent);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    var tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
        tasks.forEach(createTaskElement);
    }
}
