let unsortedList = [3, 1, 8, 5, 4, 7, 2];

//Bubble Sort
const bubbleSort = (arr) => {
  let lastIndex = arr.length - 1;
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < lastIndex; i++) {
      let left = arr[i];
      let right = arr[i + 1];
      if (left > right) {
        arr[i] = right;
        arr[i + 1] = left;
        sorted = false;
      }
    }
    lastIndex -= 1;
  }
  return arr;
};

console.log(bubbleSort(unsortedList));
