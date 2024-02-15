const products = [
  {
    id: 1,
    name: 'Ayurveda',
    href: '#',
    imageSrc: 'https://m.media-amazon.com/images/I/711kde2Pl7L.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Rs 6 /per Strip',
    color: 'Panadol, Calpol, Alvedon',
  },
  {
    id: 2,
    name: 'Vitamins & Protine Supplements',
    href: '#',
    imageSrc: 'https://assets.bonappetit.com/photos/619d06045dc63f934e1cc3a5/16:9/w_1280,c_limit/20211122%201221%20BA.COM%20441.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Rs 299',
    // color: 'Panadol, Calpol, Alvedon',
  },
  {
    id: 3,
    name: 'Mother & Baby Care ',
    href: '#',
    imageSrc: 'https://cdn.shopify.com/s/files/1/0257/2091/3991/files/plant-powered.jpg?v=1631951139',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Rs 15 /per Strip',
    // color: 'Panadol, Calpol, Alvedon',
  },
  {
    id: 1,
    name: 'Health Food & Drink       ',
    href: '#',
    imageSrc: 'https://i.gadgets360cdn.com/large/Health-Drink-1590745067287.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Rs 20 /per Strip',
    // color: 'Panadol, Calpol, Alvedon',
  },
  // More products...
]

export default function MedicineListing() {
  return (
    <>
 <a  href="tel:+91 93117 91119" title="Call us">
      <div className="text-center p-5 mt-5">
        <h1 className="font-bold text-3xl ">Shop By Category
        </h1>
        {/* <h1 className="text-3xl">Tailwind CSS</h1> */}
      </div>
      <section id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {products.map((items) => (
          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="tel:+91 93117 91119" title="Call us">
              <img src={items.imageSrc}
                alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                <p className="text-lg font-bold text-black truncate block capitalize">{items.name}</p>
                <div className="flex items-center">
                  {/* <p className="text-lg font-semibold text-black cursor-auto my-3">{items.price}</p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                  </del> */}
                  {/* <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                    fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                    <path
                      d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg></div> */}
                </div>
              </div>
            </a>
          </div>
        ))}
      </section >
      </a>

    </>
  )
}