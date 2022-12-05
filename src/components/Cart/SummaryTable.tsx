import { useEffect, useState } from 'react';
import {  useDispatch } from 'react-redux'
import { addProduct, subtractQuantityProduct, removeProduct } from '../../../redux/reducers'
import { getTotalPrice } from '../../../utils/cartInfo';
import CardPrice from './CardPrice';
import SummaryTbody from './SummaryTbody';
import SummaryThead from './SummaryThead';

interface Iprops{
    carts:Icart[];
}


const IVA = 0.16
const LimiteGratis = 300;
//debe de crear un tabal con la siguiente cabeceras /Producto/Nombre/Cantidad/SubTotal
const SummaryTable:React.FC<Iprops> = ({carts}) => {
    const dispatch = useDispatch()
    const [ofCarts, setOfCarts] = useState<Icart[]>([]);
    const [subTotal, setSubTotal] = useState(0);
    const [iva, setIva] = useState(0);
    const [freeshiping, setEnvioGratis] = useState(false);

    useEffect(() =>{
         setSubTotal(getTotalPrice(carts))
         setOfCarts(carts);
        },[carts])

    useEffect(() =>{
        setIva(subTotal * IVA);
        setEnvioGratis(subTotal > LimiteGratis);
    },[subTotal])


    const handleAddProduct = (cart:Icart) => dispatch(addProduct(cart))
    

    const handleSubtractProduct = (id:string) =>dispatch(subtractQuantityProduct(id));
    

    const handleRemoveProduct = (id:string) => dispatch(removeProduct(id));

    return (
        <div className="grid grid-cols-1 lg:grid-cols-10 bg-slate-200 ">
            <div className="lg:col-span-7 px-2">
                <div className="h-[50vh] lg:h-[85vh] overflow-scroll shadow-md rounded-xl bg-slate-50 px-1 mt-2 lg:my-4  ">
                    <table className="w-full ">
                        <SummaryThead/>
                        <SummaryTbody 
                        handleAddProduct={handleAddProduct} 
                        handleRemoveProduct={handleRemoveProduct}
                        handleSubtractProduct={handleSubtractProduct} 
                        carts={ofCarts}/>
                    </table>
                </div>
            </div>

            <div className="lg:col-span-3">
                   <CardPrice freeshiping={freeshiping} subTotal={subTotal} iva={iva}/>
            </div>
        </div>
    )
}

export default SummaryTable
