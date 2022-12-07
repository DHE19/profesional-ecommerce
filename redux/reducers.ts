import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Cookies  from 'js-cookie';


const KEY_CART = 'cart';
interface State {
    products:Icart[],
}

//if there are a value store in the cache retrive the a value, if not just create a new empty array
const cookieCarts = Cookies.get(KEY_CART) ? <Icart[]>JSON.parse(<string>Cookies.get(KEY_CART)) : []

const initialState:State = {
    products:cookieCarts
}



const FilterTargetCart = (array:Icart[], id:string) => array.filter(i => id !== i.slug);

const cartsSlice = createSlice({
    name:'carts',
    initialState,
    reducers:{
        addProduct:(state, action: PayloadAction<Icart>) =>{
        //buscamos el valor
        let currentProduct = state.products.find(i => i.slug === action.payload.slug);
        //si tiene valor 
        if(currentProduct){
            //actualiazmos su cuantity
            state.products.forEach(i => {
                if(i.slug === currentProduct?.slug)
                    i.quantity++;
            })
        }
        //añadimos el nuevo producto
        else state.products.push(action.payload);

        Cookies.set(KEY_CART,JSON.stringify(state.products));        
    },
    removeProduct:(state, action:PayloadAction<string>)=>{
        
        state.products = FilterTargetCart(state.products,action.payload);
        Cookies.set(KEY_CART,JSON.stringify(state.products));        
        
    },
    subtractQuantityProduct:(state, action:PayloadAction<string>) =>{
            const indexProduct = state.products.findIndex(i => i.slug === action.payload);
            if(indexProduct === -1) return;
            let product = state.products[indexProduct].quantity - 1;
            if(product > 0) state.products[indexProduct].quantity = product;
            else state.products = FilterTargetCart(state.products,action.payload);
            Cookies.set(KEY_CART,JSON.stringify(state.products));        
        }
        
    }
})


export const {addProduct, removeProduct, subtractQuantityProduct}= cartsSlice.actions;
export default cartsSlice.reducer;



