function count (string) {  
  // The function code should be here
  var stringArray = string.slice(" ");
  //creates an array of the string, e.g. "hello" -> "h" "e" "l" "l" "o"
  var length = {};
  //creates an output array
  for (var i = 0; i < stringArray.length; i++){
    //creates a for loop
    var char = stringArray[i];
    if(length[char]){
      length[char] ++;
    } else {
      length[char] = 1;
    }
  }
   return length;
}
