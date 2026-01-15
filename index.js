let shoppingList = [];
let searchList = [];

function addItem(item) {
    console.log("ADD ITEM CALLED");
    console.log("item : ", item);

    if (!shoppingList.includes(item)) {
        shoppingList.push(item);
    }
}

function filterItems(term) {
    for (let i=0; i < shoppingList.length; i++) {
        if (typeof shoppingList[i] === "String" && shoppingList[i].toLowercase().includes(term.toLowercase())) {
            searchList.push(shoppingList[i]);
        }
    }
    console.log(searchList.join(' '));
}

function removeLastItem() {
    shoppingList.pop();
}

function displayList() {
     const listElement = document.getElementById('shoppingList');

     listElement.innerHTML = '';

    for (let i=0; i < shoppingList.length; i++) {
       const li = document.createElement('li');
        li.textContent = shoppingList[i];
        listElement.appendChild(li);
        console.log(shoppingList[i]);
    }
}

function handleAddItem() {
    const input = document.getElementById('itemInput');
    const newItem = input.value;
    console.log("newItem : ", newItem);

    if (newItem !== "") {
        addItem(newItem);
        input.value = ""; 
        displayList();     
    }
}

function handleRemoveItem() {
    
}