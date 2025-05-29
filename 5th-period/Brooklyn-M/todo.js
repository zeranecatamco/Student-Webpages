 let addToDoButton = document.getElementById('addToDo');//button element allows the user to click on the add button, which adds their tasks to the list
      let toDoContainer = document.getElementById('toDoContainer');////the container where the to-do tasks will be displayed and shown
      let inputField = document.getElementById('inputField');//the input field where the user types into to add their tasks
      addToDoButton.addEventListener('click', function() {//event listener prompts the button when it is clicked
        var listItem = document.createElement('li');//creates a bullet point everytime a new item is added
        listItem.classList.add('list-item'); //CSS for styling the paragraph
        listItem.innerText = inputField.value; //adds whatever text that the user inputs
        toDoContainer.appendChild(listItem); //adds the new typed items into the container
        inputField.value = "";//clears the bar where the user types in their item after adding it into the container/list
        listItem.addEventListener('click', function() {//event listener to mark the item as done when it is clicked
          listItem.style.textDecoration = "line-through";//strikes through the item when it is clicked
        })
        listItem.addEventListener('dblclick', function() {//event listener to get rid of and delete items when user double-clicks on them
          toDoContainer.removeChild(listItem);//removes the task/item when double-clicked on by the user
        })
      })
