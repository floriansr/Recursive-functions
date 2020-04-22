// Méthode itérative

const computeFactorialIt = (n) => {

	let result = 1;

  	for (let i = 1; i <= n; i++)
    	result = result * i;

  	return result;
}


console.log(computeFactorialIt(5)); // output : 120


// Méthode récursive

const computeFactorialRec = (n) => {
  	if (n === 0) return 1;
  	else return n * computeFactorialRec(n - 1);
}

console.log(computeFactorialRec(5)); // output : 120