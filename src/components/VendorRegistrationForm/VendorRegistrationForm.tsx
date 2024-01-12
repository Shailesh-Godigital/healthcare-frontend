import { useState } from "react";
import axios from 'axios';

function VendorRegistrationForm() {

    const [formData, setFormData] = useState({
       
        labName: "",
        ownerName: "",
        labServices: '',
        labEmail: '',
        qualification:'',
        logo: '',
        contactNo:'',
        licenceNumber: '',
        labAvailability: 'time working',
        labDocument:''

    });

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const dateValue = e.target.value;
        const formattedDate = new Date(dateValue).toISOString();
        console.log("🚀 ~ file: VendorRegistrationForm.tsx:31 ~ handleDateChange ~ formattedDate:", formattedDate)

        setFormData({
            ...formData,
            ownerName: formattedDate,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);

        // Displaying an alert with the filled details
        alert("Thank you for submitting your form. It is under review.");

        try {
            // let apiUrl = `${process.env.REACT_APP_BASE_URL}/api/v1/labVender/register`;
            let apiUrl = `http://localhost:5000/api/v1/labVender/register`;

            let response = await axios.post(apiUrl, formData);
            console.log(response.data);

        } catch (error) {
            console.error('Error saving data:', error);
        }

        // Reset form data
        setFormData({
            labName: "",
            ownerName: "",
            labServices: '',
            labEmail: '',
            qualification:'',
            logo: '',
            contactNo:'',
            licenceNumber: '',
            labAvailability: ' ',
            labDocument:''
        });
    };

    const labServicesOptions = [
        { value: 'Service 1', label: 'Service 1' },
        { value: 'Service 2', label: 'Service 2' },
        { value: 'Service 3', label: 'Service 3' },
    ];


    const categoryOptions = [
        { value: 'Category1', label: 'Category1' },
        { value: 'Category2', label: 'Category2' },
        { value: 'Category3', label: 'Category3' },
    ];

    return (
        <>

            {/* <div className="flex items-center justify-center h-screen"></div> */}
            <div className="flex items-center justify-center min-h-screen flex-col min-w-0 break-words w-full  rounded-lg bg-blueGray-100 border-0">
                <div className="bg-gray-300 dark:bg-[#101929] flex-auto px-4 lg:px-10 py-10 pt-0 w-full lg:w-8/12 xl:w-6/12">
                    <h4 className="text-center mt-5 text-xl ">Lab Vendor Registration Form</h4>

                    <hr className="mt-6 border-b-1 border-blueGray-300" />
                    <form className='' onSubmit={handleSubmit}>
                        {/* <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                            User Information
                        </h6> */}
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-12/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Lab Name
                                    </label>
                                    <input
                                        type="text"
                                        name="labName"
                                        value={formData.labName}
                                        onChange={handleInputChange}
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white dark:bg-[#162133] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    // defaultValue="lucky.jesse"
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Owner Name
                                    </label>
                                    <input
                                        type="text" // Change the input type to date
                                        name="ownerName"
                                        value={formData.ownerName}
                                        onChange={handleInputChange}
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white dark:bg-[#162133] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    // defaultValue="2024-01-01" // You can set a default date if needed
                                    />
                                </div>
                            </div>

                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        lab Services
                                    </label>
                                    <select
                                        name="labServices"
                                        value={formData.labServices}
                                        onChange={handleInputChange}
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white dark:bg-[#162133] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        defaultValue="Lucky"
                                    >
                                        {labServicesOptions.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="w-full lg:w-12/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        lab Email address
                                    </label>
                                    <input
                                        name="labEmail"
                                        value={formData.labEmail}
                                        onChange={handleInputChange}
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white dark:bg-[#162133] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    // defaultValue="jesse@example.com"
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Qualification
                                    </label>
                                    <input
                                        name="qualification"
                                        value={formData.qualification}
                                        onChange={handleInputChange}
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white dark:bg-[#162133] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    // defaultValue="Your Qualification"
                                    />
                                </div>
                            </div>
                            {/* <div className="w-full lg:w-12/12 px-4"></div> */}
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="profile-picture"
                                    >
                                        Upload Logo
                                    </label>
                                    <input
                                        name="logo"
                                        value={formData.logo}
                                        onChange={handleInputChange}
                                        type="file"
                                        accept="image/*"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white dark:bg-[#162133] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    // onChange={handleProfilePictureChange} // You can add an onChange event handler if needed
                                    />
                                </div>
                            </div>


                        </div>



                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-12/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Contact Number
                                    </label>
                                    <input
                                        name="contactNo"
                                        value={formData.contactNo}
                                        onChange={handleInputChange}
                                        type="number"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white dark:bg-[#162133] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    // defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        licenceNumber
                                    </label>
                                    <input
                                        name="licenceNumber"
                                        value={formData.licenceNumber}
                                        onChange={handleInputChange}
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 dark:bg-[#162133] bg-white dark:bg-[#101929] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    // defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                                    />
                                </div>
                            </div>

                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Upload Documents
                                    </label>
                                    <input
                                        name="labDocument"
                                        value={formData.labDocument}
                                        onChange={handleInputChange}
                                        type="file"
                                        accept="image/*"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white dark:bg-[#162133] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    // onChange={handleProfilePictureChange} // You can add an onChange event handler if needed
                                    />
                                </div>
                            </div>

                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="time-range"
                                    >
                                        lab Availability
                                    </label>
                                    <div className="flex flex-wrap items-center">
                                        {/* Mon */}

                                        <div className="flex items-center mb-2 w-full sm:w-auto sm:mr-4">
                                            <input
                                                type="checkbox"
                                                id="mon"
                                                name="week"
                                                className="mr-2"
                                            />
                                            <label htmlFor="mon" className="text-blueGray-600">Monday:</label>
                                            <select
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white dark:bg-[#101929] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ml-2 w-64 md:w-80"
                                                defaultValue="09:00 AM"
                                            >
                                                {/* Options for Start Time */}
                                                <option value="08:00 AM">08:00 AM</option>
                                                <option value="09:00 AM">09:00 AM</option>
                                                <option value="10:00 AM">10:00 AM</option>
                                                <option value="11:00 AM">11:00 AM</option>
                                                <option value="12:00 PM">12:00 PM</option>
                                                {/* Add more options as needed */}
                                            </select>
                                            <span className="text-blueGray-600">to</span>
                                            <select
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white dark:bg-[#101929] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ml-2 w-64 "
                                                defaultValue="05:00 PM"
                                            >
                                                {/* Options for End Time */}
                                                <option value="05:00 PM">05:00 PM</option>
                                                <option value="06:00 PM">06:00 PM</option>
                                                <option value="07:00 PM">07:00 PM</option>
                                                <option value="08:00 PM">08:00 PM</option>
                                                <option value="09:00 PM">09:00 PM</option>
                                                {/* Add more options as needed */}
                                            </select>
                                        </div>
                                        <div className="flex items-center mb-2 w-full sm:w-auto sm:mr-4">
                                            <input
                                                type="checkbox"
                                                id="mon"
                                                name="week"
                                                className="mr-2"
                                            />
                                            <label htmlFor="mon" className="text-blueGray-600">Tuesday:</label>
                                            <select
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white dark:bg-[#101929] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ml-2 w-64 md:w-80"
                                                defaultValue="09:00 AM"
                                            >
                                                {/* Options for Start Time */}
                                                <option value="08:00 AM">08:00 AM</option>
                                                <option value="09:00 AM">09:00 AM</option>
                                                <option value="10:00 AM">10:00 AM</option>
                                                <option value="11:00 AM">11:00 AM</option>
                                                <option value="12:00 PM">12:00 PM</option>
                                                {/* Add more options as needed */}
                                            </select>
                                            <span className="text-blueGray-600">to</span>
                                            <select
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white dark:bg-[#101929] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ml-2 w-64 "
                                                defaultValue="05:00 PM"
                                            >
                                                {/* Options for End Time */}
                                                <option value="05:00 PM">05:00 PM</option>
                                                <option value="06:00 PM">06:00 PM</option>
                                                <option value="07:00 PM">07:00 PM</option>
                                                <option value="08:00 PM">08:00 PM</option>
                                                <option value="09:00 PM">09:00 PM</option>
                                                {/* Add more options as needed */}
                                            </select>
                                        </div>
                                        <div className="flex items-center mb-2 w-full sm:w-auto sm:mr-4">
                                            <input
                                                type="checkbox"
                                                id="mon"
                                                name="week"
                                                className="mr-2"
                                            />
                                            <label htmlFor="mon" className="text-blueGray-600">Wednes:</label>
                                            <select
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white dark:bg-[#101929] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ml-2 w-64 md:w-80"
                                                defaultValue="09:00 AM"
                                            >
                                                {/* Options for Start Time */}
                                                <option value="08:00 AM">08:00 AM</option>
                                                <option value="09:00 AM">09:00 AM</option>
                                                <option value="10:00 AM">10:00 AM</option>
                                                <option value="11:00 AM">11:00 AM</option>
                                                <option value="12:00 PM">12:00 PM</option>
                                                {/* Add more options as needed */}
                                            </select>
                                            <span className="text-blueGray-600">to</span>
                                            <select
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white dark:bg-[#101929] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ml-2 w-64"
                                                defaultValue="05:00 PM"
                                            >
                                                {/* Options for End Time */}
                                                <option value="05:00 PM">05:00 PM</option>
                                                <option value="06:00 PM">06:00 PM</option>
                                                <option value="07:00 PM">07:00 PM</option>
                                                <option value="08:00 PM">08:00 PM</option>
                                                <option value="09:00 PM">09:00 PM</option>
                                                {/* Add more options as needed */}
                                            </select>
                                        </div>
                                        <div className="flex items-center mb-2 w-full sm:w-auto sm:mr-4">
                                            <input
                                                type="checkbox"
                                                id="thr"
                                                name="thr"
                                                className="mr-2"
                                            />
                                            <label htmlFor="thr" className="text-blueGray-600">Thrusda:</label>
                                            <select
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white dark:bg-[#101929] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ml-2 w-64 md:w-80"
                                                defaultValue="09:00 AM"
                                            >
                                                {/* Options for Start Time */}
                                                <option value="08:00 AM">08:00 AM</option>
                                                <option value="09:00 AM">09:00 AM</option>
                                                <option value="10:00 AM">10:00 AM</option>
                                                <option value="11:00 AM">11:00 AM</option>
                                                <option value="12:00 PM">12:00 PM</option>
                                                {/* Add more options as needed */}
                                            </select>
                                            <span className="text-blueGray-600">to</span>
                                            <select
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white dark:bg-[#101929] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ml-2 w-64 w-64"
                                                defaultValue="05:00 PM"
                                            >
                                                {/* Options for End Time */}
                                                <option value="05:00 PM">05:00 PM</option>
                                                <option value="06:00 PM">06:00 PM</option>
                                                <option value="07:00 PM">07:00 PM</option>
                                                <option value="08:00 PM">08:00 PM</option>
                                                <option value="09:00 PM">09:00 PM</option>
                                                {/* Add more options as needed */}
                                            </select>
                                        </div>
                                        <div className="flex items-center mb-2 w-full sm:w-auto sm:mr-4">
                                            <input
                                                type="checkbox"
                                                id="mon"
                                                name="week"
                                                className="mr-2"
                                            />
                                            <label htmlFor="mon" className="text-blueGray-600">Friday:&nbsp;&nbsp;&nbsp;&nbsp; </label>
                                            <select
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white dark:bg-[#101929] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ml-2 w-64 md:w-80"
                                                defaultValue="09:00 AM"
                                            >
                                                {/* Options for Start Time */}
                                                <option value="08:00 AM">08:00 AM</option>
                                                <option value="09:00 AM">09:00 AM</option>
                                                <option value="10:00 AM">10:00 AM</option>
                                                <option value="11:00 AM">11:00 AM</option>
                                                <option value="12:00 PM">12:00 PM</option>
                                                {/* Add more options as needed */}
                                            </select>
                                            <span className="text-blueGray-600">to</span>
                                            <select
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white dark:bg-[#101929] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ml-2 w-64"
                                                defaultValue="05:00 PM"
                                            >
                                                {/* Options for End Time */}
                                                <option value="05:00 PM">05:00 PM</option>
                                                <option value="06:00 PM">06:00 PM</option>
                                                <option value="07:00 PM">07:00 PM</option>
                                                <option value="08:00 PM">08:00 PM</option>
                                                <option value="09:00 PM">09:00 PM</option>
                                                {/* Add more options as needed */}
                                            </select>
                                        </div>
                                        <div className="flex items-center mb-2 w-full sm:w-auto sm:mr-4">
                                            <input
                                                type="checkbox"
                                                id="mon"
                                                name="week"
                                                className="mr-2"
                                            />
                                            <label htmlFor="mon" className="text-blueGray-600">Saturda:&nbsp;</label>
                                            <select
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white dark:bg-[#101929] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ml-2 w-64 md:w-80"
                                                defaultValue="09:00 AM"
                                            >
                                                {/* Options for Start Time */}
                                                <option value="08:00 AM">08:00 AM</option>
                                                <option value="09:00 AM">09:00 AM</option>
                                                <option value="10:00 AM">10:00 AM</option>
                                                <option value="11:00 AM">11:00 AM</option>
                                                <option value="12:00 PM">12:00 PM</option>
                                                {/* Add more options as needed */}
                                            </select>
                                            <span className="text-blueGray-600">to</span>
                                            <select
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white dark:bg-[#101929] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ml-2 w-64"
                                                defaultValue="05:00 PM"
                                            >
                                                {/* Options for End Time */}
                                                <option value="05:00 PM">05:00 PM</option>
                                                <option value="06:00 PM">06:00 PM</option>
                                                <option value="07:00 PM">07:00 PM</option>
                                                <option value="08:00 PM">08:00 PM</option>
                                                <option value="09:00 PM">09:00 PM</option>
                                                {/* Add more options as needed */}
                                            </select>
                                        </div>
                                        <div className="flex items-center mb-2 w-full sm:w-auto sm:mr-4">
                                            <input
                                                type="checkbox"
                                                id="mon"
                                                name="week"
                                                className="mr-2"
                                            />
                                            <label htmlFor="mon" className="text-blueGray-600">Sunday:&nbsp;&nbsp;</label>
                                            <select
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white dark:bg-[#101929] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ml-2 w-64 md:w-80"
                                                defaultValue="09:00 AM"
                                            >
                                                {/* Options for Start Time */}
                                                <option value="08:00 AM">08:00 AM</option>
                                                <option value="09:00 AM">09:00 AM</option>
                                                <option value="10:00 AM">10:00 AM</option>
                                                <option value="11:00 AM">11:00 AM</option>
                                                <option value="12:00 PM">12:00 PM</option>
                                                {/* Add more options as needed */}
                                            </select>
                                            <span className="text-blueGray-600">to</span>
                                            <select
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white dark:bg-[#101929] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ml-2 w-64"
                                                defaultValue="05:00 PM"
                                            >
                                                {/* Options for End Time */}
                                                <option value="05:00 PM">05:00 PM</option>
                                                <option value="06:00 PM">06:00 PM</option>
                                                <option value="07:00 PM">07:00 PM</option>
                                                <option value="08:00 PM">08:00 PM</option>
                                                <option value="09:00 PM">09:00 PM</option>
                                                {/* Add more options as needed */}
                                            </select>
                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>


                        <div className="flex justify-center items-center">
                            <button
                                type="submit"
                                className="mt-2 px-5 p-2 text-sm rounded-lg border-blue-600 bg-blue-600 hover:scale-105 shadow text-white"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default VendorRegistrationForm