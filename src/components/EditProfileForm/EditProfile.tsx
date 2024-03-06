
import { useEffect, useState } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";

// interface UserData {
//     _id: string;
//     firstName: string;
//     lastName: string;
//     email: string;
//     role: string;
//     status: string;
// }
// interface EditLabformProps {
//     userData: UserData;
// }

export default function EditProfileForm() {

    const userId = sessionStorage.getItem("userId")
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        role: '',
        newPassword: '',
        confirmNewPassword: '',
        email: '',
        labId: []

    });

    const [labAddres, SetAddress] = useState({
        line1: '',
        line2: '',
        landmark: '',
        pincode: ''
    })
    const [showPasswordFields, setShowPasswordFields] = useState(false);
    const [labId, setLabId] = useState()
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleChangeAddress = (e: any) => {
        const { name, value } = e.target;
        SetAddress((prevAddress) => ({
            ...prevAddress,
            [name]: value
        }));
    }


    const handleChangePassword = () => {
        setShowPasswordFields(true);
    };

    const fetchuserData = async () => {
        try {
            let apiUrl = `${import.meta.env.VITE_REACT_APP_BASE_URL}/api/v1/user/${userId}`
            let response = await axios.get(apiUrl)
            console.log(response.data);
            setFormData(response.data[0])
            console.log("🚀 ~ fetchuserData ~ response.data[0]:", response.data[0].labId[0]._id)
            setLabId(response.data[0].labId[0]._id)
            SetAddress(response.data[0].labId[0].labAddress[0])

        } catch (error) {
            console.log(error);

        }

    }

    useEffect(() => {
        fetchuserData()
        console.log(labAddres);

    }, [])

    // useEffect(() => {
    //     // console.log(formData); 
    //     fetchuserData()// Log formData after it gets updated
    // }, [formData]);

    const handleSubmit = async () => {
        try {
            // console.log(formData);

            let apiUrl = `${import.meta.env.VITE_REACT_APP_BASE_URL}/api/v1/users/update/${userId}`

            // console.log("🚀 ~ handleSubmit ~ apiUrl:", apiUrl)
            console.log("formdd", formData);

            if (!formData.firstName || !formData.lastName || !formData.email) {
                toast.error("Please fill all the fields");
                return;
            }

            if (formData.newPassword || formData.confirmNewPassword) {
                // Check password fields only if setShowPasswordFields is not set to false
                if (!formData.newPassword || !formData.confirmNewPassword) {
                    toast.error("Please fill in both password fields");
                    return;
                }


            }
            if (!validateEmail(formData.email)) {
                toast("Invalid Email format", {
                    icon: "❗",
                });
                return;
            }
            const { newPassword, confirmNewPassword, ...restFormData } = formData;

            // Set password to a new value in newData
            const newData = {
                ...restFormData,  // Include other properties from formData
                password: confirmNewPassword,  // Set password to a new value
            };
            console.log("🚀 ~ handleSubmit ~ newData:", newData)

            let response = await axios.put(apiUrl, newData);
            setFormData(response.data);
            alert('Thank you Details Updated Succesfully.');
            window.location.reload();

        } catch (error) {
            console.log(error);
            console.error('Error saving data:', error);
        }
    };
    const labAddress = {
        "line1": labAddres.line1,
        "line2": labAddres.line2,
        "landmark": labAddres.landmark,
        "pincode": labAddres.pincode,
    }
    console.log("🚀 ~ labAddress:", labAddress)

    const submitAddress = async () => {
        try {
            console.log(labId);
            console.log(labAddress);

            let apiUrl = `${import.meta.env.VITE_REACT_APP_BASE_URL}/api/v1/labVender/update/${labId}`

            let response = await axios.put(apiUrl, { labAddress });
            SetAddress(response.data)
            alert(' Your Address Details Updated Succesfully.');
            window.location.reload();
            console.log("🚀 ~ submitAddress ~ response:", response.data)

        } catch (error) {
            console.log(error);

        }
    }


    return (
        <>
            {console.log(formData)}
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <h4 className="text-center m-5 text-xl">Edit Profile</h4>
                    <form>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="firstName">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName} // Set value to corresponding formData property
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
                                        Last Name
                                    </label>
                                    <input
                                        type="lastName"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
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
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        readOnly
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4"></div>



                            {showPasswordFields && (

                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            New Password
                                        </label>
                                        <input
                                            type="password"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            id="password"
                                            name="newPassword"
                                            // value={formData.newPassword}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            )}
                            {showPasswordFields && (
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Confirm New Password
                                        </label>
                                        <input
                                            type="password"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            id="confirmNewPassword"
                                            name="confirmNewPassword"
                                            // value={formData.confirmNewPassword}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            )}



                            <div className="flex w-full lg:w-12/12 justify-center mt-6">
                                {/* {formData.role == "labVendor" && (
                                    // <div className="flex justify-center mt-6">
                                    <button
                                        type="button"
                                        onClick={handleChangePassword}
                                        className="bg-blue-500 text-white active:bg-blue-800 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                    >
                                        Add LabAddres
                                    </button>
                                    // </div>
                                )} */}

                                {!showPasswordFields && (
                                    // <div className="flex justify-center mt-6">
                                    <button
                                        type="button"
                                        onClick={handleChangePassword}
                                        className="bg-blue-500 text-white active:bg-blue-800 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                    >
                                        Change Password
                                    </button>
                                    // </div>
                                )}

                                {showPasswordFields && (
                                    <button
                                        type="button"
                                        onClick={() => setShowPasswordFields(false)}
                                        className="bg-blue-500 text-white active:bg-blue-800 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                    >
                                        Cancel
                                    </button>
                                )}

                                {(
                                    <button
                                        type="button"
                                        onClick={handleSubmit}
                                        className="bg-green-500 text-white active:bg-green-800 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                    >
                                        Change
                                    </button>
                                )}
                            </div>

                        </div>






                    </form>
                </div >
            </div >
            {formData.role == "labVendor" && (
                <div className="dark:bg-gray-900">
                    <div className="w-full max-w-3xl mx-auto p-8">
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700">
                            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">Lab Address</h1>


                            <div className="mb-6">
                                {/* <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">Shipping Address</h2> */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-700 dark:text-white mb-1">Address Line 1</label>
                                        <input type="text" id="line1" name='line1' value={labAddres.line1}
                                            onChange={handleChangeAddress} className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 dark:text-white mb-1">Address Line 2</label>
                                        <input type="text" id="line2" name='line2' value={labAddres.line2}
                                            onChange={handleChangeAddress} className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <label className="block text-gray-700 dark:text-white mb-1">Landmark</label>
                                    <input type="text" id="landmark" name='landmark' value={labAddres.landmark}
                                        onChange={handleChangeAddress} className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                                </div>



                                <div className="grid grid-cols-2 gap-4 mt-4">

                                    <div>
                                        <label className="block text-gray-700 dark:text-white mb-1">ZIP Code</label>
                                        <input type="text" id="pincode" name='pincode' value={labAddres.pincode}
                                            onChange={handleChangeAddress} className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                                    </div>
                                </div>
                            </div>




                            <div className="mt-8 flex justify-center">
                                <button
                                    type="button"
                                    onClick={submitAddress}
                                    className="bg-blue-500 text-white active:bg-blue-800 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                >
                                    Save Address
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}



        </>
    )
}

const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
};
// const validatePassword = (password: string): boolean => {
//     const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
//     return passwordRegex.test(password);
// };
