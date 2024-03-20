import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import img1 from "/pic1.jpg";
import img2 from "/pic2.jpg";
import img3 from "/pic3.jpg";
import img4 from "/pic4.jpg";
import img5 from "/pic5.jpg";
import img6 from "/pic6.jpg";
import img7 from "/pic7.jpg";
import img8 from "/pic8.jpg";
import img9 from "/pic9.jpg";
import img10 from "/pic10.jpg";

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
          <div
            key={index}
            className="w-full md:w-screen sm:w-full"
            style={{ flex: "0 0 auto", width: "100%" }}
          >
            {/* <a > */}
            <img
              src={img}
              alt={img}
              className="object-cover w-full h-full"
              style={{ display: "block" }}
              
            />
            {/* </a> */}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white border-2 border-black"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={next} // Fixed: added onClick event handler for next function
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white border-2 border-black"
        >
          <ArrowRight size={20} />
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
  const slides = [img1, img2, img3, img4,img5,img6,img7,img8,img9,img10];

  return (
    <div className="pb-8 w-full">
      <div>
        {/* <a  href="tel:+91 93117 91119" title="Call us"> */}
        <CarouselUtility slides={slides} />
        {/* </a> */}
      </div>
    </div>
  );
}
