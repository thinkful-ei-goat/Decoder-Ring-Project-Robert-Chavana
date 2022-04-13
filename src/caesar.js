// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  function caesar(input, shift, encode = true) {// the heart of the function
    if(!shift||!typeof encode==='boolean'||shift<-25||shift>25){return false}//check input
    let list = input.toLowerCase().split('')
    let output = []
    if(encode===false){shift = 0-shift}//reverses shift direction for decoding
    for(let i=0;i<list.length;i++){
      if(!alphabet.includes(list[i])){output.push(list[i])}//ignores nonalphabetic characters
      else{
        let thisLetter = alphabet[getShiftedIndex(getIndex(list[i]),shift)]//gets index of character, shifts that index, returns shifted index
        output.push(thisLetter)
      }
    }
    return(output.join(''))
  
  }
  function getShiftedIndex(index,shift,thisValue=(index+shift)){//gets altered location of character
    if(thisValue<=25&&thisValue>=0){return thisValue}
    if(thisValue>25){return((thisValue)-26)}
    if(thisValue<0){return((thisValue)+26)}//added to handle negatives and wrap around leftwards


  }
  function getIndex(letter){
    for(let i=0;i<alphabet.length;i++){
      if(alphabet[i]===letter){return i}//get location in alphabet of character
    }
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
