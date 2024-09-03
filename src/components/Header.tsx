import Link from "next/link"

function Header() {
  return (
    <>
    <header className='fixed bottom-0 w-full lg:relative'>
    <ul className=" bg-sky-950 h-16 flex items-center justify-between px-4 lg:h-dvh lg:flex-col lg:justify-around lg:w-96 lg:rounded-tr-3xl lg:rounded-br-3xl">
        <li>
            <Link href="/">
            <svg className="icon icon-tabler icon-tabler-category-2" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M14 4h6v6h-6z" />
  <path d="M4 14h6v6h-6z" />
  <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M7 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
</svg> 
            </Link>
        </li>
        <li>
            <Link href="/carrito">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none">

<path d="M7.2998 5H22L20 12H8.37675M21 16H9L7 3H4M4 8H2M5 11H2M6 14H2M10 20C10 20.5523 9.55228 21 9 21C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19C9.55228 19 10 19.4477 10 20ZM21 20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20C19 19.4477 19.4477 19 20 19C20.5523 19 21 19.4477 21 20Z" stroke="#ffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
            </Link>
        </li>
        <li>
            <Link href="/contacto">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-circle" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
</svg>
            </Link>
        </li>
    </ul>
    </header>
    
    </>
  )
}

export default Header