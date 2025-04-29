"use client"

export default function ProductCreateForm() {

    const handleCreateForm = ( formData : FormData ) => { 
        console.log("desde Crear Producto")
        
    }

    return (
        <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md w-1/2 mx-auto">

            <form
                className="space-y-5"
                action={handleCreateForm}
            >

                <div className="space-y-2">
                    <label
                        className="text-slate-800"
                        htmlFor="code"
                    >Codigo:</label>
                    <input
                        id="code"
                        type="number"
                        name="code"
                        className="block w-full p-3 bg-slate-100"
                        placeholder="Codigo del Producto"
                    />
                </div>

                <div className="space-y-2">
                    <label
                        className="text-slate-800"
                        htmlFor="name"
                    >Nombre:</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        className="block w-full p-3 bg-slate-100"
                        placeholder="Nombre Producto"
                    />
                </div>                
                
                <div className="space-y-2">
                    <label
                        className="text-slate-800"
                        htmlFor="description"
                    >Descripcion:</label>
                    <input
                        id="description"
                        type="text"
                        name="description"
                        className="block w-full p-3 bg-slate-100"
                        placeholder="Descripcion del Producto"
                    />
                </div>

                <div className="space-y-2">
                    <label
                        className="text-slate-800"
                        htmlFor="quantity"
                    >Cantidad:</label>
                    <input
                        id="quantity"
                        name="quantity"
                        className="block w-full p-3 bg-slate-100"
                        placeholder="Cantidad de Productos"
                    />
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
                    value='Crear Producto'
                />

            </form>

        </div>
    )
}
