const products = [
    {
      id: 1,
      name: 'Paracetomol',
      href: '#',
      imageSrc: 'https://www.orionlifes.com/wp-content/uploads/2022/04/brexodol-tab.jpeg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Rs 6 /per Strip',
      color: 'Panadol, Calpol, Alvedon',
    },
    {
        id: 2,
        name: 'Volini Spray for Muscle Pain',
        href: '#',
        imageSrc: 'https://static.wixstatic.com/media/a962c7_15b1778965ed4765b7573f866493d311~mv2.jpg/v1/fill/w_980,h_980,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a962c7_15b1778965ed4765b7573f866493d311~mv2.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'Rs 299',
        // color: 'Panadol, Calpol, Alvedon',
      },
      {
        id: 3,
        name: 'Cofsils Lozenges for Quick Relief from Sore Throat ',
        href: '#',
        imageSrc: 'https://ayushkalp.com/cdn/shop/products/1595828707489197619_690x.jpg?v=1623173037',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'Rs 15 /per Strip',
        // color: 'Panadol, Calpol, Alvedon',
      },
      {
        id: 1,
        name: 'New Saridon Tablet for Fast Headache Relief        ',
        href: '#',
        imageSrc: 'https://lh3.googleusercontent.com/OD-9j4b3o8fDiUhN-Kcl1F2CDGnHbqLUX7OR0WZ3SaAXIYlJV3Gty06h3NOchN0Ikb0B203UuKkHzaen8lISkar3GALY78Gayzkjxs8=w400-rw',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'Rs 20 /per Strip',
        // color: 'Panadol, Calpol, Alvedon',
      },
    // More products...
  ]
  
  export default function MedicineListing() {
    return (
      <div className="  bg-blueGray-100">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl text-center font-bold tracking-tight text-gray-900">Medicines</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }