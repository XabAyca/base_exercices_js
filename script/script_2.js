function factorial(number){
  let result=1;
  if(number === 1 || number === 0)
  return 1;
  else {
    for( count = 1; count <= number; count++)
    {
      result *= count;
    }
  }
  return result;
}

let number = prompt("De quel nombre veux-tu calculer la factorielle ?");
console.log("Le résultat est : "+factorial(number))