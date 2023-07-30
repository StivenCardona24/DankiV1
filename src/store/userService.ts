import { ref } from "vue";


const users = ref([
    {
        "email":"admin@danki.com",
        "password":"1234"
    }

])


  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const login =  (user: any) => {
    let ward = false
    if( !(user.email && user.password) ){
        alert("Ingrese los datos")
        return ward;
    }

    users.value.forEach((u: any) => {
        if(user.email == u.email && user.password == u.password){
            alert("Bienvenido");
            ward = true
            
            return;
        }
    })

    if(!ward){
        alert("Datos incorrectos")
    }    
    return ward;
  };
  

  export const register = (user: any) => {
    if(user.name && user.lastName &&  user.password && user.birthday && user.email){
        users.value.push(user);
        alert("Guardado")
        return;
    }

    alert("Ingrese los datos");


  }