// type new item in id=item 
// click submit will addItem
// the item add will display in items
//
var itemList = document.getElementById('items')
var form = document.getElementById('addForm')
var filter = document.getElementById('filter')
// var delBtn = document.getElementById('')

form.addEventListener('submit', addItem)
itemList.addEventListener('click', delBtn)
filter.addEventListener('keyup', itemFilter)


function addItem(e){
    e.preventDefault()

    var newItem = document.getElementById('item').value
	// add itemList

	var li = document.createElement("li");

	// add class
	li.className = "list-group-item";

	// add text to item with input value
	li.appendChild(document.createTextNode(newItem));
    itemList.appendChild(li);

    // create delete btn element

    var delBtn = document.createElement("button");
    delBtn.className = "btn btn-danger btn-sm float-end delete"
    delBtn.appendChild(document.createTextNode('X'));
    li.appendChild(delBtn)

    document.getElementById("item").value = '';
    
    // console.log(itemList.children);
}

function delBtn(e){
    
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure to delete Item?')){
            var li = e.target.parentElement
            itemList.removeChild(li)
        }
    }
}
    // console.log(itemList.children);

// console.log(itemList.children)


function itemFilter(e){
	var text = e.target.value.toLowerCase()
    console.log(text)

	var items = itemList.getElementsByTagName("li");
	Array.from(items).forEach(function (item) {
		var itemName = item.firstChild.textContent;
		// console.log(itemName);
        if (itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block'}
            else {
                item.style.display = 'none'
            }
        

	});
	console.log(items)
}

