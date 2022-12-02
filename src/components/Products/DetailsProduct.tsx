

const DetailsProduct = ({product}:{product:IProduct}) => {
    const {name,price,description,image,rating,category,brand,countInStock} = product;
    return (
        <div className="container mx-auto lg:my-0 lg:px-24 px-3 min-h-screen md:flex md:items-center">
            <div className="grid grid-cols-1 lg:grid-cols-12 shadow-lg rounded-lg overflow-hidden">
                <div className=" w-full col-span-4">
                    <img src={image} alt={name} className="h-full" />
                </div>

                <div className="pt-4 col-span-8 bg-slate-50  text-slate-700 ">
                    <div className="flex flex-col justify-between h-full">
                        <div className="px-4 ">
                            <div className=" flex items-center pt-2 justify-between lg:justify-start">
                                <h1 className="text-xl  lg:text-4xl font-bold">{name}</h1>
                                <span className=" font-semibold lg:ml-8 px-4 py-1 bg-green-500 text-white">NEW</span>
                            </div>
                            <h2 className="text-lg font-semibold italic  md:text-[1.35rem] mt-2 lg:mt-4"> ${price}.00 MXN <s className="pl-6 text-slate-400">${price * 0.20 + price} MXN</s> </h2>
                        <hr className="mt-2 lg:mt-6" />
                        </div>
                        <div className="px-4 mt-4 pb-6 lg:pb-0 lg:mt-0">
                            <p className="ml-1 text-lg lg:text-xl font-light "><b className="font-semibold">Marca:</b> {brand}</p>
                            <p className="ml-1 mt-2 text-lg lg:text-xl font-light"><b className="font-semibold">Tipo:</b> {category}</p>
                            <p className="ml-1 mt-2 text-lg lg:text-xl font-light"><b className="font-semibold">Calificación</b>: {rating}</p>
                            <p className="ml-1 mt-2 text-lg lg:text-xl font-light"><b className="font-semibold">Stock:</b> {countInStock}</p>
                            <p className="ml-1 mt-2 text-lg lg:text-xl font-light"><b className="font-semibold">Descripción:</b> {description}</p>
                            <hr className="mt-4" />
                            <p className={` ${countInStock > 0 ? 'text-green-500': 'text-red-500'} ml-1 mt-2 text-lg lg:text-xl font-light`}>
                                <b className={`font-semibold text-slate-700 mr-1`}>
                                    Estatus: 
                                </b> 
                                {countInStock > 0 ? 'disponible':'Agotado'}
                            </p>
                        </div>

                        <div className="grid grid-cols-2">
                            <button className="w-full bg-rose-500 py-4 text-white font-semibold"> Add to Favorites</button>
                            <button 
                            disabled={countInStock == 0}
                            className={`w-full ${countInStock > 0 ? 'bg-orange-500': 'bg-gray-500'}  py-4 text-white font-semibold`}> 
                                Add to Cart
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DetailsProduct
