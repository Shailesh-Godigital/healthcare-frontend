export {default as AddPackageForm} from './AddPackageForm'



import { useState, } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
interface UserData {
    _id: string;
    title: string;
    subTitle: string;
    price: string;
    description: string;
    discount: string;


}
interface EditLabformProps {
    packageData: UserData;
}

export default function AddPackageForm({ packageData }: EditLabformProps) {

    const title = ['Blood Test', 'Labs & Scans']

    const [formData, setFormData] = useState({
        id: packageData._id || '',
        title: packageData.title || '',
        subTitle: packageData.subTitle || '',
        price: packageData.price || '',
        discount: packageData.discount || '',
        description: packageData.description || ''

    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleEdit = async () => {
        try {
            console.log(formData);

            let apiUrl = `${import.meta.env.VITE_REACT_APP_BASE_URL}/api/v1/mainPackage/updatePackage/${formData.id}`;

            // console.log("🚀 ~ handleSubmit ~ apiUrl:", apiUrl)

            // const { title,packageName,packageUrl,id, ...restFormData } = formData;

            // // Set password to a new value in newData
            // const newData = {
            //     ...restFormData,  // Include other properties from formData
            //     contents: {
            //         "title":formData.packageName,
            //         "href":formData.packageUrl
            //     },  // Set password to a new value
            // };
            // console.log("🚀 ~ handleSubmit ~ newData:", newData)


            let response = await axios.put(apiUrl, formData);
            console.log(response.data);

            // Update the form data with the response data
            // setFormData(response.data);

            alert('Thank you for submitting your form.');
            window.location.reload();

        } catch (error) {
            console.error('Error saving data:', error);
        }
    };
    const handleSubmit = async () => {
        try {
            console.log(formData);

            let apiUrl = `${import.meta.env.VITE_REACT_APP_BASE_URL}/api/v1/mainPackage/register`;

            // console.log("🚀 ~ handleSubmit ~ apiUrl:", apiUrl)

            // const { title,packageName,packageUrl,id, ...restFormData } = formData;

            // // Set password to a new value in newData
            // const newData = {
            //     ...restFormData,  // Include other properties from formData
            //     contents: {
            //         "title":formData.packageName,
            //         "href":formData.packageUrl
            //     },  // Set password to a new value
            // };
            // console.log("🚀 ~ handleSubmit ~ newData:", newData)


            let response = await axios.post(apiUrl, formData);
            console.log(response.data);

            // Update the form data with the response data
            // setFormData(response.data);

            alert('Package added Sucessfully');
            window.location.reload();

        } catch (error) {
            console.error('Error saving data:', error);
        }
    };


    // const handleEdit = async (formData:any) => {
    //     try {
    //         console.log(formData);
            
    //         const { _id, ...updatedData } = formData;
    //         const apiUrl = `${import.meta.env.VITE_REACT_APP_BASE_URL}/api/v1/package/update/${formData.id}`;
    
    //         console.log("🚀 ~ handleEdit ~ apiUrl:", apiUrl)
    //         console.log(updatedData);
            
    //         const response = await axios.put(apiUrl, updatedData);
    //         console.log(response.data);
    
    //         // Optionally, update the form data with the response data
    //         // setFormData(response.data);
    
    //         alert('Thank you for submitting your form.');
    //         window.location.reload();
    //     } catch (error) {
    //         console.error('Error saving data:', error);
    //     }
    // };
    
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
                    <h4 className="text-center m-5 text-xl ">Add Package </h4>
                    <form >

                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Title
                                    </label>
                                    <select
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        id="title"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                    >
                                        {title.map((role, index) => (
                                            <option key={index} value={role}>{role}</option>
                                        ))}
                                    </select>

                                </div>
                            </div>

                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Sub Title
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        id="subTitle"
                                        name="subTitle"
                                        value={formData.subTitle}
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
                                        Price
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        id="price"
                                        name="price"
                                        value={formData.price}
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
                                        Discount
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        id="discount"
                                        name="discount"
                                        value={formData.discount}
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
                                        Description
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        id="description"
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>


                        </div>

                        <div className="flex justify-center mt-6">
                            {formData.id ?
                                (<button
                                    type="button"
                                    onClick={() => handleEdit()}
                                    className="bg-green-500 text-white active:bg-green-800 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                >
                                    Change
                                </button>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={() => handleSubmit()}
                                        className="bg-green-500 text-white active:bg-green-800 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                    >
                                        Add
                                    </button>
                                )
                            }
                        </div>


                    </form>
                </div >
            </div >
        </>
    )
}

