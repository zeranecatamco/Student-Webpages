let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function () {
  var listItem = document.createElement('li');
  listItem.classList.add('list-item');
  listItem.innerText = inputField.value;

  if (inputField.value.trim() !== "") {
    toDoContainer.appendChild(listItem);
    inputField.value = "";

    listItem.addEventListener('click', function () {
      listItem.style.textDecoration = "line-through";
    });

    listItem.addEventListener('dblclick', function () {
      toDoContainer.removeChild(listItem);
    });
  }
});
