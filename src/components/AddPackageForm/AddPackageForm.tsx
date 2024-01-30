
import  { useState, } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
interface UserData {
    _id: string;
    category: string;
    subCategory: string;
    packageName: string;
    packageDescription: string;
    packageUrl: string;


}
interface EditLabformProps {
    packageData: UserData;
}

export default function AddPackageForm({ packageData }: EditLabformProps) {



    const [formData, setFormData] = useState({
        id: packageData._id || '',
        category: packageData.category || '',
        subCategory: packageData.subCategory || '',
        packageName: packageData.packageName || '',
        packageDescription: packageData.packageDescription || '',
        packageUrl: packageData.packageUrl || '',

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

            let apiUrl = `${import.meta.env.VITE_REACT_APP_BASE_URL}/api/v1/package/register`;

            // Include the status in the formData
            // const updatedFormData = { ...formData, status };

            let response = await axios.post(apiUrl, formData);
            console.log(response.data);

            // Update the form data with the response data
            setFormData(response.data);

            alert('Thank you for submitting your form.');
            window.location.reload();

        } catch (error) {
            console.error('Error saving data:', error);
        }
    };
    const handleEdit = async (formData:any) => {
        try {
            console.log(formData);
            
            const { _id, ...updatedData } = formData;
            const apiUrl = `${import.meta.env.VITE_REACT_APP_BASE_URL}/api/v1/package/update/${formData.id}`;
    
            console.log("🚀 ~ handleEdit ~ apiUrl:", apiUrl)
            console.log(updatedData);
            
            const response = await axios.put(apiUrl, updatedData);
            console.log(response.data);
    
            // Optionally, update the form data with the response data
            // setFormData(response.data);
    
            alert('Thank you for submitting your form.');
            window.location.reload();
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };
    
    // const handleEdit = async (formData: any) => {
    //     try {
    //         console.log(formData);

    //         let apiUrl = `http://localhost:5000/api/v1/package/update/${formData._id}`;

    //         // Include the status in the formData
    //         // const updatedFormData = { ...formData, _id };
    //         const { _id, ...data } = formData;
    //         console.log("🚀 ~ handleEdit ~ data:", data);

    //         let response = await axios.put(apiUrl, data);
    //         console.log(response.data);

    //         // Update the form data with the response data
    //         setFormData(response.data);

    //         alert('Thank you for submitting your form.');
    //         window.location.reload();

    //     } catch (error) {
    //         console.error('Error saving data:', error);
    //     }
    // };



    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">

                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <h4 className="text-center m-5 text-xl ">Add Package Form</h4>
                    <form >

                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Category Name
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        id="category"
                                        name="category"
                                        value={formData.category}
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
                                        SubCategory Name
                                    </label>
                                    <input
                                        type="subCategory"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        id="subCategory"
                                        name="subCategory"
                                        value={formData.subCategory}
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
                                        Package Name
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        id="packageName"
                                        name="packageName"
                                        value={formData.packageName}
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
                                        Package Url
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        id="packageUrl"
                                        name="packageUrl"
                                        value={formData.packageUrl}
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
                                        Description
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        id="packageDescription"
                                        name="packageDescription"
                                        value={formData.packageDescription}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                        </div>

                        <div className="flex justify-center mt-6">
                            {formData.id ? (
                                <button
                                    type="button"
                                    onClick={() => handleEdit(formData)}
                                    className="bg-green-500 text-white active:bg-green-800 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                >
                                    Submit
                                </button>
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

