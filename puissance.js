// Méthode itérative

const computePowerIt = (n, p) => {

  let result = n;

  for (let i = 1; i < p; i++)
    
  result = result * n;

    return result;
}

console.log(computePowerIt(10, 3));



// Méthode récursive

const computePowerIt = (n, p) => {
  	if (p < 0 || n <= 0) return 0;
  	else if (p === 0) return 1;
  	else return n * computePowerIt(n, p-1);
}

console.log(computePowerIt(5, 2)); // output : 25