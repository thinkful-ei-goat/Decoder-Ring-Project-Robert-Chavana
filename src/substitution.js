// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const originalAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

  function substitution(input, alphabet, encode = true) {
    if(!alphabet||alphabet.length!==26){return false}
    //checking all alphabet characters are unique
    let temp = []
    for(let i=0;i<alphabet.length;i++){
      if(temp.includes(alphabet[i])){return false}
      else{temp.push(alphabet[i])}
    }


    let list = input.toLowerCase().split('')
    if(encode===true){
      let output = []
      for(let i=0;i<list.length;i++){
      if(!originalAlphabet.includes(list[i])){output.push(list[i])}
      else{
        output.push(encodeLetter(list[i]))
      }
    }
    return output.join('')
    }else{
      let output = []
      for(let i=0;i<list.length;i++){
      if(!alphabet.includes(list[i])){output.push(list[i])}
      else{
        output.push(decodeLetter(list[i]))
      }
    }
    return output.join('')
    }


    function encodeLetter(str){
      for(let i = 0;i<originalAlphabet.length;i++){
        if(originalAlphabet[i]===str){return alphabet[i]}
      }
    }
  
    function decodeLetter(str){
      for(let i = 0;i<alphabet.length;i++){
        if(alphabet[i]===str){return originalAlphabet[i]}
      }  
    }
  }



  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
