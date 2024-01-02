
const CallbackForm = () => {
    return (
        <>
            <div className="flex  dark:bg-[#101929] flex-col sm:flex-row  mb-10  ">
                {/* Content Section */}
                <div className="p-6 sm:p-12 md:p-24 sm:w-1/2">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">    Accufly Nursing Services</h1>
                    <p className="mb-3 text">Accufly hires licensed and experienced nurses who are capable of providing high-quality care for your loved ones</p>
                    <ul className="list-disc mb-4">
                    <li>Ryles Tube Insertion and Feeding</li>
                        <li>Intravenous medication and IV fluid management</li>
                        <li>Giving medicines on time</li>
                        <li>Fixing a diet plan</li>
                        <li>Caring and dressing</li>
                    </ul>
                </div>
                <div className="w-full mt-10 md:w-96 md:max-w-full mx-auto 
                                 bg-gray-100 dark:bg-[#101929] rounded-md p-2">
  <div className="p-6  sm:rounded-md">
    
    <form
      method="POST"
      action="https://herotofu.com/start"
    //   enctype="multipart/form-data"
    >
              <h2 className="mb-4 text-3xl font-bold">Request a CallBack</h2>
      <label className="block mb-6">
        <span className="text-gray-700">Your name</span>
        <input
          name="name"
          type="text"
          className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder="Your Name"
        />
      </label>
      <label className="block mb-6">
        <span className="text-gray-700">Phone </span>
        <input
          name="Phone"
          type="Phone"
          className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder="Your Phone"
        />
      </label>
      <div className="mx-0 mb-1 sm:mb-4">
            <label className="pb-1 text-xs uppercase tracking-wider"></label>
            {/* Add the dropdown for selecting a city */}
            <select id="city" className="w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300">
                <option value="" disabled selected>Select a City</option>
                <option value="city1">City 1</option>
                <option value="city2">City 2</option>
                {/* Add more options as needed */}
            </select>
        </div>
        <div className="mx-0 mb-1 sm:mb-4">
            <label className="pb-1 text-xs uppercase tracking-wider"></label>
            {/* Add the dropdown for selecting a city */}
            <select id="city" className="w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300">
                <option value="" disabled selected>Select Requirement</option>
                <option value="city1">Requirement 1</option>
                <option value="Requirement2">Requirement 2</option>
                {/* Add more options as needed */}
            </select>
        </div>
     
      <div className="mb-9">
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-800 focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out"
        >
          Request a Callback
        </button>
      </div>
     
    </form>
  </div>
</div>
               
                

                
            </div>
        </>
    );
};

export default CallbackForm;






// function CallbackForm() {
//     return (
//         // <section className="dark:bg-slate-800" id="contact">
//     <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
//         <div className="flex items-stretch justify-center">
//             <div className="grid md:grid-cols-2">
//                 <div className=" pr-6">
//                     <div className=" max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
//                         <h3 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
//                             Accufly Nursing Services
//                         </h3>
//                     </div>
//                     <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
//                         className aptent taciti sociosqu ad
//                         litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque
                       
//                     </p>
//                     <ul className=" list-disc md:mb-0">
//                         <li>Ryles Tube Insertion and Feeding</li>
//                         <li>Intravenous medication and IV fluid management</li>
//                         <li>Giving medicines on time</li>
//                         <li>Fixing a diet plan</li>
//                         <li>Caring and dressing</li>
//                     </ul>
//                 </div>
//                 <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
//                     <h2 className="mb-4 text-2xl font-bold">Request a CallBack</h2>
//                     <form id="contactForm">
//                         <div className="mb-6">
//                             <div className="mx-0 mb-1 sm:mb-4">
//                                 <label className="pb-1 text-xs uppercase tracking-wider"></label>
//                                 <input type="text" id="name" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="name" />
//                             </div>
//                             <div className="mx-0 mb-1 sm:mb-4">
//                                 <label className="pb-1 text-xs uppercase tracking-wider"></label>
//                                 <input type="email" id="email" placeholder="Your Phone" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="email" />
//                             </div>
//                         </div>
//                         <div className="mx-0 mb-1 sm:mb-4">
//                             <label className="pb-1 text-xs uppercase tracking-wider"></label>
//                             <textarea id="textarea" name="textarea" placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"></textarea>
//                         </div>
//                         <div className="text-center">
//                             <button type="submit" className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Request a Callback</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     </div>
// // </section>

//     )
// }

// export default CallbackForm