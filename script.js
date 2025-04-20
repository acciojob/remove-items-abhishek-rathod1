//your JS code here. If required.
let colorSet = document.getElementById("colorSelect");
// 
// ddddd
function removeColor(){
	
let selectedIndex = colorSet.selectedIndex;
// console.log(selectedIndex);
	if (selectedIndex !== -1) {
		colorSet.remove(selectedIndex)
		
	}
	colorSet.remove(selectedColor);	
	
}