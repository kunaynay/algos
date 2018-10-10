function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let unique = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[unique] !== arr[i]) {
      unique++;
      arr[unique] = arr[i];
    }
  }
  return unique + 1;
}
