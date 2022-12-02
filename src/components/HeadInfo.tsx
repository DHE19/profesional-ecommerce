import Head from "next/head";

const HeadInfo:React.FC<{title?:string}> = ({title}) => {
    return (
        <Head>
            <title>{`${title ?? 'Tienda'} - Ofertongon`}</title> 
            <meta name="description" content="Super Ofertas Cada Día" />
            <link rel="icon" href="favicon.ico" />
        </Head>
    )
}

export default HeadInfo
