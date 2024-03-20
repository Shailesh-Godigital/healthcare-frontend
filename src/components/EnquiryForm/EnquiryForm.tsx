export default function EnquiryForm() {
  return (
    <section className="text-gray-700 body-font border-t border-gray-200">
      <div className="container px-5 py-20 mx-auto flex flex-row">

        <div className="flex flex-col flex-wrap  lg:w-full lg:text-left text-center width-full">
          <section className="bg-blueGray-800">
            <div className="mx-auto">
              <div className="flex flex-wrap justify-left md:ml-10 ml-2">
                <div className="w-full lg:w-10/12 px-4">
                  <div className="flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-800">
                    <div className="flex-auto p-5 ">
                      <h4 className="text-2xl font-semibold">
                        Got an issue? Want to send feedback?.
                      </h4>
                      <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                        Complete this form, and we will get back to you in a few hours.
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
                      <div className="">
                        <div className="mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="email"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring  ease-linear transition-all duration-150"
                            placeholder="Email"
                          />
                        </div>

                        <div className="mb-3 ">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="phone"
                          >
                            Contact no
                          </label>
                          <input
                            type="phone"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring  ease-linear transition-all duration-150"
                            placeholder="Contact no"
                          />
                        </div>
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
                          className="bg-indigo-900 text-white active:bg-indigo-900 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
        </div>

        <div className="lg:w-8/12 w-full lg:mb-0 mr-10 mt-2 rounded-lg overflow-hidden hidden md:block">
          <img alt="feature" className="object-cover object-center h-50 w-50 lg:h-auto lg:w-auto" src="/newEnquiryBanner.jpg" />
        </div>
        


      </div>
    </section>

  );
}
