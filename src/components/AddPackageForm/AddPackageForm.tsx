import { useState } from 'react';
import axios from 'axios';

interface UserData {
    // [x: string]: any;
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
    const titleOptions = ['Blood Test', 'Labs & Scans'];

    const [formData, setFormData] = useState<UserData>({
        _id: packageData._id || '',
        title: packageData.title || '',
        subTitle: packageData.subTitle || '',
        price: packageData.price || '',
        discount: packageData.discount || '0',
        description: packageData.description || ''
    });
    console.log("Form dats",formData);
    

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleEdit = async () => {
        try {
            console.log(formData);

            let apiUrl = `${import.meta.env.VITE_REACT_APP_BASE_URL}/api/v1/mainPackage/updatePackage/${formData._id}`;


            let response = await axios.put(apiUrl, formData);
            console.log(response.data);

           

            alert('Thank you for submitting your form.');
            window.location.reload();

        } catch (error) {
            console.error('Error saving data:', error);
        }
    };

    const handleSubmit = async () => {
        try {
            const { _id, ...newData } = formData;
            console.log("🚀 ~ handleSubmit ~ formData:", formData)
            console.log(newData);
            
            const isAnyFieldEmpty = Object.values(newData).some(value => !value.trim());
            if (isAnyFieldEmpty) {
                alert('Please fill out all fields.');
                return;
            }

            console.log(formData);
            const apiUrl = `${import.meta.env.VITE_REACT_APP_BASE_URL}/api/v1/mainPackage/register`;
            const response = await axios.post(apiUrl, formData);
            console.log(response.data);
            alert('Package added Successfully');
            window.location.reload();
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };

    return (
        <>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <h4 className="text-center m-5 text-xl ">Add Package </h4>
                <form>
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="title">
                                    Title
                                </label>
                                <select
                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    id="title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Title</option>
                                    {titleOptions.map((option, index) => (
                                        <option key={index} value={option}>
                                            {option}
                                        </option>
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
                        {/* <div className="flex flex-wrap">
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


                        </div> */}
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
                            {!(formData._id === '') ?
                           
                            
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

