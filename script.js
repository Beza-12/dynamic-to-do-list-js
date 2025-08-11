document.addEventListener('DOMContentLoaded', function() {
    // Original To-Do List functionality
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();
        
        // Check if input is empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }
        
        // Create new task item
        const li = document.createElement('li');
        li.textContent = taskText;
        
        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.classList.add('remove-btn'); // Using classList.add() here
        
        // Add click event to remove button
        removeBtn.onclick = function() {
            taskList.removeChild(li);
        };
        
        // Append elements
        li.appendChild(removeBtn);
        taskList.appendChild(li);
        
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
});    
    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }
        
        const li = document.createElement('li');
        li.textContent = taskText;
        
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';
        
        removeBtn.onclick = function() {
            taskList.removeChild(li);
        };
        
        li.appendChild(removeBtn);
        taskList.appendChild(li);
        taskInput.value = "";
    }
    
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    
    
    function addQuote() {
        const quoteText = document.getElementById('quote-input').value.trim();
        const authorText = document.getElementById('author-input').value.trim();
        
        if (quoteText === "" || authorText === "") {
            alert("Please enter both a quote and an author!");
            return;
        }
        
        const quoteList = document.getElementById('quote-list');
        const li = document.createElement('li');
        li.innerHTML = `"${quoteText}" - <em>${authorText}</em>`;
        
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';
        
        removeBtn.onclick = function() {
            quoteList.removeChild(li);
        };
        
        li.appendChild(removeBtn);
        quoteList.appendChild(li);
        
        // Clear inputs
        document.getElementById('quote-input').value = "";
        document.getElementById('author-input').value = "";
    }
    
    // Initialize the quote form
    createAddQuoteForm();
});