interface Iprops {
    activeStep:number
}


const steps = ['User Login','Shipping Addres','Payment Method','Place Holder'];

const CheckoutWizard:React.FC<Iprops> = ({activeStep}) => {
    return (
        <div className="mb-5 flex flex-wrap">
            {
                steps.map((step, index) => (
                        <div key={index} className={`flex-1 border-t-4 text-center
                        ${index <= activeStep ? 'border-indigo-500 text-indigo-500': 'border-gray-500 text-gray-500'}`}>
                            <span className={` block ${index <= activeStep ? 'text-white bg-indigo-500': 'bg-gray-500 text-white'} h-8 w-8 mx-auto flex justify-center items-center mt-2 rounded-full`}>
                                {index+1}
                            </span>

                            {step}
                        </div>
                ))
            }
        </div>
    )
}


export default CheckoutWizard
