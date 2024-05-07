import axios from 'axios';
import { useEffect, useState } from 'react';

interface userData {
  registeredDate: string;
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  status: string;

  // Add other properties as needed
}


export default function UserManagementTable(props: any) {
  const [userData, setuserData] = useState<userData[]>([]);
  const [selectedStatus, setSelectedStatus] = useState('');
  const sessionToken = sessionStorage.getItem("sessionToken")
  console.log("🚀 ~ UserManagementTable ~ sessionToken:", sessionToken)

  const fetchuserData = async () => {
    try {
      const apiUrl = `${import.meta.env.VITE_REACT_APP_BASE_URL}/api/v1/users`;
      const response = await axios.get<userData[]>(apiUrl);


      console.log('🚀 ~ fetchuserData ~ response:', response.data);
      const sortedUserData = response.data.sort((a, b) => {
        return new Date(b.registeredDate).getTime() - new Date(a.registeredDate).getTime();
      });
    
      // Convert registeredDate to Indian Standard Time
      const userDataWithIST = sortedUserData.map(user => {
        const registeredDateIST = new Date(user.registeredDate).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
        return { ...user, registeredDate: registeredDateIST };
      });
    
      setuserData(userDataWithIST);
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

  const filteredUserData = selectedStatus
    ? userData.filter((user) => user.status === selectedStatus)
    : userData;

  const handleEditClick = (selectedVendorData: any) => {
    // Pass the selected data to the parent component using the prop
    console.log(selectedVendorData);
    props.handleEditVendor(selectedVendorData);
  };

  return (
    <div className="flex flex-col ml-4 ">
      <div className="-my-2  overflow-x-auto sm:-mx-6 lg:-mx-8 ">
        <div className="py-2  align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow  overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <div className='flex items {!showPasswordFields && (
                                <div className="flex justify-center mt-6">
                                    <button
                                        type="button"
                                        onClick={handleChangePassword}
                                        className="bg-blue-500 text-white active:bg-blue-800 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                    >
                                        Change Password
                                    </button>
                                </div>
                            )}-center'>
              <div className="text-start  pl-20 m-2 text-lg font-bold text-gray-700 dark:text-white ">
                User Management
              </div>
              <button
                className="px-4 py-2 text-black rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 border-black"
                onClick={() => handleEditClick(userData)}
              >
                +
              </button>
            </div>
            <table className="min-w-full dark:bg-[#101929]divide-y divide-gray-200">
              <thead className="bg-gray-50 dark:bg-[#10151f]">
                <tr>
                <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Registered  Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    First  Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Last  Name
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
                    Role
                  </th>

                  <th
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
                  </th>

                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y dark:bg-[#101929] divide-gray-200">
                {filteredUserData.map(userData => (
                  <tr key={userData._id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {userData.registeredDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-50 w-50">
                          {/* <img className="h-10 w-10 rounded-full" src={userData.logo} alt="" /> */}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium ">{userData.firstName}</div>
                          {/* <div className="text-sm text-gray-500">{userData.labEmail}</div> */}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {userData.lastName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {userData.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {userData.role}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
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
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900"
                        onClick={() => handleEditClick(userData)}>
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
    </div>
  );
}
