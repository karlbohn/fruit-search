const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];
const lowerCaseFruit = [];
fruits.forEach((item) => lowerCaseFruit.push(item.toLowerCase()));
const fruitSet = new Set(lowerCaseFruit);

function search(input) {
	let lowerCaseSearch = input.toLowerCase()
	return fruits.filter((fruit) => fruit.toLowerCase().includes(lowerCaseSearch))
	// showSuggestions(filterFruit, suggestions)
}

function searchHandler(e) {
	showSuggestions(search(e.target.value), suggestions)
	// console.log(e.target.value);
	
}

function showSuggestions(results, inputVal) {
	inputVal.innerHTML = '';
	results.forEach((fruit) => {
		inputVal.innerHTML += `<li>${fruit}</li>`}
	)
}

function useSuggestion(e) {
	// set clicked value to input.value
}

input.addEventListener('input', searchHandler);
suggestions.addEventListener('click', useSuggestion);