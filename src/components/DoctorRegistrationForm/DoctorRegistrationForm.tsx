import { useState, useEffect } from "react";
import axios from 'axios';
import Selectmulti from 'react-select';



function DoctorRegistrationForm() {

    const [formData, setFormData] = useState({
        name: "",
        specialization:'',
        city: '',
        doctorGender: '',
        registrationCouncil: '',
        registrationNumber: '',
        registrationYear: '',
        degree: '',
        institute: '',
        yearOfCompletion: '',
        experience: '',
        email: '',
        contactNumber: ''
    });

    const handleInputChange = (e:any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleGenderChange = (e:any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSpecializationChange = (selectedOption:any) => {

        setFormData({
            ...formData,
            
            specialization: selectedOption.value,
        });
    };

    const handleCityChange = (selectedOption:any) => {
        setFormData({
            ...formData,
            city: selectedOption.value,
        });
    };

    const handleRegistrationCouncilChange = (selectedOption:any) => {
        setFormData({
            ...formData,
            registrationCouncil: selectedOption.value,
        });
    };
   
    const handleRegistrationYearChange = (selectedOption:any) => {
        setFormData({
            ...formData,
            registrationYear: selectedOption.value,
        });
    };
    const handleDegreeChange = (selectedOption:any) => {
        setFormData({
            ...formData,
            degree: selectedOption.value,
        });
    };

    // const handleInstituteChange = (selectedOption:any) => {
    //     setFormData({
    //         ...formData,
    //         institute: selectedOption,
    //     });
    // };
    const handleYearOfCompletionChange = (selectedOption:any) => {
        setFormData({
            ...formData,
            yearOfCompletion: selectedOption.value,
        });
    };

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        console.log(formData);

        try {
            const apiUrl = `${import.meta.env.VITE_REACT_APP_BASE_URL}/api/v1/doctor/register`;
            const response = await axios.post(apiUrl, formData);
            console.log(response.data);
            alert("Thank you for registering with MyDr24");
            setFormData({
                name: "",
                specialization: '',
                city: '',
                doctorGender: '',
                registrationCouncil: '',
                registrationNumber: '',
                registrationYear: '',
                degree: '',
                institute: '',
                yearOfCompletion: '',
                experience: '',
                email: '',
                contactNumber: ''
            });
            window.location.reload();
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };




    const citiesOptions = [
        { value: '	Mumbai', label: '	Mumbai' },
        { value: 'Delhi  ', label: 'Delhi ' },
        { value: '	Bangalore', label: '	Bangalore' },
        { value: '	Hyderabad', label: '	Hyderabad' },
        { value: 'Ahmedabad', label: 'Ahmedabad' },
        { value: 'Chennai', label: 'Chennai' },
    ];

    const specializationOptions = [
        { value: 'General Physician', label: 'General Physician' },
        { value: 'Gynaecology ', label: 'Gynaecology ' },
        { value: 'Dermatology ', label: 'Dermatology ' },
        { value: 'Diabetology ', label: 'Diabetology ' },
        { value: 'Gastroenterology', label: 'Gastroenterology' },
        { value: 'Cardiology', label: 'Cardiology' },
        { value: 'Sexology', label: 'Sexology' },
        { value: 'Psychiatry', label: 'Psychiatry' },
        { value: 'Ent', label: 'Ent' },
        { value: 'Endocrinology', label: 'Endocrinology' },
        { value: 'Ayurveda', label: 'Ayurveda' },
        { value: 'Paediatrician', label: 'Paediatrician' },
        { value: 'Homeopathy', label: 'Homeopathy' },
        { value: 'Neurology', label: 'Neurology' },
        { value: 'Ophthalmology', label: 'Ophthalmology' },
        { value: 'Orthopedy', label: 'Orthopedy' },
        { value: 'Rheumatology', label: 'Rheumatology' },
        { value: 'Physiotherapy', label: 'Physiotherapy' },
        { value: 'Dentistry', label: 'Dentistry' },
        { value: 'Pulmonology', label: 'Pulmonology' },
        { value: 'Infertility', label: 'Infertility' },
    ];

    const councilOptions = [
        { value: 'Maharashtra Medical Council', label: 'Maharashtra Medical council' },
        { value: 'Delhi Medical council ', label: 'Delhi Medical council ' },
        { value: 'Karnataka Medical council ', label: 'Karnataka Medical council ' },
        { value: 'Maharashtra State Dental council ', label: 'Maharashtra State Dental council ' },
        { value: 'Tamil Nadu Medical council ', label: 'Tamil Nadu Medical council ' },
        { value: 'Andhra Pradesh Medical council ', label: 'Andhra Pradesh Medical council ' },
    ];

    const degreeOptions = [
        { value: 'MPTh/MPT-Advanced PT in Neurology', label: 'MPTh/MPT-Advanced PT in Neurology' },
        { value: 'M.Phil-Medical & Social Psychology', label: 'M.Phil-Medical & Social Psychology' },
        { value: 'MBS(H)', label: 'MBS(H)' },
        { value: "PG Diploma in Developmental Therapy (Multiple Disabilities: Physical and Neurological)", label: "PG Diploma in Developmental Therapy (Multiple Disabilities: Physical and Neurological)" },
        { value: "MSc. - Speech and Hearing", label: "MSc. - Speech and Hearing" },
        { value: "MSc. - Nutrition Sciences", label: "MSc. - Nutrition Sciences" },
        { value: "Masters of Physiotheraphy", label: "Masters of Physiotheraphy" },
        { value: "Post Graduate Diploma in Rehabilitation Psychology", label: "Post Graduate Diploma in Rehabilitation Psychology" },
        { value: "Certificate Course in Integrated Clinical Hypnotherapy", label: "Certificate Course in Integrated Clinical Hypnotherapy" },
        { value: "MPTh/MPT - Orthopedic Physiotherapy", label: "MPTh/MPT - Orthopedic Physiotherapy" },
        { value: "Bachelor in Prosthetics and Orthotics (BPO)", label: "Bachelor in Prosthetics and Orthotics (BPO)" },
        { value: "Masters in Human Development and Family Studies", label: "Masters in Human Development and Family Studies" },
        { value: "Advance Diploma in Child Guidance and Counselling", label: "Advance Diploma in Child Guidance and Counselling" },
        { value: "Doctorate in Chiropractic", label: "Doctorate in Chiropractic" },
        { value: "Diploma in Naturopathy & Yoga (NDDY)", label: "Diploma in Naturopathy & Yoga (NDDY)" },
        { value: "Post Graduate Diploma In Guidance and Counselling", label: "Post Graduate Diploma In Guidance and Counselling" },
        { value: "Diploma in Special Education (Hearing Impairment)", label: "Diploma in Special Education (Hearing Impairment)" },
        { value: "Post Graduate Diploma in Psychological Counseling", label: "Post Graduate Diploma in Psychological Counseling" },
        { value: "MSc - Nutrition and Dietetics", label: "MSc - Nutrition and Dietetics" },
        { value: "MSc - Clinical Nutrition and Dietetics", label: "MSc - Clinical Nutrition and Dietetics" },
        { value: "MSc - Food Science and Nutrition", label: "MSc - Food Science and Nutrition" },
        { value: "PhD - Clinical Nutrition", label: "PhD - Clinical Nutrition" },
        { value: "MSc - Counselling Psychology", label: "MSc - Counselling Psychology" },
        { value: "Fellowship in Aesthetic Medicine (FAM)", label: "Fellowship in Aesthetic Medicine (FAM)" },
        { value: 'UMSHCP', label: 'UMSHCP' },
        { value: "Special Distinction of Sexologist", label: "Special Distinction of Sexologist" },
        { value: "Post Masters in  Learning Disorder Management & Child Psychology", label: "Post Masters in  Learning Disorder Management & Child Psychology" },
        { value: "PsyD (Doctorate in Clinical Psychology)", label: "PsyD (Doctorate in Clinical Psychology)" },
        { value: "ScM - Genetic Counseling", label: "ScM - Genetic Counseling" },
        { value: "Post Masters Learning Disability", label: "Post Masters Learning Disability" },
        { value: "PhD - Optometry", label: "PhD - Optometry" },
        { value: "Post Graduate In Food Science And Nutrition", label: "Post Graduate In Food Science And Nutrition" },
        { value: "PhD - Food Science and Nutrition ", label: "PhD - Food Science and Nutrition " },
        { value: "PhD - Yoga", label: "PhD - Yoga" },
        { value: "PhD - Speech Language Pathology", label: "PhD - Speech Language Pathology" },
        { value: 'MBS(H)', label: 'MBS(H)' },


    ];

 
    interface YearItem {
        value: number;
        label: string;
    }
    
    const [yearList, setYearList] = useState<YearItem[]>([]);
    
    const generateYearList = (startYear: number, endYear: number): YearItem[] => {
        const years: YearItem[] = [];
        for (let year = startYear; year <= endYear; year++) {
            years.push({ value: year, label: year.toString() });
        }
        return years;
    };
    
    useEffect(() => {
        const startYear = 1900;
        const endYear = new Date().getFullYear();
        const years = generateYearList(startYear, endYear);
        setYearList(years);
    }, []);

   
    // const [cities, setCities] = useState([]);

    // useEffect(() => {
    //   fetch('https://indian-cities-api-nocbegfhqg')
    //     .then(response => response.json())
    //     .then(data => console.log(data))

    //     .catch(error => {
    //       console.log('Error fetching data:', error);
    //     });
    // }, []);

    // console.log(cities);

    return (
        <>

            {/* <div className="flex items-center justify-center h-screen"></div> */}

            <div className="flex items-center md:m-5 mobile:m-5 justify-center min-h-screen flex-col min-w-0 break-words w-full rounded-lg bg-blueGray-100 border-0">
                
                <div className="bg-gradient-to-r from-blue-200 to-blue-300 dark:bg-[#101929] flex-auto px-4 lg:px-10 py-10 pt-0 w-full  lg:w-8/12 xl:w-6/12">
                <h4 className="text-center  text-2xl m-5 font-black text-decoration-line: underline">Doctor Registration Form</h4>

                    <form className='' onSubmit={handleSubmit}>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-12/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block  text-blueGray-600 text-xm mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white dark:bg-[#162133] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    // defaultValue="lucky.jesse"
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-12/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block  text-blueGray-600 text-xm  mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Gender
                                    </label>
                                    <div className="flex items-center">
                                        <input
                                            name="doctorGender"
                                            value="male"
                                            onChange={handleGenderChange}
                                            type="radio"
                                            className="mr-2"
                                        />
                                        <label className="mr-4">Male</label>
                                        <input
                                            name="doctorGender"
                                            value="female"
                                            onChange={handleGenderChange}
                                            type="radio"
                                            className="mr-2"
                                        />
                                        <label>Female</label>
                                        <input
                                            name="doctorGender"
                                            value="other"
                                            onChange={handleGenderChange}
                                            type="radio"
                                            className="ml-2"
                                        />
                                        <label className="mr-4">Other</label>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label className="block  text-blueGray-600 text-xm  mb-2" htmlFor="grid-password">
                                        Specialization
                                    </label>
                                    <Selectmulti
                                        options={specializationOptions as any}
                                        // value={formData.specialization.value}
                                        onChange={handleSpecializationChange}
                                        name="specialization"
                                    />

                                </div>
                            </div>

                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label className="block  text-blueGray-600 text-xm  mb-2" htmlFor="grid-password">
                                        City
                                    </label>
                                    <Selectmulti
                                        options={citiesOptions as any}
                                        // value={formData.city}
                                        onChange={handleCityChange}
                                
                                        name="city"
                                    />

                                </div>
                            </div>




                            {/* <div className="w-full lg:w-12/12 px-4"></div> */}
                            {/* <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="profile-picture"
                                    >
                                        Upload Picture
                                    </label>
                                    <input
                                        name="uploadPicture"
                                        value={formData.uploadPicture}
                                        onChange={handleInputChange}
                                        type="file"
                                        accept="image/*"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white dark:bg-[#162133] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    // onChange={handleProfilePictureChange} // You can add an onChange event handler if needed
                                    />
                                </div>
                            </div> */}


                        </div>



                        <div className="flex flex-wrap">
                            <div className="w-full px-4 mb-4">
                                <h2 className="text-xl font-semibold 	text-decoration-line: underline">Medical Registration</h2>
                            </div>
                            <div className="w-full lg:w-12/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block  text-blueGray-600 text-base  mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Registration Council
                                    </label>
                                    <Selectmulti
                                        options={councilOptions as any}
                                        // value={formData.registrationCouncil}
                                        onChange={handleRegistrationCouncilChange}
                                     
                                        name="registrationCouncil"
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block  text-blueGray-600 text-base mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Registration Number
                                    </label>
                                    <input
                                        name="registrationNumber"
                                        // value={formData.registrationNumber}
                                        onChange={handleInputChange}
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 dark:bg-[#162133] bg-white dark:bg-[#101929] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    // defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                                    />
                                </div>
                            </div>

                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label className="block text-blueGray-600 text-base mb-2" htmlFor="grid-password">
                                        Registration Year
                                    </label>
                                    {/* Assuming Selectmulti component accepts options as props */}
                                    <Selectmulti
                                        options={yearList as any}
                                        // value={formData.registrationYear}
                                        onChange={handleRegistrationYearChange}
                                      
                                        name="registrationYear"
                                    />
                                </div>
                            </div>

                        </div>

                        <div className="flex flex-wrap">
                            <div className="w-full px-4 mb-4">
                                <h2 className="text-xl font-semibold mt-8	text-decoration-line: underline">Education Qualification</h2>
                            </div>
                            <div className="w-full px-4 mb-4">
                                <p className="text-sm  	">Please enter your base level qualification</p>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block  text-blueGray-600 text-base  mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Degree
                                    </label>
                                    <Selectmulti
                                        options={degreeOptions as any}
                                        // value={formData.degree}
                                        onChange={handleDegreeChange}
                                        
                                        name="degree"
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block  text-blueGray-600 text-base mb-2"
                                        htmlFor="grid-password"
                                    >
                                        College/Institute
                                    </label>
                                    <input
                                        name="institute"
                                        value={formData.institute}
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
                                        className="block  text-blueGray-600 text-base mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Year of Completion
                                    </label>
                                    <Selectmulti
                                        options={yearList as any}
                                        // value={formData.yearOfCompletion}
                                        onChange={handleYearOfCompletionChange}
                                        
                                        name="yearOfCompletion"
                                    />
                                </div>
                            </div>

                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block  text-blueGray-600  mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Years of Experiance
                                    </label>
                                    <input
                                        name="experience"
                                        value={formData.experience}
                                        onChange={handleInputChange}
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white dark:bg-[#162133] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    // defaultValue="jesse@example.com"
                                    />
                                </div>
                            </div>

                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-full px-4 mb-4">
                                <h2 className="text-xl font-semibold mt-8	text-decoration-line: underline">Additional Info</h2>
                            </div>
                            {/* <div className="w-full px-4 mb-4">
                                <p className="text-sm  	">Please enter your base level qualification</p>
                            </div> */}
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block  text-blueGray-600 text-base  mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        type="email"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white dark:bg-[#162133] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    // defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block  text-blueGray-600 text-base mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Contact Number
                                    </label>
                                    <input
                                        name="contactNumber"
                                        value={formData.contactNumber}
                                        onChange={handleInputChange}
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 dark:bg-[#162133] bg-white dark:bg-[#101929] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    // defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                                    />
                                </div>
                            </div>



                        </div>


                        <div className="flex justify-center items-center mt-10">
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

export default DoctorRegistrationForm