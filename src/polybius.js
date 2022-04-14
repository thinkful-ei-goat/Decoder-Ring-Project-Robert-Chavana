// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  // turn grid into array/object, whichever is easier for decode and encode, maybe even both
  const grid = {a:11,b:21,c:31,d:41,e:51,f:12,g:22,h:32,i:42,j:42,k:52,l:13,m:23,n:33,o:43,p:53,q:14,r:24,s:34,t:44,u:54,v:15,w:25,x:35,y:45,z:55}
  const alphabet = Object.keys(grid)
  const nums = ['0','1','2','3','4','5','6','7','8','9'] // easy cheater way to ignore punctuation on decode
  function polybius(input, encode = true) {
    if(encode===true){
    let list = input.toLowerCase().split("")
    let output = []
    for(let i=0;i<list.length;i++){
      if(!alphabet.includes(list[i])){output.push(list[i])}
      else{
        output.push(encodeLetter(list[i]))
      }
    }
    return output.join('')
  }
    else{
      let symbolCount = input.split(" ").join("").length
      if(symbolCount%2>0){return false}
      let list = input.split('')
      let output = []
      for(let i=0;i<list.length-1;i++){
        if(!nums.includes(list[i])){output.push(list[i])}
        else{
          let num = decodeLetter(Number(`${list[i]}${list[i+1]}`))
          output.push(num)
          i++
        }
      }
      return output.join('')
    }
  }
  function encodeLetter(str){
    //returns number from grid object
    return grid[str]
  }
  function decodeLetter(num){
    if(!(Object.values(grid)).includes(num)){throw `OUT OF BOUNDS! ${num} is not referenced in the grid object! Please check to make sure your code was typed in properly!`}
    if(num===42){return '(i/j)'}
    for(let i=0;i<alphabet.length;i++){
      if(grid[alphabet[i]]===num){return alphabet[i]}
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
