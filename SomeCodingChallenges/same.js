//FREQUENCY COUNTER
//write a function called same which accepts 2 arrays and returns true if every value in the array has its squared value in other
//same([1,2,3],[4,1,9]) => true

//iterative solution
//complexity O(n2)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let index = arr2.indexOf(arr1[i] ** 2);
    console.log('index', index);
    if (index === -1) {
      return false;
    }
    arr2.splice(index, 1);
    console.log('array', arr2);
  }
  return true;
}

//console.log(same([1, 2, 3, 4], [9, 1, 4, 7]));

//Frequency counter solution
//complexity O(n)
function same1(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencycounter1 = {};
  let frequencycounter2 = {};
  //iterate over first array and construct an object
  for (let val in arr1) {
    frequencycounter1[arr1[val]] = (frequencycounter1[arr1[val]] || 0) + 1;
  }
  //iterate over second array and construct object
  for (let val in arr2) {
    frequencycounter2[arr2[val]] = (frequencycounter2[arr2[val]] || 0) + 1;
  }
  console.log(frequencycounter1);
  console.log(frequencycounter2);
  for (let key in frequencycounter1) {
    if (!(key ** 2 in frequencycounter2)) {
      return false;
    }
    if (frequencycounter2[key ** 2] !== frequencycounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same1([1, 2, 3, 1], [1, 2, 4, 4]));
