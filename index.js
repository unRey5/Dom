//DOM

// console.log(document.body.innerText);

// console.log(document.getElementById('main'));
// console.log(document.querySelector('#main'));

// const textElement = document.getElementById('app-title');

// console.log(textElement.textContent);
// console.log(textElement.textContent = 'Shopping List');

// textElement.style.color = 'red';
// textElement.style.backgroundColor = 'black';
// textElement.style.padding = '.3rem .5rem'

//document.querrySelector (select single item)

// console.log(document.querySelector('h1'));
// console.log(document.querySelector('#app-title'));
// console.log(document.querySelector('.container'));
// console.log(document.querySelector('input[type=text'));

// const secondItem = document.querySelector('li:nth-child(2)');

// secondItem.innerText = 'Apple Juice';

//querryselectorall (select multiple items)

// const lst = document.querySelectorAll('.item');

// console.log(lst[1].innerText);

// lst.style.color = 'red';// this code wont run because it is trying to style an entire nodelist. so to be specific

// lst[1].style.color = 'red';

// lst.forEach((item, index) => {
//     item.style.color = 'red';

//     if (index === 0) {
//         item.style.color = 'green';
//     }

//     if (index === 1) {
//         item.innerHTML = `Mango
//             <button class="remove-item btn-link text-red">
//                 <i class="fa-solid fa-xmark"></i>
//             </button>`;
//     }//adding the whole code in a template string so that the X button stays after text change 
// });

//it returns a nodelist, which is an array-like structure

//element nodes(every html on the page is an element node)

// wo

//create and append.

//you can create elements and add it anywhere in the document that you like using js create and append.

// const div = document.createElement('div');
// div.className = 'my-element';
// div.id = 'element-created';
// div.setAttribute('title', 'element');

// div.innerText = 'Hello World';
//innerText is really meant to get and change the content of an already existing element

// const text = document.createTextNode('Hello World');

// div.appendChild(text);

// document.body.appendChild(div);

// document.querySelector('ul').appendChild(div);

//create another list item of a fruit and add it to the existing list makeing sure the flow is exactly the same.

// const list = document.createElement('li');
// list.className = 'item';
// list.id = 'list-created';

// const txt = document.createTextNode('Mango');
// const xmark = document.createTextNode('xmark');

// list.appendChild(txt);

// document.querySelector('ul').appendChild(list);

// console.log(list);

// function createItem(item) {
//     const li = document.createElement('li');
//     const tx = document.createTextNode(item);
//     li.appendChild(tx);

//     const button = document.createElement('button');
//     button.className = 'remove-item btn-link text-red';
//     const icon = document.createElement('i');
//     icon.className = 'fa-solid fa-xmark';
//     button.appendChild(icon);

//     li.appendChild(button);

//     document.querySelector('ul').appendChild(li);


// }

// createItem('Strawberry');

//insert elements into the dom

//insertAdjacentElement

// function insertElement() {
//     const filter = document.querySelector('.filter');
//     const h1 = document.createElement('h1');
//     h1.textContent = 'insertAdjacentElement';

//     filter.insertAdjacentElement('afterend', h1)
// }

// insertElement();

//insertBefore

// function insertBefore() {
//     const ul = document.querySelector('ul');

//     const span = document.createElement('Span');
//     span.innerHTML = `<span>Home</span>`;

//     const secondItem = document.querySelector('li:nth-child(3)');

//     ul.insertBefore(span, secondItem)
// }

// insertBefore();

//You may think that since there is an `insertBefore()` method, there is also an `insertAfter()`, but there isn't. In this challenge, I want you to create a custom `insertAfter()` function. If you don't want to do it as a challenge, that's fine, just follow along.

 //The first param will be `newEl` which will be a new element that you create with `document.createElement()` 
//The second param will be `existingEl` which is an element in the DOM that you want to insert your new element after

//replaceAllItems

// function replaceAllItems() {
//     const lis = document.querySelectorAll('li');

//     lis.forEach((item, index) => {
        // item.outerHTML = '<li>blaze</li>';
//         if (index === 1) {
//             item.textContent = 'cur';
//         } else {
//             item.outerHTML = '<li>blaze</li>';
//         }
//     });
    
    
// }
// replaceAllItems();

// lis.forEach((item, index) => index === 1  ? item);

//event listeners

    // const clear = document.querySelector('#clear');


// function onClear() {
    // const itemList = document.querySelector('ul');
    // const itemss = document.querySelectorAll('li');
    // console.log(alert('clear'));

    // itemList.innerHTML = '';

    // itemss.forEach((items) => items.remove());
// }

// clear.addEventListener('click', onClear);
// setTimeout(() => clear.click(), 5000);

//you can use the removeEventListener method to remove element from the dom

// setTimeout(() => clear.removeEventListener('click', onClear), 5000);

// setTimeout(() => clear.click(), 5000);
 
// clear.onClick() => {
//     const itemList = document.querySelector('ul');
//     itemList.innerHTML = '';
// }//this is an old way to add an event listener



//better and modern way will be

// clear.addEventListener('click', () => alert('cleared'));
// clear.addEventListener('click', onClear);

//remove event listener

// setTimeout(() => clear.removeEventListener('click', onClear), 5000);

// setTimeout(() => clear.click(), 5000);//fire even after a period of time


//on click we want to remove items from the list


//mouse events

// const logo = document.querySelector('.fa-note-sticky');

// const onClick = () => console.log('click event');
// const onDoubleClick = () => console.log('Double click event');

// //event listeners
// logo.addEventListener('click', onClick);
// logo.addEventListener('dblclick', onDoubleClick);


//keyboard events

//keypress

// const itemInput = document.querySelector('#item-input');

// df


//keyup

// const onKeyUp = e => console.log('key up');

// itemInput.addEventListener('keyup', onKeyUp);


// const onKeyDown = e => console.log('keydown');

// itemInput.addEventListener('keydown', onKeyDown);

//key

// const onKeyDown = e => {
    

//     if (e.key === 'd') {
//         alert('mayor');
//     } else {
//         console.log(e.key);
//     }

// }
// const onKeyUp = e => {
//     console.log('keyup');
// };

// itemInput.addEventListener('keydown', onKeyDown);
// itemInput.addEventListener('keyup', onKeyUp);

//Input events

// const itemInput = document.querySelector('#item-input');
// const heading = document.querySelector('h1');
// console.log(heading);

// function onInput(e) {
//     console.log(e.target.value);
// }

// itemInput.addEventListener('input', onInput);



// function onFocus() {
//     console.log('input is focused');
//     itemInput.style.outlineStyle = 'solid';
//     itemInput.style.outlineColor = 'purple';
// }

// function onBlur() {
//     console.log('input is not focused');
//     itemInput.style.outlineStyle = 'none';

// }
    
// itemInput.addEventListener('focus', onFocus);
// itemInput.addEventListener('blur', onBlur);


//form submission and form data object

// const form = document.getElementById('item-form');

// function onSubmit(e) {
//     e.preventDefault();
//     console.log('submit');

//     const item = document.getElementById('item-form').value;

//     console.log(item); 
// }


// form.addEventListener('submit', onSubmit);


// function onSubmit2(e) {
//     e.preventDefault();

//     const formData = new FormData(form);
//     const item = formData.get('item');
//     console.log(item);
// }
// form.addEventListener('submit', onSubmit2);










