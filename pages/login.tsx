import HoverInstructor from "../src/components/Login/HoverInstructor"
import LoginForm from "../src/components/Login/LoginForm"
import SignInForm from "../src/components/Login/SignInForm"
import Layout from "../src/components/MainComponents/Layout"

const Login = () => {
    return (
        <Layout>
           <div className="flex flex-col items-center justify-center min-h-[92vh] bg-slate-200  ">
            <div className="h-[500px] w-[100vw]  md:w-[90vw] lg:w-[80vw] xl:w-[65vw] relative rounded-md overflow-hidden shadow-gray-400 shadow-md">
                <HoverInstructor logIn={false}/>
                <div className="p-6 bg-slate-50 h-full w-full gap-4  grid grid-cols-2">
                    <LoginForm/>
                    <SignInForm/>
                </div>
            </div>
           </div>
        </Layout>
    )
}

export default Login
