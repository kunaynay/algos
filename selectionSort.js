const selectionSort = arr => {
  // let noSwaps;
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    // noSwaps = true;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
};

console.log(selectionSort([34, 22, 10, 19, 17]));
