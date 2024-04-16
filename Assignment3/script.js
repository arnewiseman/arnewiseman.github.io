document.getElementById('toggle-button').addEventListener('click', function() {
    var body = document.body;
    var button = this;
    var headerGif = document.getElementById('header-gif');
    
    if (body.classList.contains('night')) {
        body.classList.remove('night');
        body.classList.add('day');
        button.textContent = 'Switch to Night Mode';
        headerGif.src = './Media/SillyCat.gif'; // Set the day mode GIF
    } else {
        body.classList.add('night');
        body.classList.remove('day');
        button.textContent = 'Switch to Day Mode';
        headerGif.src = './Media/SleepyCat.gif'; // Set the night mode GIF
    }
});


function addTask() {
    var input = document.getElementById('task-input');
    var taskText = input.value.trim();
    if (taskText) {
        createTaskElement(taskText);
        saveTasks();
        input.value = ''; // Clear the input field after adding
    }
    input.focus(); // Focus back to the input field
}

function createTaskElement(text) {
    var li = document.createElement('li');
    li.className = 'task-item'; // Add class for task styling

    // Create the comment-like text
    var commentText = document.createTextNode('// ' + text);
    li.appendChild(commentText);

    // Create a span for the text to control it separately
    var textSpan = document.createElement('span');
    textSpan.textContent = text;
    textSpan.className = 'task-text'; // Add class for styling the text
    li.appendChild(textSpan);
    
    // Adding a delete button to each task
    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn'; // Add class for styling the button
    deleteBtn.onclick = function() {
        this.parentNode.remove(); // Remove the li element
        saveTasks(); // Update local storage after deleting
    };
    li.appendChild(deleteBtn);

    document.getElementById('task-list').appendChild(li);
}


// Save tasks to local storage
function saveTasks() {
    var tasks = [];
    document.querySelectorAll('#task-list li').forEach(function(taskItem) {
        tasks.push(taskItem.firstChild.textContent); // Save only the task text, not the button text
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Load tasks from local storage
function loadTasks() {
    var tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
        tasks.forEach(createTaskElement);
    }
}
