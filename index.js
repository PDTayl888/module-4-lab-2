let shoppingList = [];
let searchList = [];

function addItem(item) {
    console.log("ADD ITEM CALLED");
    if (!shoppingList.includes(item)) {
        shoppingList.push[item];
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
    for (let i=0; i < shoppingList.length; i++) {
        console.log(shoppingList[i]);
    }
}

