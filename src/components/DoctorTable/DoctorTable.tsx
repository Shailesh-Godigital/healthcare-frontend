import axios from 'axios';
import { useEffect, useState } from 'react';

interface userData {
  _id: string;
  name: string,
  specialization: string,
  city: string,
  doctorGender: string,
  registrationCouncil: string,
  registrationNumber: string,
  registrationYear: string,
  degree: string,
  institute: string,
  yearOfCompletion: string,
  experience: string,
  email: string,
  contactNumber: string

  // Add other properties as needed
}


export default function DoctorTable() {
  const [userData, setUserData] = useState<userData[]>([]);
  // const [selectedStatus, setSelectedStatus] = useState('');
  const sessionToken = sessionStorage.getItem("sessionToken")
  console.log("🚀 ~ UserManagementTable ~ sessionToken:", sessionToken)

  const fetchuserData = async () => {
    try {
      const apiUrl = `${import.meta.env.VITE_REACT_APP_BASE_URL}/api/v1/doctor/getAllDoctor`;
      const response = await axios.get<userData[]>(apiUrl,)
      console.log('🚀 ~ fetchuserData ~ response:', response.data);
      console.log('🚀 ~ fetchuserData ~ response:', response.data);
      setUserData(response.data);
      
    } catch (error) {
      console.error('🚀 ~ fetchuserData ~ error:', error);

      // Log more details about the error response
      if (error) {

      }
    }
  };

  useEffect(() => {
    fetchuserData();
  }, []);

  // const filteredUserData = selectedStatus
  //   ? userData.filter((user) => user.status === selectedStatus)
  //   : userData;

  //   const handleEditClick = (selectedVendorData:any) => {
  //     // Pass the selected data to the parent component using the prop
  //     console.log(selectedVendorData);
  //     props.handleEditVendor(selectedVendorData);
  //   };

  return (
    <div className="flex flex-col ml-4 ">
      <div className="-my-2  overflow-x-auto sm:-mx-6 lg:-mx-8 ">
        <div className="py-2  align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow  overflow-hidden border-b border-gray-200 sm:rounded-lg">
           
              <div className="text-start  pl-20 m-2 text-lg font-bold text-gray-700 dark:text-white ">
                Doctor Management
              </div>
              {/* <button
                className="px-4 py-2 text-black rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 border-black"
                onClick={() => handleEditClick(userData)}
              >
                +
              </button> */}
            </div>
            <table className="min-w-full dark:bg-[#101929]divide-y divide-gray-200">
              <thead className="bg-gray-50 dark:bg-[#10151f]">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Dr.Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Gender
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Contact No.
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Specialization
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    City
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Registration Council
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Registration Number
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Registration Year
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Degree
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    College/Institute
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Year of Completion
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Years of Experiance
                  </th>



                  {/* <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <select
                      className="ml-2 p-1 border border-gray-300 rounded"
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                    >
                      <option value="">All Status</option>
                      <option value="pending">Pending</option>
                      <option value="approved">Approved</option>
                      <option value="rejected">Rejected</option>
                    </select>
                  </th> */}

                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y dark:bg-[#101929] divide-gray-200">
                
                {userData.map(userData => (
                  
                  <tr key={userData._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-50 w-50">
                          {/* <img className="h-10 w-10 rounded-full" src={userData.logo} alt="" /> */}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium ">{userData.name}</div>
                          {/* <div className="text-sm text-gray-500">{userData.labEmail}</div> */}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {userData.doctorGender}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {userData.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {userData.contactNumber}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {userData.specialization}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {userData.city}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {userData.registrationCouncil}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {userData.registrationNumber}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {userData.registrationYear}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {userData.degree}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {userData.institute}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {userData.yearOfCompletion}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {userData.experience}
                    </td>


                    {/* <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5
                      font-semibold rounded-full  ${userData.status === "approved"
                            ? 'bg-green-100 text-green-800'
                            : userData.status === 'rejected'
                              ? 'bg-red-100 text-red-800'
                              : userData.status === "pending"
                                ? 'bg-yellow-100 text-yellow-800'
                                : ''}`}
                      >
                        {userData.status}
                      </span>
                    </td> */}

                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900"
                      // onClick={() => handleEditClick(userData)}
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    // </div>
  );
}
