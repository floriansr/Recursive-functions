const computeSquareRoot = (n) => {

    if (!Number.isInteger(n) || n <= 0) return 0   
    else return (calculateSquareRoot(n, n))
};

  const calculateSquareRoot = (n,p) => {

  if (n / p  === p) return p
  if (p < 1) return 0

  else return (calculateSquareRoot(n, p-1))
  };
  
console.log(computeSquareRoot(900));