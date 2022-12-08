import { FormEvent, useEffect, useState } from "react";
import { paymentMethodInfo } from "../../../utils/DetailsFormPayment";

interface Iprops {
    dispatch(p:PaymentMethod):void;
    paymentSelected: PaymentMethod;
    address:string;
    previousStep():void;
}

let defualtValue: PaymentMethod = 'No-Selected';

const FormPayment:React.FC<Iprops> = ({dispatch,address,previousStep,paymentSelected}) => {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethod>(defualtValue);

    const onChangeHandler = (method:PaymentMethod) => setSelectedPaymentMethod(method);

    const submitHandler = (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        dispatch(selectedPaymentMethod);
    }

    useEffect(() => {
        if(!address){
            previousStep();
            return
        }
        setSelectedPaymentMethod(paymentSelected);
    },[])


    return (
        <div>
            <form className="mx-auto max-w-screen-md" onSubmit={submitHandler}>
                {
                    paymentMethodInfo.map((i,index) =>(
                        <div key={index} className='mb-4'>
                            <input type="radio"
                            name="paymenthMethod"
                            className="p-2 outline-none focus:ring-0"
                            id={i.title}
                            checked={selectedPaymentMethod === i.payment}
                            onChange={() => onChangeHandler(i.payment)}
                            />
                            <label htmlFor={i.title} className='p-2'>{i.title}</label>
                        </div>
                    ))
                }

                <div>
                    <button onClick={() =>previousStep()} type='button'
                    className="button-payment-process">
                        Back
                    </button>
                    <button type='submit'className="button-payment-process">
                        Next
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FormPayment
