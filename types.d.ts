

interface Icart {
    name:string;
    image:string;
    price:number;
    slug:string;
    quantity:number;
}


 interface IShippingDetails {
    fullName:string,
    country:string,
    state:string,
    city:string,
    postalCode:number,
    address:string
}


interface IProduct{
    name:string;
    slug:string;
    category:string;
    image:string;
    price:number;
    brand:string;
    rating:number;
    numReviews:number;
    countInStock:number;
    description:string;
}

interface IUser{
    name:string,
    email:string,
    password:string,
    isAdmin:boolean
}
interface IDatabaseModel {
    users:user[]
    products:IProduct[];
}