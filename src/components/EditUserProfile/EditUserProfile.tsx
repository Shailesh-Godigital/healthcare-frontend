
import  { useState } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";

interface UserData {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    status: string;


}
interface EditLabformProps {
    userData: UserData;
}

export default function EditLabform({ userData }: EditLabformProps) {



    const [formData, setFormData] = useState({
        _id: userData._id,
        firstName: userData.firstName || '',
        lastName: userData.lastName || '',
        email: userData.email || '',
        role: userData.role || '',
        status: userData.status || '',

    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleSubmit = async () => {
        try {
            console.log(formData);

            let apiUrl = `${import.meta.env.VITE_REACT_APP_BASE_URL}/api/v1/auth/register`;

            
            const newUser = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                role: formData.role,
                password: `${formData.firstName}@1234`,
                status:"pending"
            }
            console.log("🚀 ~ handleSubmit ~ newUser:", newUser)

            // const newUserd = {
            //     email:"shailesh11@gmail.com",
            //     password:"Shailesh@1234",
            //     firstName:"Shailesh212",
            //     lastName:"11",
            //     role:"user",
            // status:"pending"
            // }
            // console.log("🚀 ~ handleSubmit ~ newUserd:", newUserd)
        
            if (!newUser.firstName || !newUser.lastName || !newUser.password || !newUser.email) {
                toast.error("Please fill all the fields");
                return;
              }
              if (!validateEmail(newUser.email)) {
                toast("Invalid Email format", {
                  icon: "❗",
                });
                return;
              }
              if (!validatePassword(newUser.password)) {
                toast(
                  "FirstName first letter Must be in Capital ",
                  {
                    duration: 4000,
                    icon: "❗",
                  }
                );
                return;
              }  


            let response = await axios.post(apiUrl, newUser);
            console.log(response.data);

            // Update the form data with the response data
            setFormData(response.data);

            alert('Thank you for submitting your form.');
            window.location.reload();

        } catch (error) {
            console.log(error);
            
            console.error('Error saving data:', error);
        }
    };

    const handleEdit = async (status: string) => {
        try {
            let apiUrl = `${import.meta.env.VITE_REACT_APP_BASE_URL}/api/v1/users/update/${userData._id}`;

            // Include the status in the formData
            const updatedFormData = { ...formData, status };

            let response = await axios.put(apiUrl, updatedFormData);
            console.log(response.data);

            // Update the form data with the response data
            setFormData(response.data);

            alert('Thank you for submitting your form.');
            window.location.reload();

        } catch (error) {
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
                    <h4 className="text-center m-5 text-xl ">Registered User Form</h4>
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
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Role
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        id="role"
                                        name="role"
                                        value={formData.role}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* <div className="flex flex-wrap">
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Status
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        id="status"
                                        name="status"
                                        value={formData.status}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                           
                        </div> */}

                        <div className="flex justify-center mt-6">
                            {formData._id ? (
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
                                    </button> </>
                            ) : (
                                <button
                                    type="button"
                                    onClick={() => handleSubmit()}
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

const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };
  const validatePassword = (password: string): boolean => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    return passwordRegex.test(password);
  };
