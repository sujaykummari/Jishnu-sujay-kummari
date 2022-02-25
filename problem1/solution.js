// first i will take the numbers from array of 4 outputs (fibo,odd,prime,rand)
// now i will push them in to an single array
let primes = [2,3,5,7,11,13];
let fibo = [1,1,2,3,5,8,13,21];
let odd = [1,3,5,7,9,11,13,15,17,19,21,23];
let rand=[5,17,3,19,76,24,1,5,10,34,8,27,7];
let solution=[];
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

solution.sort(function(a, b) {
  return a - b;
});

for(let i=0;i<solution.length;i++)
{
    console.log(solution[i]);
}