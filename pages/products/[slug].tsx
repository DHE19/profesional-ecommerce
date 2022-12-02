import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../src/components/MainComponents/Layout"
import DetailsProduct from "../../src/components/Products/DetailsProduct";
import { getProduct } from "../../src/database/db";



const ProductSelected = () => {
    const {query} = useRouter();
    const product = getProduct(query.slug as string);
    return (
        <div className="bg-gray-100">
            <Layout>
                <div className=" lg:hidden flex justify-end p-4 ">
                    <Link href={'/'} className="font-semibold text-lg lg:text-2xl">Return</Link>
                </div>
                {product ? <DetailsProduct product={product}/> : <h1>No Existe</h1>}
            </Layout>

        </div>
    )
}

export default ProductSelected
