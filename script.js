function isSameType(value1, value2) {
  const isValue1NaN = isNaN(value1);
  const isValue2NaN = isNaN(value2);

  // Check if both values are NaN or non-numeric strings
  if ((isValue1NaN && isValue2NaN) || (isValue1NaN !== isValue2NaN)) {
    return true;
  }

  // Check if both values are of the same non-numeric type
  if ((typeof value1 !== 'number' && typeof value2 !== 'number') &&
      (typeof value1 === typeof value2)) {
    return true;
  }

  return false; // Return false if none of the conditions are met
}

// do not change the code below.
let value1 = prompt("Enter First Value:");
let value2 = prompt("Enter Second Value:");
alert(isSameType(value1, value2));
