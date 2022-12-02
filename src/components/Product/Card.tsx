interface IProps{
    name:string;
    slug:string;
    image:string;
    price:number;
}

const Card:React.FC<IProps> = ({name, slug, image, price}) => {
    const handleClick = () =>{
        console.log(slug);
        
    }
    return (
        <div className="shadow-md bg-slate-100 rounded-md overflow-hidden">
            <div className="imagen group relative cursor-pointer overflow-hidden">
                <img src={image} alt={name} />
                <h3 className=" w-full absolute bottom-2 text-white px-1 text-sm md:text-lg lg:text-xl text-center md:font-semibold md:px-4 z-20 opacity-0 translate-y-6 group-hover:translate-y-0 group-hover:opacity-100 ease-in duration-100 ">{name}</h3>
                <div className="absolute z-10 top-0 bg-gradient-to-t from-slate-900 to-transparent w-full h-full opacity-0 group-hover:opacity-100 ease-in duration-100 "></div>
            </div>
            <div className="details flex flex-col">
                <span className=" py-1 md:py-3 font-bold text-xl md:text-2xl text-center text-amber-400">{price}.00 MXN</span>
                <button 
                onClick={handleClick}
                className="w-full py-2 md:py-3 text-white bg-gradient-to-r from-pink-500 to-yellow-500 ">Add to card</button>
            </div>
        </div>
    )
}

export default Card
