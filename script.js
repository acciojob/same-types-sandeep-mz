function isSameType(value1, value2) {
  // Check if both values are NaN or non-numeric strings
  if ((isNaN(value1) && isNaN(value2)) || (typeof value1 !== 'number' && typeof value2 !== 'number')) {
    return true;
  }

  // Check if the types of both values are the same 
  return typeof value1 === typeof value2;
}

// do not change the code below.
let value1 = prompt("Enter First Value:");
let value2 = prompt("Enter Second Value:");
alert(isSameType(value1, value2));
