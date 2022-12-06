import {useForm, SubmitHandler } from 'react-hook-form'
import  { useRouter } from "next/router"
import { emailOptions, FormValues, passwordOptions } from './validationValues';
import {signIn, useSession} from 'next-auth/react';
import { toast } from 'react-toastify';
import { useEffect } from 'react';


  

const LoginForm = () => {
    const {data:session} = useSession();

    const { handleSubmit,register,formState:{errors}} = useForm<FormValues>();
    const router = useRouter();
    const {redirect} = router.query;

    useEffect(()=>{
        if(session?.user){
            //TODO:
            //checar como usar redirect en push please!!!!!!!!!
            router.push('/');
        }
    },[router,session,redirect])
    
    const submitHandler:SubmitHandler<FormValues> = async ({email,password}) =>{
        try {
            const result = await signIn('credentials',{
                redirect: false,
                email,
                password,
            });
            if(result?.error){
                toast.error(result.error);
            }
            toast.success('LoggedIn')
        } catch (error) {
            toast.error('hubo un error fatal')
        }
        
    }
    return (
            <div className="h-full w-full px-3">
                <h1 className=" font-bold text-5xl text-center text-slate-600 mb-2">Login</h1>
                <form 
                onSubmit={handleSubmit(submitHandler)}
                className="flex flex-col gap-4 text-slate-600">
                    <div className="w-full font-light">
                        <label className="block font-semibold text-lg">Email:</label>
                        <input
                        key={'LoginEmail'}
                        {...register('email',emailOptions)}
                        className="  w-full rounded-md px-2 py-2 focus:outline-sky-300 bg-slate-200"
                        type="email" placeholder="email" id='email' />
                        {errors?.email ? <p className='text-sm text-red-500'>{errors.email.message}</p> : null}
                    </div>
                    <div className="font-light w-full">
                        <label className="block font-semibold text-lg" >Password</label>
                        <input
                        key={'LoginPassword'}
                          {...register('password',passwordOptions)}
                        className="w-full rounded-md px-2 py-2 focus:outline-sky-300 bg-slate-200"
                        type="password" placeholder="password" id='password' />
                        {errors?.password ? <p className='text-sm text-red-500'>{errors.password.message}</p> : null}
                    </div>

                    <button className=" bg-sky-500 hover:bg-sky-400 rounded-md shadow-md text-white py-3 mt-4"
                    onClick={() => router.push('login?redirect=/shipping')}>
                        Login
                    </button>
                </form>
            </div>
    )
}

export default LoginForm
