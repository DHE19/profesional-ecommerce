const tableTitles = ['Producto','Cantidad','Precio','Remover']
const SummaryThead = () => {
    return (
        <thead>
        <tr className="border-b-[1px] border-slate-200">
            {tableTitles.map((i,index) => (
                <th className="py-3 text-sm lg:text-base px-3" key={index}>
                    {i}
                </th>
            ))}
        </tr>
    </thead>
    )
}

export default SummaryThead
