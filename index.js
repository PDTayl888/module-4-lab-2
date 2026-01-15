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
    console.log("term : ", term);
    searchList = [];
    for (let i=0; i < shoppingList.length; i++) {
        console.log("i : ", i);
        console.log("typeof : ", typeof shoppingList[i]);
        if (typeof shoppingList[i] === "string" && shoppingList[i].toLowerCase().includes(term.toLowerCase())) {
            console.log("conditions met : ", i);
            console.log("shoppingList[i] : ", shoppingList[i]);
            searchList.push(shoppingList[i]);

             return searchList;
        }
        console.log("searchList : ", searchList);
       
    }
    
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

function handleRemoveLastItem() {
    removeLastItem();
    displayList();
}