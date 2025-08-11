document.addEventListener('DOMContentLoaded', function() {
    // Original To-Do List functionality
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    
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

    // New Quote functionality
    function createAddQuoteForm() {
        const quoteContainer = document.createElement('div');
        quoteContainer.id = 'quote-container';
        quoteContainer.innerHTML = `
            <h2>Add a Quote</h2>
            <input type="text" id="quote-input" placeholder="Enter a quote">
            <input type="text" id="author-input" placeholder="Enter author">
            <button id="add-quote-btn">Add Quote</button>
            <ul id="quote-list"></ul>
        `;
        document.getElementById('todo-app').appendChild(quoteContainer);
        
        // Set up quote functionality
        document.getElementById('add-quote-btn').addEventListener('click', addQuote);
    }
    
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