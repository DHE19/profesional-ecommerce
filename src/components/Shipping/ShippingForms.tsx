import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { DetailsForm } from "../../../utils/DetailsFormStructure";

interface IProps{
    submitHandler(data:IShippingDetails):void;
    shippingDetails: IShippingDetails;
}


const ShippingForms:React.FC<IProps> = ({submitHandler,shippingDetails}) => {

    const {handleSubmit, register, formState:{errors}, setValue} = useForm<IShippingDetails>();
    
    useEffect(() => {
        DetailsForm.forEach(i => {
            const muck = {} as IShippingDetails;
            let key = i.key as keyof typeof muck;
            setValue(key,shippingDetails[key]);
        })
    },[shippingDetails,setValue]);

    return (
            <form className="mx-auto max-w-screen-md rounded-lg shadow-lg p-4 bg-slate-100 my-4"
             onSubmit={handleSubmit(submitHandler)}>
                {

                    DetailsForm.map((i,index) => {
                        const muck = {} as IShippingDetails;
                        let key = i.key as keyof typeof muck;

                        return(
                            <div className="mb-4" key={index}>
                                <label htmlFor={i.key} className="text-lg font-semibold text-slate-800">
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
                    <button type="submit" className="button-payment-process float-right">
                        Next
                    </button>
                </div>
            </form>
    )
}

export default ShippingForms
