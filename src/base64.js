
const base64Module = (function () {
    // you can add any code you want within this function scope
    
  
    function base64(input, encode = true, image = false) {
      if(encode===true){
        
          return btoa(`${input}`)
          
      }
      else{
        if(image === false){
            
        let output = atob(input)
        return output
        }
        else{
        let check = input.split('').includes(',')
        if(check){
            check = input.split(',')
            input = check[1]
        }
        input = input.replace(/url\('/g,'').replace(/'\)/g,'') //sanitizing input
        return `<img src="data:image;base64,${input}"/>`
        }
      }
      }
  
  

  
    return {
      base64,
    };
  })();
  
  module.exports = { base64: base64Module.base64 };
  

  