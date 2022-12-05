import HoverInstructor from "../src/components/Login/HoverInstructor"
import LoginForm from "../src/components/Login/LoginForm"
import SignInForm from "../src/components/Login/SignInForm"
import Layout from "../src/components/MainComponents/Layout"

const Login = () => {
    return (
        <Layout>
           <div className="flex flex-col items-center justify-center min-h-screen bg-slate-300  ">
            <div className="h-[500px] w-[100vw]  md:w-[70vw] lg:w-[50vw] relative rounded-md overflow-hidden">
                <HoverInstructor logIn={true}/>
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
