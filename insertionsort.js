let unsortedList = [3, 1, 8, 5, 4, 7, 2];

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    //a temporary value gap
    let tempValue = array[i];
    //position will always start from i - 1 because value to the left will keep sorting.
    let position = i - 1;

    while (position >= 0) {
      if (array[position] > tempValue) {
        array[position + 1] = array[position];
        console.log(array);
        position--;
      } else {
        //if we encounter a value that is greater or equal to the temp value, then we can move on to the next
        //loop.
        break;
      }
    }
    array[position + 1] = tempValue;
  }
  return array;
};

console.log(insertionSort(unsortedList));

/* 
  With an array,
  1. create a temporary gap in index 1,
  2. compare the value that is immediately to the left.
    if (the value to the left is bigger than the value that was in the temporary)
    swap that.
  3. do this until the index reaches 0.
*/
