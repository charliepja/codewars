function findOdd(A) {
  for(let i = 0; i < A.length; i++) {
    if(A.filter(a => a === A[i]).length % 2 === 1) return A[i];
  }
}
