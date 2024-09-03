"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Pizzapeperoni from "@/components/images/pizzapeperoni.jpg";
import PizzaMargherita from "@/components/images/champinion.webp";
import PizzaHawaiana from "@/components/images/barbacoa.webp";

const slides = [
  {
    src: Pizzapeperoni,
    alt: "Pizza de Peperoni",
    title: "Delicious Pepperoni Pizza",
    description: "A classic pizza topped with crispy pepperoni slices.",
  },
  {
    src: PizzaMargherita,
    alt: "Pizza Margherita",
    title: "Classic Margherita Pizza",
    description: "Simple yet flavorful with fresh tomatoes, mozzarella, and basil.",
  },
  {
    src: PizzaHawaiana,
    alt: "Pizza Hawaiana",
    title: "Hawaiian Pizza",
    description: "A sweet and savory pizza topped with ham and pineapple.",
  },
];

function Toppizza() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Cambia de slide cada 5 segundos

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, []);

  return (
    <div className="relative w-full my-4">
      <div className="flex justify-center items-center">
        <button
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1))}
          className="absolute left-4 text-white text-2xl bg-black/50 p-2 rounded-full z-10"
        >
          ❮
        </button>
        <div className="w-full overflow-hidden rounded-2xl">
          <div className="relative">
            <Image
              src={slides[currentIndex].src}
              alt={slides[currentIndex].alt}
              className="w-full h-40 md:h-64 object-cover transition-opacity duration-500 ease-in-out"
              style={{ opacity: 1 }}
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/40 backdrop-blur  text-white p-4 rounded-b-2xl">
              <h2 className="text-lg font-bold">{slides[currentIndex].title}</h2>
              <p className="text-sm">{slides[currentIndex].description}</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)}
          className="absolute right-4 text-white text-2xl bg-black/50 p-2 rounded-full z-10"
        >
          ❯
        </button>
      </div>
    </div>
  );
}

export default Toppizza;
