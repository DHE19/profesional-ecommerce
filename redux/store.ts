import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './reducers';
import shippingReducers from './shippingReducers';

export const store = configureStore({
    reducer:{
        cart:cartReducer,
        shipping: shippingReducers
    }
})

//Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
