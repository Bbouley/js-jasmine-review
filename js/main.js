function largestNumber(arr){
  var largest = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

function fortyOdd(num){
  var numArray = [];
  if(num >= 40){
    for (var i = 40; i <= num; i ++) {
      if(i%2 !== 0){
        numArray.push(i);
      }
    } return numArray;
  } else {
    return num;
  }
}

function evenTo(num){
  var numArray = [];
  for (var i = 0; i <= num; i +=2) {
    numArray.push(i);
  } return numArray;
}

function fortyOdd2(num){
  var numArray = [];
  if(num>=40){
    for (var i = 40; i <= num; i ++) {
      if(i%2 !== 0){
       numArray.push(i);
     }
    }
  } else {
    for (var j = 40; j >= num; j --) {
      if(j%2 !== 0){
        numArray.push(j);
      }
    }
  } return numArray;
}

function sumDigits(num){
  var numString = num.toString();
  var sum = 0;
  var numArray = numString.split('');
  for (var i = 0; i < numArray.length; i++) {
    sum += parseInt(numArray[i]);
  } return sum;
}

function digitsToTen(num){
  var numString = num.toString();
  var numArray = numString.split('');
  var sum = 0;
  var i = 0;
    while(sum < 10 && i<numArray.length){
      if (sum + parseInt(numArray[i])>10){
        return sum;
      } else{
        sum += parseInt(numArray[i]);
        i++;
     }
    } return sum;
}

function smallestDivisible(num1, num2){
  var numArray = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  for (var i = 0; i < numArray.length; i++) {
    if(num1 % numArray[i] === 0 && num2 % numArray[i] ===0){
      return numArray[i];
    }
  } return 'sorry';
}

function leastCommonMultiple(num1, num2){
  for (var i = 1; i < 1000; i++) {
    if (i%num1 === 0 && i%num2 === 0){
      return i;
    }
  }
}

function average(num1, num2){
  var numArray = [];
  var averageOfBoth = (num1+num2)/2;
  numArray.push(averageOfBoth);
  if(num1 > averageOfBoth){
    var deviation = num1 - averageOfBoth;
    numArray.push(deviation);
    return numArray;
  } else if (num2 > averageOfBoth){
    var deviation2 = num2 - averageOfBoth;
    numArray.push(deviation2);
    return numArray;
  }
}

module.exports = {
  largestNumber: largestNumber,
  fortyOdd: fortyOdd,
  evenTo: evenTo,
  fortyOdd2: fortyOdd2,
  sumDigits: sumDigits,
  digitsToTen: digitsToTen,
  smallestDivisible: smallestDivisible,
  leastCommonMultiple: leastCommonMultiple,
  average: average
};
