function isValidWalk(walk) {
  console.log(walk);
  var length = {};
//variable to hold the count of each instance in the array
  for(var i = 0; i < walk.length; i++){
      var char = walk[i];
      if (length[char]){
        length[char]++;
      } else {
        length[char] = 1;
      }
  }
//for loop that runs the length of the string
//Adds 1 every time a character repeats
  if ((walk.length === 10) && (length.n - length.s === 0 && length.w - length.e === 0) || (length.w - length.e === 0 && length.w === 5 && length.e === 5) || (length.n - length.s === 0 && length.n === 5 && length.s === 5)){
    return true;
  } else {
    return false;
  }
//if string = 10 & n-s=0 & w-e=0 OR if string = 10 & w-e = 0 & w=5 & e=5 OR if string = 10 & n-s=0 & n=5 & s=5 return true
//else return false
}
