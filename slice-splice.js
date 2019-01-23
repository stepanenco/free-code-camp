
// Use the array methods slice and splice to copy each element of the first array into the second array, in order. Begin inserting elements at index n of the second array. The first array should remain the same after the function runs. The second array should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
  let arr3 = [...arr2];
  arr3.splice(n, 0, ...arr1);
  return arr3;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
