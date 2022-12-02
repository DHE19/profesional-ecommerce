import Link from "next/link"

const Nav = () => {
    return (
        <header>
        <nav className="flex p-4 justify-between px-2 md:px-4 items-center shadow-md bg-slate-900 text-white">
            <Link href={'/'}  className="text-lg font-bold text-slate-200">
                OFERTONGÓN
            </Link>
            <div>
                <Link href={'/cart'} className=" mx-2"> Cart</Link>
                <Link href={'/login'} className=" mx-2"> Login</Link>
            </div>
        </nav>
    </header>
    )
}

export default Nav
