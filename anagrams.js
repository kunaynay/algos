// function validAnagram(str1, str2) {
//   //check if strings are same length
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   //decalre comparison objects
//   let freqCounter = {};
//   let freqCounter2 = {};
//   for (let char in str1) {
//     freqCounter[char] = (freqCounter[char] || 0) + 1;
//   }
//   for (let char in str2) {
//     freqCounter2[char] = (freqCounter2[char] || 0) + 1;
//   }

//   for (let key in freqCounter) {
//     if (freqCounter[key] !== freqCounter2[key]) {
//       return false;
//     }
//   }

//   return true;
// }

function validAnagram(str1, str2) {
  //check if strings are same length
  if (str1.length !== str2.length) {
    return false;
  }

  const lookup = {};
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

validAnagram("", "");
validAnagram("cinema", "iceman");
validAnagram("aaz", "zaz");
validAnagram("awesome", "awesom");
