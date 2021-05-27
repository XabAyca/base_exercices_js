ARN = prompt("Quel est l'ARN que tu souhaites transfomer en protéines ?")

/*create codons*/

codonsArray = ARN.match(/.{1,3}/g);

function  whatProtein(codon){
  switch (codon){
    case "UCU": case "UCC": case "UCA": case "UCG": case "AGU": case "AGC" :
			return "Sérine";
		case "CCU": case "CCC": case "CCA": case "CCG" :
			return "Proline";
		case "UUA": case "UUG": case "CUU": case "CUC": case "CUA": case "CUG" :
			return "Leucine";
		case "UUU": case "UUC" :
			return "Phénylalanine";
		case "CGU": case "CGC": case "CGA": case "CGG": case "AGA": case "AGG" :
			return "Arginine";
		case "UAU": case "UAC" :
			return "Tyrosine";
		case "AUU": case "AUC": case "AUA":
			return "Isoleucine";
    default:
		  console.log("Unknown Codon");
		  break;
  }
}

let result = []
for(let index in codonsArray){
result.push(whatProtein(codonsArray[index]))
}
console.log(result.join('-'))