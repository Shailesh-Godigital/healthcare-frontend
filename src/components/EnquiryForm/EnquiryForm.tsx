export default function EnquiryForm() {
  return (
    // <div>
    //   <h1 className="font-Proxima-Nova font-medium text-xl md:text-2xl  flex justify-center">
    //     Enquiry Form
    //   </h1>

    //   <div className="p-4 md:mx-auto md:max-w-screen-md bg-gray-100 m-3 rounded-lg dark:bg-[#101929]">

    //     <p className="mb-4 font-light text-left text-gray-500 text-sm">
    //       Got an issue? Want to send feedback? Need details about our Services? Let us know.
    //     </p>
    //     <form action="#">
    //       <div className="flex flex-col md:flex-row md:space-x-4">
    //         <div className="w-full md:w-1/2 mb-4 md:mb-0 ">
    //           <label className="block my-2 text-left text-sm font-medium text-gray-900 ">
    //             Full Name
    //           </label>
    //           <input
    //             type="text"
    //             className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
    //             placeholder="Enter Full Name"
    //             required
    //           />
    //         </div>
    //         <div className="w-full md:w-1/2">
    //           <label className="block my-2 text-left text-sm font-medium text-gray-900">
    //             Contact No
    //           </label>
    //           <input
    //             type="text"
    //             className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
    //             placeholder="Enter Contact No"
    //           />
    //         </div>
    //       </div>
    //       <div>
    //         <label className="block my-2 text-left text-sm font-medium text-gray-900">
    //           Your email
    //         </label>
    //         <input
    //           type="email"
    //           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
    //           placeholder="youremail@gmail.com"
    //           required
    //         />
    //       </div>
    //       <div>
    //         <label className="block my-2 text-left text-sm font-medium text-gray-900">
    //           Subject
    //         </label>
    //         <input
    //           type="text"
    //           className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm"
    //           placeholder="What issue/suggestion do you have?"
    //           required
    //         />
    //       </div>
    //       <div>
    //         <label className="block my-2 text-left text-sm font-medium text-gray-900">
    //           Your message
    //         </label>
    //         <textarea
    //           className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300"
    //           placeholder="Query/Suggestion..."
    //         />
    //       </div>
    //       <div className="flex justify-center items-center">
    //         <button
    //           type="submit"
    //           className="mt-2 px-5 p-2 text-sm rounded-lg border-blue-600 bg-blue-600 hover:scale-105 shadow text-white"
    //         >
    //           Send message
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>

    <section className="bg-blueGray-800">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap justify-center">
      <div className="w-full lg:w-6/12 px-4">
        <div className="flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
          <div className="flex-auto p-5 lg:p-10">
            <h4 className="text-2xl font-semibold">
            Got an issue? Want to send feedback?.
            </h4>
            <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
              Complete this form, and we will get back to you in few hours.
            </p>
            <div className="mb-3 mt-8">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="full-name"
              >
                Full Name
              </label>
              <input
                type="text"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Full Name"
              />
            </div>

            <div className="mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Email"
              />
            </div>

            <div className="mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="phone"
              >
                Contact no
              </label>
              <input
                type="phone"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Contact no"
              />
            </div>

            <div className="mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                placeholder="Type a message..."
              />
            </div>
            <div className="text-center mt-6">
              <button
                className="bg-blue-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}
