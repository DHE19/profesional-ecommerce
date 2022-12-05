export const getTotalPrice =(carts:Icart[]) => carts.map(i => i.price * i.quantity).reduce((prev,current)=> prev + current,0);
export const getTotalQuantity = (carts: Icart[]) => carts.map(i => i.quantity).reduce((prev,current) => prev + current,0);

