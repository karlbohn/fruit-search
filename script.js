const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const form = document.querySelector('form');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];
const lowerCaseFruit = [];
fruits.forEach((item) => lowerCaseFruit.push(item.toLowerCase()));
const fruitSet = new Set(lowerCaseFruit);

function search(input) {
	let lowerCaseSearch = input.toLowerCase()
	return fruits.filter((fruit) => fruit.toLowerCase().includes(lowerCaseSearch))
}

function searchHandler(e) {
	showSuggestions(search(e.target.value), suggestions)
}

function showSuggestions(results, inputVal) {
	inputVal.innerHTML = '';
	results.forEach((fruit) => {
		inputVal.innerHTML += `<li>${fruit}</li>`}
	)
	if(input.value == ''){
		inputVal.innerHTML = '';
	}
	
}

function useSuggestion(e) {
	if(e.target.tagName === 'LI'){
		let li = e.target;
		input.value = li.innerText;
		suggestions.innerHTML = '';
	}
}

function doSearch(){
	let searchInput = input.value;
	let url = "https://www.google.com/search?q=" + searchInput;
	window.open(url);
}

input.addEventListener('input', searchHandler);
form.addEventListener('submit', doSearch);
suggestions.addEventListener('click', useSuggestion);