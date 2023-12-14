export default function EnquiryForm() {
  return (
    <div>
      <h1 className="font-Proxima-Nova font-medium text-xl md:text-2xl  flex justify-center">
        Enquiry Form
      </h1>

      <div className="p-4 md:mx-auto md:max-w-screen-md bg-gray-100 m-3 rounded-lg dark:bg-[#101929]">

        <p className="mb-4 font-light text-left text-gray-500 text-sm">
          Got an issue? Want to send feedback? Need details about our Services? Let us know.
        </p>
        <form action="#">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="w-full md:w-1/2 mb-4 md:mb-0 ">
              <label className="block my-2 text-left text-sm font-medium text-gray-900 ">
                Full Name
              </label>
              <input
                type="text"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="Enter Full Name"
                required
              />
            </div>
            <div className="w-full md:w-1/2">
              <label className="block my-2 text-left text-sm font-medium text-gray-900">
                Contact No
              </label>
              <input
                type="text"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="Enter Contact No"
              />
            </div>
          </div>
          <div>
            <label className="block my-2 text-left text-sm font-medium text-gray-900">
              Your email
            </label>
            <input
              type="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="youremail@gmail.com"
              required
            />
          </div>
          <div>
            <label className="block my-2 text-left text-sm font-medium text-gray-900">
              Subject
            </label>
            <input
              type="text"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm"
              placeholder="What issue/suggestion do you have?"
              required
            />
          </div>
          <div>
            <label className="block my-2 text-left text-sm font-medium text-gray-900">
              Your message
            </label>
            <textarea
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300"
              placeholder="Query/Suggestion..."
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="mt-2 px-5 p-2 text-sm rounded-lg border-blue-600 bg-blue-600 hover:scale-105 shadow"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
