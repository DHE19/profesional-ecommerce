import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store'
import SummaryTable from '../src/components/Cart/SummaryTable';
import Layout from '../src/components/MainComponents/Layout';

const Cart = () => {
    //ERROR: NO ENCUENTRA AL PROVIDER POR FAVOR CORREGIR
    const products = useSelector((state: RootState) => state.cart.products);
    
    
    return (
        <Layout title='Check Cart'>

            <SummaryTable carts={products}/>
          
        </Layout>

    )
}

export default Cart
