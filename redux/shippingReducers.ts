import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Cookies  from 'js-cookie';


const KEY_SHIPPING = 'shipping';
interface State {
    shippingDetails: IShippingDetails;
}

//if there are a value store in the cache retrive the a value, if not just create a new empty array


const cookieShippingDetails = Cookies.get(KEY_SHIPPING) ? <IShippingDetails>JSON.parse(<string>Cookies.get(KEY_SHIPPING)) : {} as IShippingDetails;

const initialState:State = {
    shippingDetails:cookieShippingDetails
}


const shippingSlice = createSlice({
    name:'shipping',
    initialState,
    reducers:{
        saveShippingDetails:(state,action: PayloadAction<IShippingDetails>) =>{
            state.shippingDetails = action.payload;
            Cookies.set(KEY_SHIPPING,JSON.stringify(state.shippingDetails));    
        }
    }
})


export const {saveShippingDetails}= shippingSlice.actions;
export default shippingSlice.reducer;



