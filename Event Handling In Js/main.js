
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


// From Submit Event 
form.addEventListener('submit', addItem);

//delete Event
itemList.addEventListener('click', removeItem);

//filter event
filter.addEventListener('keyup', filterItems);

//Add Item
function addItem(e)
{
     e.preventDefault();
        //Get Input Value
     var newItem = document.getElementById('item').value;

        //Create New Li Element
     var li = document.createElement('li');
     
     //Add Class
     li.className = 'list-group-item';
     // Add text node with input value
     li.appendChild(document.createTextNode(newItem));
     
     //Create Delete Button Element
     var deleteBtn = document.createElement('button');

     //add classes
     deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
     //Append text Node
     deleteBtn.appendChild(document.createTextNode('X'));
     //Append button to li
     li.appendChild(deleteBtn);
     
    // Append li to List
     itemList.appendChild(li);




     //console.log(li);
}


//Remove Item
function removeItem(e)
{
 //console.log(e.button);
 //console.log(e.target.classList.contains('delete'));
 if(e.target.classList.contains('delete'))
 {
     if(confirm('Are you Sure?'))
     {
         var li = e.target.parentElement;
         itemList.removeChild(li);
     }
 }
}


// fliter Items

function filterItems(e){
    // convert to text to lowercase
    var text = e.target.value.toLowerCase();
    //console.log(text);
    //Get List
    var items = itemList.getElementsByTagName('li');
    //console.log(items);
    //convert to an Array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        //console.log(itemName);
        if(itemName.toLowerCase().indexOf(text)!=-1)
        {
            item.style.display = 'block';
        }
        else
        {
            item.style.display = 'none';
        }
    });

}