
import { useEffect, useState } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";

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
        // firstName: firstName || '',
        // lastName: lastName || '',
        // // role: role || '',
        // newPassword: '',
        // confirmNewPassword:'',
        // email: email || ''

        firstName: '',
        lastName: '',
        // role: role || '',
        newPassword: '',
        confirmNewPassword: '',
        email: ''

    });
    const [showPasswordFields, setShowPasswordFields] = useState(false);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleChangePassword = () => {
        setShowPasswordFields(true);
    };

    const fetchuserData = async () => {
        try {
            let apiUrl = `${import.meta.env.VITE_REACT_APP_BASE_URL}/api/v1/user/${userId}`
            let response = await axios.get(apiUrl)
            // console.log(response);
            setFormData(response.data)
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchuserData()
    }, [])

    const handleSubmit = async () => {
        try {
            // console.log(formData);

            let apiUrl = `${import.meta.env.VITE_REACT_APP_BASE_URL}/api/v1/users/update/${userId}`

            // console.log("🚀 ~ handleSubmit ~ apiUrl:", apiUrl)

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

            let response = await axios.put(apiUrl, newData);
            setFormData(response.data);
            alert('Thank you Details Updated Succesfully.');
            window.location.reload();

        } catch (error) {
            console.log(error);

            console.error('Error saving data:', error);
        }
    };





    return (
        <>
            <div>
                <Toaster />
            </div>

            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">

                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <h4 className="text-center m-5 text-xl ">Edit Profile</h4>
                    <form >

                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
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
