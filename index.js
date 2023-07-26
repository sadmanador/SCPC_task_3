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
  const sum = positiveArr.reduce((previous, current) => previous + current, 0);
  console.log(sum);
}
positiveSum([2, -5, 10, -3, 7]);

//problem - 3
function findMostFrequentElement(arr) {
  const frequencyMap = arr.reduce((map, element) => {
    map.set(element, (map.get(element) || 0) + 1);
    return map;
  }, new Map());

  let mostFrequentElement;
  let maxFrequency = 0;

  frequencyMap.forEach((frequency, element) => {
    if (frequency > maxFrequency) {
      mostFrequentElement = element;
      maxFrequency = frequency;
    }
  });

  return console.log(mostFrequentElement);
}
findMostFrequentElement([3, 5, 2, 5, 3, 3, 1, 4, 5]);

//problem - 4
function findTwoIndices(arr, target) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const sum = arr[i] + arr[j];
      if (sum === target) {
        console.log("indices",i, j);
      }
    }
  }
  return
}

findTwoIndices([1, 3, 6, 8, 11, 15], 9);
