import { useRouter } from "next/router"

const SignInForm = () => {
    const router = useRouter();
    return (
        <div className="h-full w-full px-3">
        <h1 className=" font-bold text-5xl text-center mb-2 text-slate-800">Sign In</h1>
        <form className="flex flex-col gap-4 text-slate-800">
            <div className="w-full">
                <label className="block font-semibold text-lg">Nombre:</label>
                <input
                className=" font-light w-full rounded-md px-2 py-2 focus:outline-sky-300 bg-slate-200"
                type="text" placeholder="Nombre" />
            </div>
            <div className="w-full">
                <label className="block font-semibold text-lg">Email:</label>
                <input
                className=" font-light w-full rounded-md px-2 py-2 focus:outline-sky-300 bg-slate-200"
                type="email" placeholder="email" />
            </div>
            <div className="font-light w-full">
                <label className="block font-semibold text-lg" >Password</label>
                <input
                className="w-full rounded-md px-2 py-2 focus:outline-sky-300 bg-slate-200"
                type="password" placeholder="password" />
            </div>

            <button 
            onClick={() => router.push('login?redirect=/shipping')}
            className=" bg-sky-500 rounded-md shadow-md text-white py-3 mt-4">Register</button>
        </form>
    </div>
    )
}

export default SignInForm
