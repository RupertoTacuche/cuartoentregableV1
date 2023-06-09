

const Modal = ({isShowForm}) => {
  return (
    <section className={`absolute top-0 left-0 bottom-0 right-0 bg-black/40 flex justify-center items-center ${isShowForm ? "opacity-100 visible" : "opacity-0 invisible" }`}>
        <form className="bg-white p-4 grid gap-4 w-[300px] relative">
            <h3 className="text-2xl font-bold">Nuevo usuario</h3>
            <div className="grid gap-1">
                <label className="text-xs font-semibold" htmlFor="first_name">Nombre</label>
                <input className="border-[1px] rounded-sm bg-gray-100 p-1" id="first_name" type="text" />
            </div>
            <div className="grid gap-1">
                <label className="text-xs font-semibold" htmlFor="last_name">Apellidos</label>
                <input className="border-[1px] rounded-sm bg-gray-100 p-1" id="last_name" type="text" />
            </div>
            <div className="grid gap-1">
                <label className="text-xs font-semibold" htmlFor="email">Correo</label>
                <input className="border-[1px] rounded-sm bg-gray-100 p-1" id="email" type="email" />
            </div>
            <div className="grid gap-1">
                <label className="text-xs font-semibold" htmlFor="password">Contraseña</label>
                <input className="border-[1px] rounded-sm bg-gray-100 p-1" id="password" type="password" />
            </div>
            <div className="grid gap-1">
                <label className="text-xs font-semibold" htmlFor="birthday">Cumpleaños</label>
                <input className="border-[1px] rounded-sm bg-gray-100 p-1" id="birthday" type="date" />
            </div>
            <div className="grid gap-1">
                <label className="text-xs font-semibold" htmlFor="image_url">URL imagen</label>
                <input className="border-[1px] rounded-sm bg-gray-100 p-1" id="image_url" type="text" />
            </div>
            <i className='bx bx-x absolute top-2 right-2 text-2xl hover:text-red-500 cursor-pointer'></i>
            <button className="bg-purple-p text-white p-2 hover:bg-purple-p/90 transition-colors text-sm">Agregar nuevo usuario</button>
        </form>
    </section>
  ); 
}

export default Modal