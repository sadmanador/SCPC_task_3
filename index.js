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



//problem - 5
function calculate(num1, operator, num2) {
  switch (operator) {
    case '+':
      return console.log(num1 + num2);
    case '-':
      return console.log(num1 - num2);
    case '*':
      return console.log(num1 * num2);
    case '/':
      if (num2 === 0) {
        return console.log("Cannot divide by zero.");
      }
      return console.log(num1 / num2);
    default:
      return console.log("Invalid operator. Please use +, -, *, or /.");
  }
}
calculate(100, "/", 3);



//problem - 6
function generateRandomPassword(length) {
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";

  const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
  }

  return console.log(password);
}

generateRandomPassword(16);




//problem - 7
function romanToInteger(romanNumeral) {
  const romanValues = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
  };

  let integerValue = 0;
  let prevValue = 0;

  for (let i = romanNumeral.length - 1; i >= 0; i--) {
    const currentSymbol = romanNumeral[i];
    const currentValue = romanValues[currentSymbol];

    if (currentValue < prevValue) {
      integerValue -= currentValue;
    } else {
      integerValue += currentValue;
    }

    prevValue = currentValue;
  }

  return console.log(integerValue);
}

romanToInteger("IXX")
