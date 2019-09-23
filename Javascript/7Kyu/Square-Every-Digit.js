function squareDigits(num){
  //may the code be with you
  if(!Number.isInteger(num)) return;
  
  const numlist = num.toString();
  const numArray = [];
  for(let i = 0; i < numlist.length; i++) {
    const singleNumber = numlist.charAt(i);
    const intNumber = parseInt(singleNumber);
    if(!Number.isInteger(intNumber)) continue;
    const newNumber = intNumber * intNumber;
    const stringNumber = newNumber.toString();
    numArray.push(stringNumber);
  }
  const stringNumber = numArray.join('');
  const longNumber = parseInt(stringNumber);
  if(!Number.isInteger(longNumber)) return;
  console.log(longNumber);
  return longNumber;
  
}
