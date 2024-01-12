import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface VendorData {
  _id: string;
  labName: string;
  ownerName: string;
  labServices: string;
  labEmail: string;
  qualification:string;
  logo: string;
  contactNo: string;
  licenceNumber: string;
  labAvailability: string;
  labDocument:string
  // Add other properties as needed
}

const people = [
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    department: 'Optimization',
    role: 'Admin',
    email: 'jane.cooper@example.com',
    image: 'https://bit.ly/33HnjK0',
  },
  {
    name: 'John Doe',
    title: 'Regional Paradigm Technician',
    department: 'Optimization',
    role: 'Tester',
    email: 'john.doe@example.com',
    image: 'https://bit.ly/3I9nL2D',
  },
  {
    name: 'Veronica Lodge',
    title: 'Regional Paradigm Technician',
    department: 'Optimization',
    role: ' Software Engineer',
    email: 'veronica.lodge@example.com',
    image: 'https://bit.ly/3vaOTe1',
  },
  // More people...
];
export default function LabVendorTable() {
  const [vendorData, setVendorData] = useState<VendorData[]>([]);

  const fetchVendorData = async () => {
    try {
      const apiUrl = 'http://localhost:5000/api/v1/labVender/getAllVendor';
      const response = await axios.get<VendorData[]>(apiUrl);
      console.log('🚀 ~ fetchVendorData ~ response:', response.data);
      setVendorData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchVendorData();
  }, []);


  return (
    <div className="flex flex-col ml-4 ">
      <div className="-my-2  overflow-x-auto sm:-mx-6 lg:-mx-8 ">
        <div className="py-2  align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow  overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full dark:bg-[#101929]divide-y divide-gray-200">
              <thead className="bg-gray-50 dark:bg-[#10151f]">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                  Lab  Name
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
                  Owner  Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                  Qualification
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Licence/Services
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Availability
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Documents
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y dark:bg-[#101929] divide-gray-200">
                {vendorData.map(vendorData => (
                  <tr key={vendorData._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-50 w-50">
                          <img className="h-10 w-10 rounded-full" src={vendorData.logo} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{vendorData.labName}</div>
                          <div className="text-sm text-gray-500">{vendorData.labEmail}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {vendorData.contactNo}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {vendorData.ownerName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {vendorData.qualification}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{vendorData.licenceNumber}</div>
                      <div className="text-sm text-gray-500">{vendorData.labServices}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className="px-2 inline-flex text-xs leading-5
                      font-semibold rounded-full bg-green-100 text-green-800"
                      >
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {vendorData.labAvailability}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {vendorData.labDocument}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
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

// export default function LabVendorTable() {
//   const [vendorData, setVendorData] = useState<VendorData[]>([]);

//   const fetchVendorData = async () => {
//     try {
//       const apiUrl = 'http://localhost:5000/api/v1/labVender/getAllVendor';
//       const response = await axios.get<VendorData[]>(apiUrl);
//       console.log('🚀 ~ fetchVendorData ~ response:', response.data);
//       setVendorData(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchVendorData();
//   }, []);

//   return (
//     <div className="flex flex-col overflow-x-auto">
//       <div className="sm:-mx-6 lg:-mx-8">
//         <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
//           <div className="overflow-x-auto">

//             <table className="min-w-full text-left text-sm font-light">
//               <thead className="border-b font-medium dark:border-neutral-500">
//                 <tr>
//                   <th scope="col" className="px-6 py-4">Serial no.</th>
//                   <th scope="col" className="px-6 py-4">Lab Name</th>
//                   <th scope="col" className="px-6 py-4">Owner Name</th>
//                   <th scope="col" className="px-6 py-4">Lab Service</th>
//                   <th scope="col" className="px-6 py-4">Lab Email</th>
//                   <th scope="col" className="px-6 py-4">Qualification</th>
//                   <th scope="col" className="px-6 py-4">Logo</th>
//                   <th scope="col" className="px-6 py-4">Contact No</th>
//                   <th scope="col" className="px-6 py-4">Licence No.</th>
//                   <th scope="col" className="px-6 py-4">Lab Availability</th>
//                   <th scope="col" className="px-6 py-4">Lab Document</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {vendorData.map((row, index) => (
//                   <tr key={row._id} className="border-b dark:border-neutral-500">
//                     <td className="whitespace-nowrap px-6 py-4 font-medium">
//                       {index + 1}
//                     </td>
//                     <td className="whitespace-nowrap px-6 py-4">{row.labName}</td>
//                     <td className="whitespace-nowrap px-6 py-4">{row.ownerName}</td>
//                     <td className="whitespace-nowrap px-6 py-4">{row.labServices}</td>
//                     <td className="whitespace-nowrap px-6 py-4">{row.labEmail}</td>
//                     <td className="whitespace-nowrap px-6 py-4">{row.qualification}</td>
//                     <td className="whitespace-nowrap px-6 py-4">{row.logo}</td>
//                     <td className="whitespace-nowrap px-6 py-4">{row.contactNo}</td>
//                     <td className="whitespace-nowrap px-6 py-4">{row.licenceNumber}</td>
//                     <td className="whitespace-nowrap px-6 py-4">{row.labAvailability}</td>
//                     <td className="whitespace-nowrap px-6 py-4">{row.labDocument}</td>
//                     {/* <td className="whitespace-nowrap px-6 py-4">{row.labServices}</td>
//                     <td className="whitespace-nowrap px-6 py-4">{row.labEmail}</td> */}
//                     {/* Add other table data (td) cells as needed */}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }