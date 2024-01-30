// CS 361-400 Individual Project
// Quynh Nguyen
// Javascript for Search Bar Function

function search_dog_breed() {
	var input = document.getElementById('searchbar').value
	input=input.toLowerCase();
	var find_dog_breed = document.getElementsByClassName('dog_breeds');
	
	// When users type in specific dog breed, populate matching dog breeds
	for (index = 0; index < find_dog_breed .length; index++) {
		if (!find_dog_breed[index].innerHTML.toLowerCase().includes(input)) {
			find_dog_breed[index].style.display="none";
		}
		else {
			find_dog_breed[index].style.display="list-item";				
		}
	}
}
