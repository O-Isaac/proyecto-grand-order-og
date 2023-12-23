import Image from "next/image"
import { Email, Github } from "./icons"

export default function Navigation () {
    return (
        <nav className='flex justify-between items-center container mx-auto lg:flex-row flex-col gap-5'>
            <a className='flex items-center group ' href="/">
              <figure>
                <Image height={60} width={60} className='group-hover:opacity-50 transition-opacity' src="https://proyectograndorder.es/images/bg-logo.svg" alt="Logo" />
              </figure>
              <h1 className='font-extrabold text-xl text-center flex-shrink-0 group-hover:opacity-50 transition-opacity'>Proyecto Grand Order</h1>
            </a>
            <ul className="flex gap-2">
              <li>
                <a href="mailto:zaragozamendozaisaac@gmail.com">
                  <Email className="hover:text-neutral-700 transition-colors" width={34} height={34} />
                </a>
              </li>
              <li>
                <a href="https://github.com/O-Isaac/Proyecto-Grand-Order-Services">
                  <Github className="hover:text-neutral-700 transition-colors" height={34} width={34} />
                </a>
              </li>
            </ul>
        </nav>
    )
}