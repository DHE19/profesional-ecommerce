import {useForm,Resolver, SubmitHandler } from 'react-hook-form'
import  { useRouter } from "next/router"

type FormValues = {
    email:string;
    password:string;
}


const regexEmail = /^[a-zA-Z0-0_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i

const emailOptions = {
    required:'Ingresa un correo',
    pattern:
        {
            value: regexEmail,
            message:'bro ese email esta piraña'
        }
    }
const passwordOptions = {
        required:'ingresa una contraseña',
        minLength:{value:6, message: 'la contraseña debe de tenre al menos 6 caracteres'}
    }
  

const LoginForm = () => {

    const { handleSubmit,register,formState:{errors}} = useForm<FormValues>();
    const router = useRouter();
    
    const submitHandler:SubmitHandler<FormValues> = (data) =>{
        console.log(data);
        
    }
    return (
            <div className="h-full w-full px-3">
                <h1 className=" font-bold text-5xl text-center text-slate-800 mb-2">Login</h1>
                <form 
                onSubmit={handleSubmit(submitHandler)}
                className="flex flex-col gap-4 text-slate-800">
                    <div className="w-full">
                        <label className="block font-semibold text-lg">Email:</label>
                        <input
                        {...register('email',emailOptions)}
                        className=" font-light w-full rounded-md px-2 py-2 focus:outline-sky-300 bg-slate-200"
                        type="email" placeholder="email" id='email' />
                        {errors?.email ? <p className='text-sm text-blue-800'>{errors.email.message}</p> : null}
                    </div>
                    <div className="font-light w-full">
                        <label className="block font-semibold text-lg" >Password</label>
                        <input
                          {...register('password',passwordOptions)}
                        className="w-full rounded-md px-2 py-2 focus:outline-sky-300 bg-slate-200"
                        type="password" placeholder="password" id='password' />
                        {errors?.password ? <p className='text-sm text-blue-800'>{errors.password.message}</p> : null}
                    </div>

                    <button className=" bg-sky-500 rounded-md shadow-md text-white py-3 mt-4"
                    onClick={() => router.push('login?redirect=/shipping')}
                    >Login</button>
                </form>
            </div>
    )
}

export default LoginForm
