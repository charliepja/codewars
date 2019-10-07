function deleteNth(arr,n){
  // ...
  arr.forEach(ar => {
    const filt = arr.filter(a => a === ar);
    if(filt.length > n) {
      for(let r = filt.length; r > n; r--) {
        const ind = arr.lastIndexOf(ar);
        arr.splice(ind, 1);
      }
    }
  });
  
  return arr;
}
