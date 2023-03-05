let unsortedList = [3, 1, 8, 5, 4, 7, 2];

function selectionSort(array) {
	for (let i = 0; i < array.length - 1; i++) {
		let lowestNumberIndex = i;
		for (let j = i + 1; j < array.length; j++) {
      //comparison 1
			if(array[j] < array[lowestNumberIndex]) {
			lowestNumberIndex = j;	
			} 
		}
		//second comparison
		if(lowestNumberIndex !== i) {
			let temp = array[i];
			array[i] = array[lowestNumberIndex];
			array[lowestNumberIndex] = temp;
		}
	}
	return array;
}

console.log(selectionSort(unsortedList));