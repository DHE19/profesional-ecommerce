import Link from "next/link";
import { useRouter } from "next/router";

interface IProps{
    name:string;
    slug:string;
    image:string;
    price:number;
    addProduct(cart:Icart):void;
}

const Card:React.FC<IProps> = ({name, slug, image, price,addProduct}) => {

    const router = useRouter();
    const handleAddProduct = () => addProduct({slug,quantity:1,price,image,name});
    const loadpage = () => router.push(`/products/${slug}`);
    
    return (
        <div className="shadow-md bg-slate-100 rounded-md overflow-hidden">
            <div className="imagen group relative cursor-pointer overflow-hidden">
                <img src={image} alt={name} />
                <h3 className=" w-full absolute bottom-2 mb-4 text-white px-1 text-sm md:text-lg lg:text-xl text-center md:font-semibold md:px-4 z-20 opacity-0 translate-y-6 group-hover:translate-y-0 group-hover:opacity-100 ease-in duration-100 ">{name}</h3>
                <div className="absolute z-10 top-0 bg-gradient-to-t from-slate-900 to-transparent w-full h-full opacity-0 group-hover:opacity-100 ease-in duration-100 "></div>
            </div>
            <div className="details flex flex-col">
                <span className=" py-1 md:py-2 font-bold text-xl md:text-2xl text-center text-amber-600">{price}.00 MXN</span>
                <span className="text-xs text-center pb-2 md:pb-3 text-green-500">Envio gratis</span>
                <div className="grid grid-cols-2 md:grid-cols-2">
                    <button onClick={handleAddProduct}
                    className=" w-full py-3 text-slate-600 bg-zinc-200 text-xs md:text-sm lg:text-md">Add to card</button>
                    <button onClick={loadpage}
                    className="w-full py-3 text-slate-600 bg-zinc-300 text-xs md:text-sm lg:text-md">Details</button>
                </div>
            </div>
        </div>
    )
}

export default Card
