import{ChevronRightIcon, ChevronLeftIcon,XCircleIcon} from '@heroicons/react/24/outline'

interface Iprops{
    carts:Icart[]
    handleAddProduct(cart:Icart):void;
    handleSubtractProduct(id:string):void;
    handleRemoveProduct(id:string):void;
}

const SummaryTbody:React.FC<Iprops> = ({handleAddProduct,handleRemoveProduct,handleSubtractProduct,carts}) => {
    return (
        <tbody className="text-sm md:text-base text-center lg:text-base leading-4" >
                            {
                                carts.map((i,index) =>(
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
                                ))
                            }
                        </tbody>
    )
}

export default SummaryTbody
