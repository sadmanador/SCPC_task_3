//problem - 1
function strReverse(str) {
  let reversedStr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr.push(str[i]);
  }
  const result = reversedStr.join("");
  console.log(result)
}
strReverse("hello world");

//problem - 2
function 