import{ChevronRightIcon, ChevronLeftIcon,XCircleIcon} from '@heroicons/react/24/outline'
import {  useDispatch } from 'react-redux'
import { addProduct, subtractQuantityProduct, removeProduct } from '../../../redux/reducers'

interface Iprops{
    carts:Icart[];
}

const tableTitles = ['Producto','Cantidad','Precio','Remover']
//crea la cabera del table
const tabableHead = (
    <thead>
        <tr className="border-b-[1px] border-slate-200">
            {tableTitles.map((i,index) => (
                <th className="py-3 text-sm lg:text-base px-3" key={index}>
                    {i}
                </th>
            ))}
        </tr>
    </thead>
)
//debe de crear un tabal con la siguiente cabeceras /Producto/Nombre/Cantidad/SubTotal
const SummaryTable:React.FC<Iprops> = ({carts}) => {
    const dispatch = useDispatch()

    const subTotal = carts.map(i => i.price * i.quantity).reduce((prev,current)=> prev + current,0);
    const iva = subTotal * 0.16;
    const envioGratis = subTotal > 300;


    const handleAddProduct = (cart:Icart) =>{
        dispatch(addProduct(cart))
    }

    const handleSubtractProduct = (id:string) =>{
        dispatch(subtractQuantityProduct(id));
    }

    const handleRemoveProduct = (id:string) => dispatch(removeProduct(id));

    return (
        <div className="grid grid-cols-1 lg:grid-cols-10 bg-slate-200 ">
            <div className="lg:col-span-7 px-2">
                <div className="h-[50vh] lg:h-[85vh] overflow-scroll shadow-md rounded-xl bg-slate-50 px-1 mt-2 lg:my-4  ">
                    <table className="w-full ">
                        {tabableHead}
                            <tbody className="text-sm md:text-base text-center lg:text-base leading-4" >
                        {carts.map((i,index) =>(
                            <tr className="border-b-[1px] border-slate-200 " key={index}>

                                <td className=" w-2 md:w-12 lg:w-28 py-2">
                                    <img src={i.image} alt={i.name}/>
                                    <span className='inline-block mt-2'>{i.name}</span>
                                </td>

                                <td className="py-2"> 
                                    <ChevronLeftIcon 
                                    onClick={() =>handleSubtractProduct(i.slug)}
                                    className='cursor-pointer h-7  inline'/>
                                    {i.quantity}
                                    <ChevronRightIcon 
                                    onClick={() => handleAddProduct(i)}
                                    className='cursor-pointer h-7  inline'/>
                                </td>

                                <td className="py-2"> 
                                    $ {i.price * i.quantity}.00
                                </td>

                                <td className="py-2"> 
                                    <XCircleIcon 
                                    onClick={() => handleRemoveProduct(i.slug)}
                                    className=' inline cursor-pointer h-7'/>
                                </td>
                                
                            </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
            </div>

            <div className="lg:col-span-3">
                    <div className=" p-3 bg-slate-50 mx-3 rounded-lg shadow-md my-4 ">
                        <h1 className="text-xl md:text-2xl ml-3 font-bold">Resumen</h1>
                        <hr className="my-2 lg:my-4" />
                        <div className="ml-3 mt-2 text-base md:text-lg">
                            <p><b>SubTotal:</b>  ${subTotal}.00</p>

                            <p><b>IVA:</b>  ${iva}</p>

                            <p className={`${envioGratis ?'text-green-500':''}`}>
                                <b className="text-black">Envio:</b>  
                                {envioGratis ? 'Gratis':'$200.00'}
                            </p>

                            <hr className="my-2 lg:my-4" />

                            <p className="text-lg md:text-xl">
                                <b>Total:</b> 
                                ${(subTotal + iva) + (envioGratis ? 0 : 200)}
                            </p>
                        </div>
                        <hr className="my-2 lg:my-4" />
                        <button className=" block mx-auto bg-orange-500 h-12 w-[85%] rounded-lg shadow-md text-white font-semibold mt-3">Comprar Ahora!</button>
                    </div>
            </div>
        </div>
    )
}

export default SummaryTable
