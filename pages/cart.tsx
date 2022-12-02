import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
const cart = () => {
    //ERROR: NO ENCUENTRA AL PROVIDER POR FAVOR CORREGIR
    const products = useSelector((state: RootState) => state.cart.products);
    
    return (

            <div>
                <h1>Cart</h1>
                <div>
                    {products.map(o => `${o.slug} - ${o.quantity}`)}
                </div>
            </div>

    )
}

export default cart
