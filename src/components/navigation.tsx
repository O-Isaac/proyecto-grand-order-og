export default function Navigation () {
    return (
        <nav className='flex justify-between items-center container mx-auto lg:flex-row flex-col gap-5'>
            <a className='flex items-center group ' href="/">
              <figure>
                <img height={60} width={60} className='group-hover:opacity-50 transition-opacity' src="https://proyectograndorder.es/images/bg-logo.svg" alt="Logo" />
              </figure>
              <h1 className='font-extrabold text-xl text-center flex-shrink-0 group-hover:opacity-50 transition-opacity'>Proyecto Grand Order</h1>
            </a>
            <ul className="flex gap-2">
              <li>
                <a className="bg-black text-white py-3 px-4 rounded-lg hover:bg-black/80" href="mailto:zaragozamendozaisaac@gmail.com">Contacto</a>
              </li>
            </ul>
        </nav>
    )
}