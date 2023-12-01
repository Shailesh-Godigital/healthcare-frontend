import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import img1 from "/carousel-1.jpg";
import img2 from "/carousel-2.jpg";
import img3 from "/carousel-3.jpg";
import img4 from "/carousel-4.jpg";
import img5 from "/carousel-5.jpg";

function CarouselUtility({
  autoSlide = true,
  autoSlideInterval = 3000,
  slides,
}: {
  autoSlide?: boolean;
  autoSlideInterval?: number;
  slides: string[];
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden relative w-full bg-red-500">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((img, index) => (
          <img src={img} alt={img} key={index} className="object-fill w-full" />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white border-2 border-black"
        >
          <ArrowLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white border-2 border-black"
        >
          <ArrowRight size={40} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              border-2 border-black
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Carousel() {
  const slides = [img1, img2, img3, img4, img5];

  return (
    <div className="h-screen w-full">
      <div>
        <CarouselUtility slides={slides} />
      </div>
    </div>
  );
}
