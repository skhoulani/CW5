//Samir Khoulani - Classwork 5 - GUI I
window.onload = function() {
    // ADD NEW ITEM TO END OF LIST
    //set grocery list to a variable
    var groceryList = document.getElementsByTagName("UL")[0];


    var newGroceryItem1 = document.createElement("LI");

    //create new text node
    var textGroceryValue1 = document.createTextNode("cream");

    //add text node to li element
    newGroceryItem1.appendChild(textGroceryValue1);

    //add new li node to ul
    groceryList.appendChild(newGroceryItem1);


    // ADD NEW ITEM START OF LIST
    var newGroceryItem2 = document.createElement("LI");

    //create new text node
    var textGroceryValue2 = document.createTextNode("kale");

    //add text node to li element
    newGroceryItem2.appendChild(textGroceryValue2);

    //add new li node to ul
    groceryList.insertBefore(newGroceryItem2, document.getElementsByTagName("LI")[0]);

    // ADD A CLASS OF COOL TO ALL LIST ITEMS
    for(var i = 0; i < groceryList.children.length; i++) {
        document.getElementsByTagName("li")[i].className = "cool";
    }

    // ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
    var numItems = document.createElement("SPAN");
    var numText = document.createTextNode(String(groceryList.children.length));
    numItems.appendChild(numText);

    document.getElementsByTagName("h2")[0].appendChild(numItems);
}
