let unsortedList = [3, 1, 8, 5, 4, 7, 2];
const insertionSort = (arr) => {
  let temp = 0;
  for (let i = 1; i < arr.length; i++) {
    temp = arr[i];
    if (arr[i - 1] > temp) {
      arr[i] = temp;
      arr[i - 1] = [i];
    }
  }
  return arr;
};

console.log(insertionSort(unsortedList));
