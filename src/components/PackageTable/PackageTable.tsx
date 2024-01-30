import axios from 'axios';
import  { useEffect, useState } from 'react';

interface userData {
  _id: string;
  title: string;
  imgurl: string;
  href: string;
  description: string;
  content: string;

  // Add other properties as needed
}


export default function PackageTable() {
  const [userData, setuserData] = useState<userData[]>([]);
  // const [selectedStatus, setSelectedStatus] = useState('');
  const sessionToken = sessionStorage.getItem("sessionToken")
  console.log("🚀 ~ UserManagementTable ~ sessionToken:", sessionToken)

  const fetchuserData = async () => {
    try {
      const apiUrl = `${import.meta.env.VITE_REACT_APP_BASE_URL}/api/v1/package/getPackage`;
      const response = await axios.get<userData[]>(apiUrl,
        {
          headers: {
            'Cookie': `healthcare=${sessionToken}`,
          },
        });
      console.log('🚀 ~ fetchuserData ~ response:', response.data);
      setuserData(response.data);
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

  //   const filteredUserData = selectedStatus
  //     ? userData.filter((user) => user.status === selectedStatus)
  //     : userData;

  // const handleEditClick = (selectedVendorData: any) => {
  //   // Pass the selected data to the parent component using the prop
  //   console.log(selectedVendorData);
  //   props.handelEditPackage(selectedVendorData);
  // };

  return (
    <div className="flex flex-col ml-4 ">
      <div className="-my-2  overflow-x-auto sm:-mx-6 lg:-mx-8 ">
        <div className="py-2  align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow  overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <div className="flex items-center">
              <div className="text-start pl-2 m-2 text-lg font-bold text-gray-700 dark:text-white ">
                Package Management
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
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                   Image Url
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                  Package link
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Package Description
                  </th>
                  {/* <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Package Url
                  </th> */}

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
                          <div className="text-sm font-medium ">{userData.title}</div>
                          {/* <div className="text-sm text-gray-500">{userData.labEmail}</div> */}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {userData.imgurl}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {userData.href}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {userData.description}
                    </td>
                    {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {userData.packageUrl}
                    </td> */}

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

                    {/* <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900"
                        onClick={() => handleEditClick(userData)}>
                        Edit
                      </a>
                    </td> */}
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
