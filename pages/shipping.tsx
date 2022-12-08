import { SubmitHandler, useForm } from "react-hook-form";
import Layout from "../src/components/MainComponents/Layout"
import CheckoutWizard from "../src/components/Shipping/CheckoutWizard"
import {  useDispatch, useSelector } from 'react-redux'
import { saveShippingDetails } from "../redux/shippingReducers";
import { RootState } from "../redux/store";
import { useRouter } from "next/router";
import ShippingForms from "../src/components/Shipping/ShippingForms";

const Shipping = () => {
    
    const dispatch = useDispatch();
    const router = useRouter();
    const shippingDetails = useSelector((state: RootState) => state.shipping.shippingDetails);
    
    const submitHandler:SubmitHandler<IShippingDetails> = (Userdetails) => {
     dispatch(saveShippingDetails(Userdetails));
     router.push('/payment')
    }

    return (
            <Layout title="Shipping adress">
                <CheckoutWizard activeStep={1}/>
                <h1 className="mb-4 text-4xl text-center font-bold text-slate-800">Shipping Address</h1>
                <ShippingForms submitHandler={submitHandler} shippingDetails={shippingDetails}/>
            </Layout>
    )
}

export default Shipping

Shipping.auth = true;

