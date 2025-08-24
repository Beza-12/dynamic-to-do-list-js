document.addEventListener('DOMContentLoaded', function() {
    // Original To-Do List functionality
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from localStorage when the page loads
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        
        // Clear the current task list
        taskList.innerHTML = '';
        
        // Add each stored task to the list
        storedTasks.forEach(taskText => {
            addTaskToDOM(taskText, false); // false means don't save to localStorage again
        });
    }

    // Save tasks to localStorage
    function saveTasks() {
        const tasks = [];
        document.querySelectorAll('#task-list li').forEach(taskItem => {
            // Get the text without the remove button text
            const taskText = taskItem.textContent.replace('Remove', '').trim();
            tasks.push(taskText);
        });
        
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Add task to DOM (with option to save to localStorage)
    function addTaskToDOM(taskText, saveToStorage = true) {
        // Create new task item
        const li = document.createElement('li');
        li.textContent = taskText;
        
        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.classList.add('remove-btn');
        
        // Add click event to remove button
        removeBtn.onclick = function() {
            taskList.removeChild(li);
            saveTasks(); // Update localStorage after removal
        };
        
        // Append elements
        li.appendChild(removeBtn);
        taskList.appendChild(li);
        
        // Save to localStorage if needed
        if (saveToStorage) {
            saveTasks();
        }
    }

    function addTask() {
        const taskText = taskInput.value.trim();
        
        // Check if input is empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }
        
        // Add task to DOM and save to localStorage
        addTaskToDOM(taskText);
        
        // Clear input field
        taskInput.value = "";
    }
    
    // Add task when button is clicked
    addButton.addEventListener('click', addTask);
    
    // Add task when Enter key is pressed
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Load tasks from localStorage when page loads
    loadTasks();
});