const mainByQuery = document.querySelector('main');
mainByQuery.classList.add('body');

const h1 = document.querySelector('h1');
h1.classList.add('heading');

const form = document.querySelector('form');
form.classList.add('form');

const ul = document.getElementById('todo');

// III dalis
const input = document.getElementById('input');
const button = document.getElementById('button');

button.addEventListener('click', function(){
	const li = document.createElement('li');
	li.classList.add('list-item');
	li.innerText = input.value;
	ul.appendChild(li);
	input.value = '';
	
	 li.addEventListener('dblclick', function(){
	 li.remove(); 
		
 });
	
	li.addEventListener('click', function(){
	li.classList.toggle('done');
});
	
	
});

