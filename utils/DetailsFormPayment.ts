
interface IPayment{
    title:string;
    payment:PaymentMethod
}

export const paymentMethodInfo:IPayment[] = [{
    title:'Paypal',
    payment:'Paypal'
},{
    title:'Stripe',
    payment:'Stripe'
    
},{
    title:'Cash On Delivery',
    payment:'Cash'
}

];