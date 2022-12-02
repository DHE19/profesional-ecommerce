import { useState } from "react";
import { data } from "../database/db";
import CardsContainer from "./Product/CardsContainer";


const Main= () => {
    const [db,] = useState(data);
    return (
        <>
                <main className="container min-h-screen mx-auto my-8">
                    <CardsContainer products={db.products}/>
                </main>
        </>
    )
}

export default Main
