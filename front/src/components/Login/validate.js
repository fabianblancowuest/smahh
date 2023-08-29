
const validate = (inputs)=>{

    let errors = {}

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*\d).{6,10}$/;

    if(!emailRegex.test(inputs.email)){
        errors.email= "El email ingresado no es válido"
    }

    if(!passwordRegex.test(inputs.password) ){
        errors.password= "La password debe tener entre 6 y 10 caracteres y contener al menos un número"
    }

    return errors
            
}

export default validate