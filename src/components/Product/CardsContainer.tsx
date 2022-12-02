import Card from "./Card";

interface IProps {
    products : IProduct [];
}

const CardsContainer:React.FC<IProps> = ({products}) => {
    //debe de manejar todos los datos del db
    //debe de generar un map basado en el array de datos
    //debe de crear un elemento card por cada mapeo
    //debe de pasar los datos requeridos a card
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-3 md:px-0 gap-4">
          {products.map(p =>(
            <Card key={p.slug}
            name={p.name}
            price={p.price}
            slug={p.slug}
            image={p.image}/>
          ))}
        </div>
    )
}

export default CardsContainer
