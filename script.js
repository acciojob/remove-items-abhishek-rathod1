//your JS code here. If required.
let colorSet = document.getElementById("colorSelect");
// 
// 
function removeColor(){
	
let selectedColor = colorSet.options[colorSet.selectedIndex].value
console.log(selectedColor);
	colorSet.remove(selectedColor);	
	
}