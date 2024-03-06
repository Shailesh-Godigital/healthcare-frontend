import { useState, } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

interface VendorData {
    _id: string;
    labName: string;
    ownerName: string;
    labServices: string;
    labEmail: string;
    qualification: string;
    logo: string;
    contactNo: string;
    licenceNumber: string;
    labAvailability: string;
    labDocument: string;
    status: string;
    remark: string;

}
interface EditLabformProps {
    vendorData: VendorData;
}

export default function EditLabform({ vendorData }: EditLabformProps) {

    // const navigate = useNavigate()

    const [formData, setFormData] = useState({
        id: vendorData._id || '',
        labName: vendorData.labName || '',
        ownerName: vendorData.ownerName || '',
        labServices: vendorData.labServices || '',
        labEmail: vendorData.labEmail || '',
        qualification: vendorData.qualification || '',
        licenceNumber: vendorData.licenceNumber || '',
        contactNo: vendorData.contactNo || '',
        labDocument: vendorData.labDocument || '',
        logo: vendorData.logo || '',
        labAvailability: vendorData.labAvailability || '',
        remark: vendorData.remark || '',
        status: vendorData.status || '',
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleEdit = async (status: string) => {
        try {
            let apiUrl = `${import.meta.env.VITE_REACT_APP_BASE_URL}/api/v1/labVender/update/${vendorData._id}`;
            let apiUrlUser = `${import.meta.env.VITE_REACT_APP_BASE_URL}/api/v1/auth/register`;

            // Include the status in the formData
            const updatedFormData = { ...formData, status };

            if (updatedFormData.status === "approved") {

                const trimmedFirstName = updatedFormData.ownerName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');

                const newUser = {
                    firstName: updatedFormData.ownerName,
                    lastName: updatedFormData.labName,
                    email: updatedFormData.labEmail,
                    role: "labVendor",
                    password: `${trimmedFirstName}@1234`,
                    status: "approved",
                    labId:updatedFormData.id
                };
                console.log("🚀 ~ handleEdit ~ newUser:", newUser)

                // Use a different variable for the response from user registration
                let userResponse = await axios.post(apiUrlUser, newUser);
                console.log(userResponse.data);
            }

            // Now, update the vendor data
            let response = await axios.put(apiUrl, updatedFormData);
            console.log(response.data);

            // Update the form data with the response data
            setFormData(response.data);

            alert('Thank you for submitting your form.');

            // Displaying an alert with the filled details

            // Now, navigate after the asynchronous code has completed
            window.location.reload();
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };



    // const handleSubmit = async () => {

    //     // Displaying an alert with the filled details
    //     alert("Thank you for submitting your form. It is under review.");

    //     try {
    //         console.log(formData);
    //         // let apiUrl = `${process.env.REACT_APP_BASE_URL}/api/v1/labVender/register`;
    //         let apiUrl = `http://localhost:5000/api/v1/labVender/register`;

    //         let response = await axios.post(apiUrl, formData);
    //         console.log(response.data);

    //     } catch (error) {
    //         console.error('Error saving data:', error);
    //     }

    // };



    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">

                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <h4 className="text-center m-5 text-xl ">Lab Vendor Registration Form</h4>
                    <form >

                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Lab Name
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        id="labName"
                                        name="labName"
                                        value={formData.labName}
                                        onChange={handleChange}
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
                                        type="ownerName"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        id="ownerName"
                                        name="ownerName"
                                        value={formData.ownerName}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            {/* <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Lab Services
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        id="labServices"
                                        name="labServices"
                                        value={formData.labServices}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div> */}
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Lab Email
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        id="labEmail"
                                        name="labEmail"
                                        value={formData.labEmail}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Qualification
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        id="qualification"
                                        name="qualification"
                                        value={formData.qualification}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Licence Number
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        id="licenceNumber"
                                        name="licenceNumber"
                                        value={formData.licenceNumber}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        contactNo
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        id="contactNo"
                                        name="contactNo"
                                        value={formData.contactNo}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Lab Documents
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        id="labDocument"
                                        name="labDocument"
                                        value={formData.labDocument}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Lab Logo
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        id="logo"
                                        name="logo"
                                        value={formData.logo}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-12/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Remark
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        id="remark"
                                        name="remark"
                                        value={formData.remark}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center mt-6">
                            {formData.id ? (
                                <>
                                    {formData.status === "approved" ? (
                                        <button
                                            type="button"
                                            onClick={() => handleEdit("pending")}
                                            className="bg-yellow-500 text-white active:bg-yellow-800 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                        >
                                            Pending
                                        </button>
                                    ) : (
                                        <>
                                            <button
                                                type="button"
                                                onClick={() => handleEdit("approved")}
                                                className="bg-green-500 text-white active:bg-green-800 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                            >
                                                Approve
                                            </button>

                                            <button
                                                type="button"
                                                onClick={() => handleEdit("rejected")}
                                                className="bg-red-500 text-white active:bg-red-800 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                            >
                                                Reject
                                            </button>

                                            <button
                                                type="button"
                                                onClick={() => handleEdit("pending")}
                                                className="bg-yellow-500 text-white active:bg-yellow-800 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                            >
                                                Pending
                                            </button>
                                        </>
                                    )}
                                </>
                            ) : (
                                <button
                                    type="button"
                                    onClick={() => handleEdit("pending")}
                                    className="bg-green-500 text-white active:bg-green-800 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                >
                                    Add
                                </button>
                            )}
                        </div>



                    </form>
                </div >
            </div >
        </>
    )
}

