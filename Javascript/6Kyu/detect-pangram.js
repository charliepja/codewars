function isPangram(string){
  if(string.length < 26 || string.match(/[a-zA-Z]/g) === false) return false;
  
  const array = [];
  const regexp = /[a-z]/gi;
  
  for(let i = 0; i < string.length; i++) {
    const letter = string.toLowerCase().charAt(i);
    if(letter.match(regexp)){
       if(!array.includes(letter)){
        array.push(letter);
        }
    }
  }

  if(array.length !== 26) return false;
  
  return true;
  
}
