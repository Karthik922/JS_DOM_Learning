//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title = 123;
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);

//document.all[10].textContent = 'Hello';

//console.log(document.forms[0]);
//console.log(document.links);
//console.log(document.images);

/*Get Element By ID */
//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
//var header = document.getElementById('main-header');

//console.log(headerTitle);
//headerTitle.textContent = 'Hello';
//headerTitle.innerText = 'Welcome';

//console.log(headerTitle.textContent);

//console.log(headerTitle.innerText);

//headerTitle.innerHTML = '<h3>Hello World</h3>';

//header.style.borderBottom = 'solid 3px #000'

/*Get Element By Clas Name  */
//var items = document.getElementsByClassName('list-group-item');
//console.log(items);

//console.log(items[1]);
//items[1].textContent = 'Karthik K';
//items[1].style.fontWeight = 'bold';
//items[1].style.backgroundColor = 'yellow';

//items.style.backgroundColor = '#f4f4f4';   //cannot set color all the items(You should use for loop)

//for(var i=0;i<items.length;i++)
//{
 //   items[i].style.backgroundColor = '#f4f490';
//}

//Get Element Ny Tag name
//var li = document.getElementsByTagName('li');
//console.log(li);

//console.log(li[1]);
//li[1].textContent = 'Karthik K';
//li[1].style.fontWeight = 'bold';
//li[1].style.backgroundColor = 'yellow';

//items.style.backgroundColor = '#f4f4f4';   //cannot set color all the items(You should use for loop)

//for(var i=0;i<li.length;i++)
//{
 //   li[i].style.backgroundColor = '#f77880';
//}

//Query Selecttor//
//var header  = document.querySelector('#main-header');
//header.style.borderBottom = 'solid 4px #ccc';

//var input = document.querySelector('input');
//input.value = 'Hello World';

//var submit = document.querySelector('input[type="submit"]');
//submit.value="SEND";

//var item = document.querySelector('.list-group-item');
//item.style.color = 'red';

//var lastItem = document.querySelector('.list-group-item:last-child');
//lastItem.style.color = 'blue';

//var secondItem = document.querySelector('.list-group-item:nth-child(2)');
//secondItem.style.color = 'coral';

//Query Selector All//
//var titles = document.querySelectorAll('.title');
//console.log(titles);
//titles[0].textContent = 'Innoart';


//var odd = document.querySelectorAll('li:nth-child(odd)');
//var even = document.querySelectorAll('li:nth-child(even)');
//for(var i=0;i<odd.length;i++)
//{
  //  odd[i].style.backgroundColor = '#f4f4f4';
   // even[i].style.backgroundColor = '#ccc';
//}


// TRAVERSING THE DOM //
var itemList = document.querySelector('#item');
//parantNode
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor = '#f4f4f4';
//console.log(itemList.parentNode.parentNode);

//parantElement
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor = '#889978';
//console.log(itemList.parentElement.parentElement);


//ChildNode
//console.log(itemList.childNodes);

//console.log(itemList.children);
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor ='yellow';


// FristChild
//console.log(itemList.firstChild);

// First Element Child 
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent = 'Software Engineer';


// lastChild
//console.log(itemList.lastChild);

// last Element Child 
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent = 'Software Engineer';


//NextSibling 

//console.log(itemList.nextSibling);

//NextElement Sibling 
//console.log(itemList.nextElementSibling);

//previousSibling
//console.log(itemList.previousSibling);
//previous Element Sibling
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color = 'green';

// CreateElement

// Create DIV
var newDiv = document.createElement('div');
//add class
newDiv.className = 'hello';
// add id
newDiv.id =  'hello1';
// Add Attribute
newDiv.setAttribute('title', 'Hello Div');

//Create Text Node
var newDivText = document.createTextNode('Hello World');

// Add Text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

newDiv.style.fontSize = '30px';
container.insertBefore(newDiv, h1);
//console.log(newDiv);




