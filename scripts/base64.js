function base64Renderer() {
    const form = document.querySelector("#base64");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const input = event.target["base64-input"].value;
      const direction = event.target["base64-options"].value;
      let result

      switch (direction) {
          case 'encode':
              result = base64Module.base64(input)
              break;
          case 'decode':
              result = base64Module.base64(input, false);
              break
          case 'decode_image':
              result = result = base64Module.base64(input, false, true);
              break
          default:
              break;
      }
  
      const alert = document.querySelector("#base64-alert");
      if (result) {
        alert.classList.add("d-none");
        const output = document.querySelector("#base64-output");
        output.innerHTML = result;
      } else {
        alert.classList.remove("d-none");
      }
    });
  }
  
  document.addEventListener("DOMContentLoaded", base64Renderer);