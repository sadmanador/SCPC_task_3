//problem - 1
function strReverse(str) {
  let reversedStr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr.push(str[i]);
  }
  const result = reversedStr.join("");
  console.log(result);
}
strReverse("hello world");

//problem - 2
function positiveSum(arr) {
  const positiveArr = arr.filter((item) => item >= 0);
  const sum = positiveArr.reduce((previous, current)=> previous + current, 0)
  console.log(sum);
}
positiveSum([2, -5, 10, -3, 7] )