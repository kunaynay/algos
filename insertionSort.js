function insertionSort(arr) {
  let j;
  for (let i = 1; i < arr.length; i++) {
    let insert = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > insert; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = insert;
  }

  return arr;
}

insertionSort([2, 1, 9, 76, 4, 3]);

// ins = 1, arr[j] = 2, arr = 2,2,9,76,4,  array = 1,2,9,76,4
// ins = 9, arr[j] = 2, arr = 1,2,9,76,4,  array = 1,2,9,76,4
// ins = 76, arr[j] = 9, arr = 1,2,9,76,4,  array = 1,2,9,76,4
// ins = 4, arr[j] = 76, arr = 1,2,9,9,76,  array = 1,2,4,9,76
// inr = 3, arr[j] = 76, arr = 1,2,4,4,9,76,  array = 1,2,3,4,9,76
