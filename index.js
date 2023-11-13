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

const parent = document.querySelector('.parent');

const output = parent.children[1].innerText;

parent.children[1].innerText = 'Child Two';

parent.firstElementChild.innerText = 'child One';

console.log(output);