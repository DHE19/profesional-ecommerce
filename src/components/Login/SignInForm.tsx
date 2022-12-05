import { useRouter } from "next/router"
import {useForm, SubmitHandler } from 'react-hook-form'
import { emailOptions, FormRegisterValues, nameOptions, passwordOptions } from "./validationValues";

const SignInForm = () => {
    const { handleSubmit,register,formState:{errors}} = useForm<FormRegisterValues>();
    const router = useRouter();
    
    const submitHandler:SubmitHandler<FormRegisterValues> = (data) =>{
        console.log(data);
        
    }
    return (
        <div className="h-full w-full px-3">
        <h1 className=" font-bold text-5xl text-center mb-2 text-slate-600">Sign In</h1>
        <form onSubmit={handleSubmit(submitHandler)}
                className="flex flex-col gap-4 text-slate-600">
            <div className=" font-light w-full">
                <label className="block font-semibold text-lg">Nombre:</label>
                <input
                {...register('firstName', nameOptions)}
                className= " w-full rounded-md px-2 py-2 focus:outline-sky-300 bg-slate-200"
                type="text" placeholder="Nombre" />
                {errors?.firstName ? <p className='text-sm text-red-500'>{errors.firstName.message}</p> : null}
            </div>
            <div className="w-full font-light">
                <label className="block font-semibold text-lg">Email:</label>
                <input
                {...register('email',emailOptions)}
                className="  w-full rounded-md px-2 py-2 focus:outline-sky-300 bg-slate-200"
                type="email" placeholder="email"/>
                {errors?.email ? <p className='text-sm text-red-500'>{errors.email.message}</p> : null}
            </div>
            <div className="font-light w-full">
                <label className="block font-semibold text-lg" >Password</label>
                <input
                    {...register('password',passwordOptions)}
                className="w-full rounded-md px-2 py-2 focus:outline-sky-300 bg-slate-200"
                type="password" placeholder="password"/>
                {errors?.password ? <p className='text-sm text-red-500'>{errors.password.message}</p> : null}
            </div>

            <button 
            onClick={() => router.push('login?redirect=/shipping')}
            className=" bg-sky-500 hover:bg-sky-400 rounded-md shadow-md text-white py-3 mt-4">Register</button>
        </form>
    </div>
    )
}

export default SignInForm
