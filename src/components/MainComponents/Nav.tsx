import Link from "next/link"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import type { RootState } from '../../../redux/store'
import { getTotalQuantity } from "../../../utils/cartInfo";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { useSession } from "next-auth/react";



const cartQuantity  =(products:Icart[]) => {
    console.log(products);
    
     return getTotalQuantity(products) > 0 ? (
    <span className="absolute flex items-center justify-center text-[0.6rem] bg-red-500 h-5 w-5 -bottom-3 -right-3 rounded-full">
        {getTotalQuantity(products)}
    </span>
    ): null;
}

const Nav = () => {

    const products = useSelector((state: RootState) => state.cart.products);
    const [totalQuantity, setTotalQuantity] = useState<React.ReactNode | null>(null);
    const {status,data:session} = useSession();
    useEffect(() =>setTotalQuantity(cartQuantity(products)),[products])

    return (
        <header>
            <ToastContainer position="bottom-center" limit={1}/>
        <nav className="flex p-4 justify-between px-2 md:px-4 items-center shadow-md  bg-zinc-900 text-white">
            <Link href={'/'}  className="text-lg font-bold text-slate-200">
                OFERTONGÓN
            </Link>
            <div className="text-lg font-light">
                <Link href={'/cart'}  className="text-red-500" >
                    <a className="mx-2 relative">Cart
                        {totalQuantity}
                    </a>

                </Link>
                
                    {status == 'loading' ? 
                    'Loading': session?.user ?
                     (session.user.name)
                     : 
                     (<Link href={'/login'}>
                        <a className="mx-2">Login</a>
                    </Link>)
                    }
            </div>
        </nav>
    </header>
    )
}

export default Nav
