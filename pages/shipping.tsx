import { SubmitHandler, useForm } from "react-hook-form";
import Layout from "../src/components/MainComponents/Layout"
import CheckoutWizard from "../src/components/Shipping/CheckoutWizard"
import {  useDispatch, useSelector } from 'react-redux'
import { saveShippingDetails } from "../redux/shippingReducers";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import { useRouter } from "next/router";


const formDetails = [
    {
        key: 'fullName',
        title: 'Nombre:',
        options:{required: 'Porfavor ingresa tu nombre'},
        placeholder:'Ej: Eduardo'
    },
    {
        key: 'address',
        title: 'Dirección:',
        options:{required: 'Porfavor ingresa tu dirección'},
        placeholder:'Ej: Romero #123, col. Benito Juarez'
    },
    {
        key: 'country',
        title: 'País:',
        options:{required: 'Porfavor ingresa tu país'},
        placeholder:'Ej: México'
    },
    {
        key: 'state',
        title: 'Estado:',
        options:{required: 'Porfavor ingresa tu estado donde radicas'},
        placeholder:'Ej: Yucatán'
    }, {
        key: 'city',
        title: 'Ciudad:',
        options:{required: 'Porfavor ingresa tu Ciudad'},
        placeholder:'Ej: Nezahualcoyótl'
    },
    {
        key: 'postalCode',
        title: 'Código postal:',
        options:{required: 'Porfavor ingresa tu Codigo postal'},
        placeholder:'Ej: 43124'
    }

]

const Shipping = () => {
    
    const {handleSubmit, register, formState:{errors}, setValue, getValues} = useForm<IShippingDetails>();
    const dispatch = useDispatch();
    const router = useRouter();
    const shippingDetails = useSelector((state: RootState) => state.shipping.shippingDetails);
    const submitHandler:SubmitHandler<IShippingDetails> = (Userdetails) => {
     dispatch(saveShippingDetails(Userdetails));
     router.push('/payment')
    }


    useEffect(() => {
        formDetails.forEach(i => {
            const muck = {} as IShippingDetails;
            let key = i.key as keyof typeof muck;
            setValue(key,shippingDetails[key]);
        })
    },[shippingDetails,setValue])
    return (
        <div>
            <Layout title="Shipping adress">
                <CheckoutWizard activeStep={1}/>
                    <form className="mx-auto max-w-screen-md"
                    onSubmit={handleSubmit(submitHandler)}
                    >
                    
                    <h1 className="mb-4 text-xl">Shipping Address</h1>
                    {

                        formDetails.map((i,index) => {
                            const muck = {} as IShippingDetails;
                            let key = i.key as keyof typeof muck;

                            return(
                                <div className="mb-4" key={index}>
                                    <label htmlFor={i.key} className="text-lg">
                                        {i.title}
                                    </label>
                                    <input type="text" className="input-shipping"
                                    id={i.key}
                                    autoFocus placeholder={i.placeholder}
                                    {...register(key,i.options)}/>

                                    {errors[key] && (<span className="text-red-500 block">{errors[key]?.message}</span>)}
                                </div>
                            )

                        })
                    }
                    <div className="h-12">
                        <button
                        type="submit"
                        className=" px-6 py-2 bg-sky-500 rounded-lg float-right">
                                Next
                        </button>
                    </div>
                </form>
            </Layout>
        </div>
    )
}

export default Shipping

Shipping.auth = true;

