import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Cookies  from 'js-cookie';


const KEY_PAYMENT = 'payment';
interface State {
    paymentMethod: PaymentMethod;
}

//if there are a value store in the cache retrive the a value, if not just create a new empty array
const cookiePaymentMethod = Cookies.get(KEY_PAYMENT) ? <PaymentMethod>JSON.parse(<string>Cookies.get(KEY_PAYMENT)): 'No-Selected';

const initialState:State = {
    paymentMethod:cookiePaymentMethod
}


const paymentSlice = createSlice({
    name:'paymentMethod',
    initialState,
    reducers:{
        setPaymentMethod:({paymentMethod},action: PayloadAction<PaymentMethod>) =>{
            paymentMethod = action.payload;
            Cookies.set(KEY_PAYMENT,JSON.stringify(paymentMethod));    
        }
    }
})


export const {setPaymentMethod}= paymentSlice.actions;
export default paymentSlice.reducer;



