function isSameType(value1, value2) {
  // Convert input strings to numbers if applicable
  const numValue1 = isNaN(Number(value1)) ? value1 : Number(value1);
  const numValue2 = isNaN(Number(value2)) ? value2 : Number(value2);

  // Check if both values are NaN
  if (isNaN(numValue1) && isNaN(numValue2)) {
    return true;
  }

  // Check if the types of both values are the same 
  return typeof numValue1 === typeof numValue2;
}

// do not change the code below.
let value1 = prompt("Enter First Value:");
let value2 = prompt("Enter Second Value:");
alert(isSameType(value1, value2));
