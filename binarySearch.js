const binarySearch = (arr, key) => {
  //sort array
  let newArr = arr.sort((a, b) => a - b);
  console.log(newArr);

  let mid = 0;
  // Setting initial low and high values
  let low = 0;
  let high = newArr.length - 1;
  console.log(low, high);

  //Going over array to see if thesearched term is found
  while (low <= high) {
    //setting mid variable
    mid = Math.floor((low + high) / 2);
    if (key > newArr[mid]) {
      low = mid + 1;
    } else if (key < newArr[mid]) {
      high = mid - 1;
    } else {
      return `${mid} : ${newArr[mid]} Found`;
    }
  }

  return `${-1} NOT FOUND`;
};

console.log(binarySearch([14, 5, 6, 8, 2, 99, 63, 22, 999], 14));
