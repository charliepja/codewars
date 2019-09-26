function rowSumOddNumbers(n) {
	// TODO
   const start = ((n - 1) * n) + 1;
   const end = start + ((2 * n) - 1);
   let total = 0;
   for(let i = start; i < end; i++) {
     if(i % 2 === 0) {
       continue;
      }
      else {
        const newTotal = total + i;
        total = newTotal;
    }
  }
  return total;
}
