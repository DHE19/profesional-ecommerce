import { useRouter } from "next/router";
import Layout from "../src/components/MainComponents/Layout"
import CheckoutWizard from "../src/components/Shipping/CheckoutWizard"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setPaymentMethod } from "../redux/paymentReducer";
import { toast } from "react-toastify";
import FormPayment from "../src/components/Payment/FormPayment";



const Payment = () => {
    const router = useRouter();
    const {shipping,payment} = useSelector((state:RootState) => state) 
    const dispatch = useDispatch();
    const previousStep = () =>{
        router.push('/shipping')
    }
    const dispatchHandler = (payment: PaymentMethod) =>{

        if(payment === 'No-Selected'){
            toast.error('Es requerido el método de pago');
            return;
        }
        dispatch(setPaymentMethod(payment));
         //router.push('/placeorder');
    }
    return (
        <Layout>
            <CheckoutWizard activeStep={2}/>
            <h1 className="mb-4 text-xl">Payment Method </h1>
            <FormPayment dispatch={dispatchHandler}
            paymentSelected={payment.paymentMethod} address={shipping.shippingDetails.address}
            previousStep={ previousStep}/>
        </Layout>
    )
}

export default Payment
