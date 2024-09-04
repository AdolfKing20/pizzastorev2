import Toppizza from "@/components/Toppizza";
import Pizzas from "@/components/Pizzas";
import Buscador from "@/components/Buscador";
import Link from "next/link";
export default function Home() {
  return (
    <>
    <main className="w-full    px-4">
    
      <section className="container max-w-5xl m-auto lg:max-w-7xl ">
      <aside className="w-full text-[#272525] lg:flex  items-center h-dvh hidden ">
        <ul className="flex flex-col gap-8 text-xl">
          <li className="flex items-center gap-4 hover:text-[#000000]">
          <svg className="icon icon-tabler icon-tabler-category-2" width="35" height="35" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#272525" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M14 4h6v6h-6z" />
  <path d="M4 14h6v6h-6z" />
  <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M7 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
</svg> 
            <Link href="/">Inicio</Link>
          </li>
          <li className="flex items-center gap-4 hover:text-[#181818]">
          <svg width="35" height="35" viewBox="0 0 24 24" fill="none">

<path d="M7.2998 5H22L20 12H8.37675M21 16H9L7 3H4M4 8H2M5 11H2M6 14H2M10 20C10 20.5523 9.55228 21 9 21C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19C9.55228 19 10 19.4477 10 20ZM21 20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20C19 19.4477 19.4477 19 20 19C20.5523 19 21 19.4477 21 20Z" stroke="#272525" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
            <Link href="/carrito">carrito</Link>
          </li>
          <li className="flex items-center gap-4 hover:text-[#181818]">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-circle" width="35" height="35" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#272525" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
</svg>
            <Link href="/contacto">Sobre nosotros</Link>
          </li>
        </ul>
        </aside>
        <section className="w-full" >
        <Buscador />
        <Toppizza />
        <h1 className="text-3xl w-72 pr-4 my-4">Nuestra variedad de pizzas</h1>
        <Pizzas />
        </section>
      </section>
    </main>
    </>
  );
}
