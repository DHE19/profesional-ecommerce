import React from "react"

const HoverInstructor = ({logIn}:{logIn:boolean} = {logIn:false}) => {
    const [value, setValue] = React.useState<-100 | 0>(logIn ? 0 : -100);
    const [login, setLogin] = React.useState(logIn);
    return (
        <div className={`h-[500px] w-[50%] bg-slate-600 absolute z-20 top-0 right-0 translate-x-[${value}%] ease-in-out duration-300`}>
            <div className="flex flex-col h-full justify-center items-center text-white px-3">
                <h1 className="text-2xl mb-4 font-bold">Hola, Bienvenido! </h1>
                <p className="text-base font-extralight text-center "> { login ? '¿No tienes Cuenta? Solo llena uno cuantos datos y disfruta de nuestros produtos':'¿Ya tienes cuenta? \nInicia sessión, Que esperas!'}</p>
                <button 
                onClick={ () => {
                    setValue ( login ? -100 : 0);
                    setLogin(!login);
                }}
                className="py-2 my-4 px-6 bg-transparent border-white border-2 rounded-lg hover:bg-white hover:text-sky-500 ease-in duration-300">
                     {login ? 'Registrate':'Iniciar Sessón'}
                </button>
            </div>
        </div>
    )
}

export default HoverInstructor
