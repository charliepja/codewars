function duplicateCount(text){
  let count = 0;
  let words = text.toLowerCase().split('');
  const ignore = [];
  
  for(const w in words) {
    if(words.lastIndexOf(words[w]) > w) {
      if(ignore.includes(words[w])) continue;
      count++;
      ignore.push(words[w]);
    }
  }
  return count;
}
