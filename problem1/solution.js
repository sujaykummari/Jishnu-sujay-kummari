// first i will take the numbers from array of 4 outputs (fibo,odd,prime,rand)
// now i will push them in to an single array

//Here i hardcoded the inputs
let primes = [2,3,5,7,11,13];
let fibo = [1,1,2,3,5,8,13,21];
let odd = [1,3,5,7,9,11,13,15,17,19,21,23];
let rand=[5,17,3,19,76,24,1,5,10,34,8,27,7];

// Now i have created an empty array
let solution=[];

//I have iterated through the 4 haredcoded arrays and first checked if the array is empty or not if not i pushed the values into the array
//i created as solutions which is empty  
for(let i=0;i<primes.length;i++){
  if(solution.indexOf(primes[i]) == -1)
     solution.push(primes[i])
}
for(let i=0;i<fibo.length;i++){
  if(solution.indexOf(fibo[i]) == -1)
     solution.push(fibo[i])
}
for(let i=0;i<odd.length;i++){
    if(solution.indexOf(odd[i]) == -1)
       solution.push(odd[i])
}
  for(let i=0;i<rand.length;i++){
    if(solution.indexOf(rand[i]) == -1)
       solution.push(rand[i])
}

// here i used the sort function to sort the numbers in solutions array
solution.sort(function(a, b) {
  return a - b;
});

//here i printed the out put
for(let i=0;i<solution.length;i++)
{
    console.log(solution[i]);
}