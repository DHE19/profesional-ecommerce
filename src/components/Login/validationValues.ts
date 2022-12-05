
export interface FormValues  {
    email:string;
    password:string;
}

export interface FormRegisterValues extends FormValues  {
    firstName:string
}



 const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i
 const regexNombre = /^[A-Za-z]+(((\'|\-|\.)?([A-Za-z])+))?$/

export const emailOptions = {
    required:'Ingresa un correo',
    pattern:
        {
            value: regexEmail,
            message:'bro ese email esta piraña'
        }
    }
export const passwordOptions = {
        required:'ingresa una contraseña',
        minLength:{value:6, message: 'la contraseña debe de tenre al menos 6 caracteres'}
    }
export const nameOptions = {
        required:'ingresa tu nombre',
        pattern:
        {
            value: regexNombre,
            message:'bro ese nombre esta piraña'
        }
    }