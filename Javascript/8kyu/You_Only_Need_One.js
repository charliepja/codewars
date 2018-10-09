function check(a,x){
// Since a & x will always be the same type there is no need to convert to string
  var contain = a.indexOf(x);
//indexOf is used to return the position of x in a, and if not present will return a -1 value
  console.log(contain);
//logs the position of x in a on the console  
  if (contain > -1){
    return true;
  } else {
    return false;
  }
//if contain return a value higher than -1 then return true as a contains x
//else return false as a != contain x
};
