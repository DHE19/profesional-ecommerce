

interface Iprops {
    iva:number;
    subTotal:number;
    freeshiping:boolean;

}

const CardPrice:React.FC<Iprops> = ({iva,subTotal,freeshiping}) => {
    return (
        <div>
             <div className=" p-3 bg-slate-50 mx-3 rounded-lg shadow-md my-4 ">
                        <h1 className="text-xl md:text-2xl ml-3 font-bold">Resumen</h1>
                        <hr className="my-2 lg:my-4" />
                        <div className="ml-3 mt-2 text-base md:text-lg">
                            <p><b>SubTotal:</b>  ${subTotal}.00</p>

                            <p><b>IVA:</b>  ${iva}</p>

                            <p className={`${freeshiping ?'text-green-500':''}`}>
                                <b className="text-black">Envio: </b>  
                                {freeshiping ? 'Gratis':'$200.00'}
                            </p>

                            <hr className="my-2 lg:my-4" />

                            <p className="text-lg md:text-xl">
                                <b>Total: </b> 
                                {subTotal+ iva}
                            </p>
                        </div>
                        <hr className="my-2 lg:my-4" />
                        <button className=" block mx-auto bg-orange-500 h-12 w-[85%] rounded-lg shadow-md text-white font-semibold mt-3">Comprar Ahora!</button>
                    </div>
        </div>
    )
}

export default CardPrice
