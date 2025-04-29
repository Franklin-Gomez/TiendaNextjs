
export default function ProductTablet() {
    return (
        <div>
            <h1 className="text-center font-bold text-3xl my-4"> Productos </h1>
          
            <div className="overflow-x-auto">
                <table className="min-w-full text-left">
                    <thead className="border-b border-gray-300">
                        <tr> 
                            <th className="px-4 py-2">Codigo</th>
                            <th className="px-4 py-2">Nombre del sector</th>
                            <th className="px-4 py-2">Descripcion</th>
                            <th className="px-4 py-2">Cantidad</th>
                            <th className="px-4 py-2" colSpan={2}>Fecha Creacion</th>
                        </tr>
                        
                    </thead>

                    <tbody>
                    {/* {data.map((sector, index) => (
                        <tr key={index} className="odd:bg-white even:bg-gray-100">
                            <td className="px-4 py-2">{sector.sector}</td>
                            <td className="px-4 py-2">{sector.direccion}</td>
                            <td className="px-4 py-2">{sector.horario.apertura}</td>
                            <td className="px-4 py-2">{sector.horario.cierre}</td>
                        </tr>
                    ))} */}

                        <tr className="odd:bg-white even:bg-gray-100">
                            <td className="px-4 py-2">123213</td>
                            <td className="px-4 py-2">procesador</td>
                            <td className="px-4 py-2">cerebro del pc </td>
                            <td className="px-4 py-2">1</td>
                            <td className="px-4 py-2">30/04/2025</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
