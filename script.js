
let module = [];

function addNumber (arr, num) {
  if (typeof(num) === 'number') return arr.push(num);
}

function removeNumber (arr, num) {
   return arr.pop(num);
}

function hasNumber (arr, num) {
  let resault = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
    if(arr[i] == num) {
      return resault = arr[i]  +' has matches';
    } else {
        resault = num + ' no matches';
    }
  }
  return resault;
}

function sumNumber (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function sumModule (arr, module) {
  let moduleSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] == module) moduleSum += arr[i];
  }
  return moduleSum;
}

function hasPositiveNumber (arr) {
  let answer;
  for (let i = 0; i < arr.length; i++) {
    let resault = Math.sign(arr[i]);
      if (resault == -1) return answer = 'has negative number';
      else (answer = 'no negative number');
  }
  return answer;
}

function evenNumbers (arr) {
  let numbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) numbers += arr[i];
  }
  return numbers.split('');
}

function numMultiplication (arr, param) {
  let mult = [];
  for (let i = 0; i < arr.length; i++) {
    mult += arr[i] * param + ' ';
  }
  return mult;
}

console.log(module);
console.log(addNumber(module, -1), 'addNumber');
console.log(addNumber(module, 5), 'addNumber');
console.log(addNumber(module, 5), 'addNumber');
console.log(addNumber(module, 4), 'addNumber');
console.log(addNumber(module, 2), 'addNumber');
console.log(removeNumber(module, 1), 'removeNumber');
console.log(hasNumber(module, -5), 'hasNumber');
console.log(sumNumber(module, 1), 'sumNumber');
console.log(sumModule(module, 5), 'sumModule');
console.log(hasPositiveNumber(module), 'hasPositiveNumber');
console.log(evenNumbers(module), 'evenNumbers');
console.log(numMultiplication(module, 2), 'numMultiplication');
console.log(module,'module');
