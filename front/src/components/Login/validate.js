
const validate = (inputs)=>{

    let errors = {}

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    

    if(!emailRegex.test(inputs.email)){
        errors.email= "El email ingresado no es válido"
    }

    return errors
            
}

export default validate