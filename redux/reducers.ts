import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface State {
    products:Icart[],
}


const initialState:State= {
    products:[]
}



const FilterTargetCart = (array:Icart[], id:string) => array.filter(i => id === i.slug);

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
        },
        removeProduct:(state, action:PayloadAction<string>)=>{
            FilterTargetCart(state.products,action.payload)
            
        },
        subtractQuantityProduct:(state, action:PayloadAction<string>) =>{
            const indexProduct = state.products.findIndex(i => i.slug === action.payload);
            if(indexProduct === -1) return;
            let product = state.products[indexProduct].quantity - 1;
            if(product > 0) state.products[indexProduct].quantity = product;
            else state.products = FilterTargetCart(state.products,action.payload);
        }
        
    }
})


export const {addProduct, removeProduct, subtractQuantityProduct}= cartsSlice.actions;
export default cartsSlice.reducer;



