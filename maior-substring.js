/*
Desafio
Encontre a maior substring comum entre as duas strings informadas. A substring pode ser qualquer parte da string, inclusive ela toda. Se não houver subseqüência comum, a saída deve ser “0”. A comparação é case sensitive ('x' != 'X').
*/

let firstString = "";
let secondString = "";

while(firstString = gets()) {
  secondString = gets()
  
  let sizeLongestSubstring = 0;
  
  for(let i = 0; i <= firstString.length; i++) {
    for(let j = 0; j <= firstString.length; j++) {
      const substring = firstString.substr(i, j);
      
      if(secondString.includes(substring) && substring.length > sizeLongestSubstring) {
        sizeLongestSubstring = substring.length;
      }
    }
  }
  
  console.log(sizeLongestSubstring);
}
