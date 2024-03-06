import {
  Header,
  Footer,
  // VendorRegistrationForm,

} from "@/components";

export default function LabScanPage() {
  return (
    <div>
      <Header />
      {/* <Contact/> */}

      {/* <div className="bg-gray-200">
  <div className="py-10 px-4 md:px-10 text-center">
    <img src="https://www.svgrepo.com/show/426192/cogs-settings.svg" alt="Logo" className="h-24 md:h-40 mx-auto mb-4" />
    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-700 mb-4">Coming Soon</h1>
    <p className="text-lg md:text-xl lg:text-2xl text-gray-500 mb-8">We're diligently enhancing the page to improve user experience. Stay tuned!</p>
  </div>
</div> */}

<div className="bg-gray-900 py-6 md:py-10 px-4 flex flex-col items-center justify-center">
    <img src="https://www.svgrepo.com/show/426192/cogs-settings.svg" alt="Logo" className="h-16 md:h-24 mx-auto mb-2 md:mb-4 mt-6 md:mt-10" />
    <h1 className="text-3xl md:text-5xl text-white font-bold mb-6 md:mb-10 animate-pulse">
        Coming Soon
    </h1>
    <p className="text-white text-base md:text-lg mb-6 md:mb-10 text-center">
        We're working hard to bring you something amazing. Stay tuned!
    </p>
</div>


     
      <Footer />
    </div>
  );
}
