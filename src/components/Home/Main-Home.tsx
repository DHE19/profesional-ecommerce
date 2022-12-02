import { useState } from "react";
import { data } from "../../database/db";
import CardsContainer from "./product/CardsContainer";
import { useDispatch } from 'react-redux'
import { addProduct } from '../../../redux/reducers'

const MainShop= () => {
    const dispatch = useDispatch()
    const [db,] = useState(data);

    const handleDispatch =  (cart:Icart) => dispatch(addProduct(cart));
    return (
        <>
                <main className="container min-h-screen mx-auto my-8">
                    <CardsContainer products={db.products} addProduct={handleDispatch}/>
                </main>
        </>
    )
}

export default MainShop
