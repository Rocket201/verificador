
const verificacion = () => {
    const password = document.getElementById("password").value;

    if (password.length < 8) {

      
      document.getElementById("span").textContent= " La contraseña es poco segura, debe cambiarla. "
      return;
    }
  
    const tieneMayusculas = password.match(/[A-Z]/);

    if (tieneMayusculas) {

      document.getElementById("span").textContent= "Contraseña añadida"

    } else {

      
      document.getElementById("span").textContent= "Debe de contener mayúsculas"
    }

    const tieneNumeros = password.match(/[0-9]/);

    if(tieneNumeros){
       
    }
    
    else{
    document.getElementById("span").textContent= "Debe de contener al menos un número"
    }

  };

