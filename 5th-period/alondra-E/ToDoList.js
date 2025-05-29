const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//function to add a new task
function addTask(){
  //checks if the input box is empty
  if(inputBox.value === ''){
    alert("You must write something!");  //alert
  }
  else{
    //creates a new list of tasks
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    //adds the new task to the container
    let span = document.createElement("span");
    //creates a delete button 
    span.innerHTML = "\u00d7"; // x symbol for delete button
    li.appendChild(span); //adds the button to the task
  }
  inputBox.value = ""; //clears the input after adding task
  saveData(); //saves the current task
}

listContainer.addEventListener("click", function(e){ //listens for clicks for tasks
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData(); //saves the task
  }
  else if(e.target.tagName === "SPAN"){ //if the delete button is clicked u remove the task
    e.target.parentElement.remove();  //removes the task item
    saveData();
  }
}, false);

//function to save the current task list to local storage
function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}
//function to load & the display tasks from the storage
function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}
const clearBtn = document.getElementById("clear-btn");

//just displays the tasks when the web loads
showTask();

//adds an event listener for the clear all tasks button
clearBtn.addEventListener("click", function() {
  if (confirm("Are you sure you want to clear all tasks?")) {
    listContainer.innerHTML = ''; //clears all the tasks from the list
    saveData(); //saves the empty list to local stirage
  }
});
