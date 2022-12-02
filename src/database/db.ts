export const data:IDatabaseModel = {
    products:[
        {
            name:'Sudadera estampado',
            slug:'rw2206061337009486',
            category:'sudadera',
            image:'https://img.ltwebstatic.com/images3_pi/2022/07/05/1657005575a0608d748f362352979a51ca8e94a396.webp',
            price:104.00,
            brand:'shine',
            rating:4.3,
            numReviews:200,
            countInStock:0,
            description:'estampado de esqueleto de hombros caídos'
        },
        {
            name:'COLDBREAK',
            slug:'swouter30210531263',
            category:'abrigo',
            image:'https://img.ltwebstatic.com/images3_pi/2022/10/14/16657163732a93dc8da78922ef09e52d85fc0a06b7.webp',
            price:393.00,
            brand:'shine',
            rating:4.1,
            numReviews:130,
            countInStock:200,
            description:'Abrigo guateado con bolsillo con solapa con botón'
        },
        {
            name:'Abrigo de pata de gallo',
            slug:'sw2210259728466037',
            category:'Abrigo',
            image:'https://img.ltwebstatic.com/images3_pi/2022/09/08/1662601170e5c1e4389c8b5456a8b5dc85e8346b00.webp',
            price:297.00,
            brand:'shine',
            rating:5,
            numReviews:30,
            countInStock:10,
            description:'Abrigo de pata de gallo de hombros caídos con botones'
        },
        {
            name:' BIZwear ',
            slug:'sw2207053234327677',
            category:'vestido',
            image:'https://img.ltwebstatic.com/images3_pi/2022/07/05/16570055264d01a7a5597a7ad8845909e00f8c3ce1.webp',
            price:93.00,
            brand:'shine',
            rating:5,
            numReviews:340,
            countInStock:10,
            description:'Vestido de cuello cruzado con nudo tejido de canalé'
        },
        {
            name:'Cazadora con cremallera',
            slug:'sw2109096026667662',
            category:'abrigo',
            image:'https://img.ltwebstatic.com/images3_pi/2022/10/20/166625758196285ea9c14452c4c2f4d226f5e6f4e9.webp',
            price:80,
            brand:'shine',
            rating:4.3,
            numReviews:10,
            countInStock:300,
            description:'Cazadora con cremallera con cordón con capucha'
        },
        {
            name:'Body de cuello ',
            slug:'sw2210184609851424',
            category:'camiseta',
            image:'https://img.ltwebstatic.com/images3_pi/2022/11/13/16683371576ba4222e41935f2a5fde940a5174a0e1_thumbnail_900x.webp',
            price:334.00,
            brand:'shine',
            rating:4.7,
            numReviews:0,
            countInStock:440,
            description:'muy bueno'
        },
        {
            name:'Cárdigan de hombros ',
            slug:'sf2210127588495907',
            category:'Abrigo',
            image:'https://img.ltwebstatic.com/images3_pi/2022/11/26/1669431253f87a1167cf12fba964ef648a040b457d_thumbnail_900x.webp',
            price:552.00,
            brand:'shine',
            rating:4.9,
            numReviews:487,
            countInStock:271,
            description:'Cárdigan de hombros caídos con parte delantera abierta'
        },
        {
            name:'Vestido camisero',
            slug:'sw2210187103917491',
            category:'camisa',
            image:'https://img.ltwebstatic.com/images3_pi/2022/11/25/16693429456bfd35a182e32e8d791880d7f06e5f5a_thumbnail_900x.webp',
            price:483.00,
            brand:'shine',
            rating:4.3,
            numReviews:6,
            countInStock:1245,
            description:'Vestido camisero unicolor con botón delantero bajo con abertura'
        },
    ]
}


export const getProduct = (slug:string): IProduct => data.products.find(p => p.slug === slug) as IProduct;