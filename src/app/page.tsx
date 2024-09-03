import Toppizza from "@/components/Toppizza";
import Pizzas from "@/components/Pizzas";
export default function Home() {
  return (
    <>
    <main className="w-full  max-w-7xl mx-auto px-4">
      <Toppizza />
      <h1 className="text-3xl w-72 pr-4">Nuestra variedad de pizzas</h1>
      <Pizzas />
    </main>
    </>
  );
}
