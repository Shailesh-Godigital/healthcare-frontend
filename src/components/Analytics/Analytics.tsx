import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { UserManagementTable } from '../UserManagementTable';

interface user {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    status: string;
    registeredDate: Date

}


export default function Analytics() {


    const [users, setUsers] = useState<user[]>([]); // Specify the type as User[]

    useEffect(() => {

        fetch(`${import.meta.env.VITE_REACT_APP_BASE_URL}/api/v1/users`)
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                console.log("🚀 ~ useEffect ~ data:", data)
            });
    }, []);

    const isSameDay = (date1: Date, date2: Date) => {
        return date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate();
    };

    // Helper function to check if a date falls within the same week
    const isSameWeek = (date1: Date, date2: number | Date) => {
        const firstDayOfWeek = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate() - date1.getDay());
        return date2 >= firstDayOfWeek && date2 < new Date(firstDayOfWeek.setDate(firstDayOfWeek.getDate() + 7));
    };

    // Helper function to check if a date falls within the same month
    const isSameMonth = (date1: Date, date2: Date) => {
        return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth();
    };

    // Get the current date
    const currentDate = new Date();

    // Initialize counts
    let usersToday = 0;
    let labVendorsToday = 0;
    let usersThisWeek = 0;
    let labVendorsThisWeek = 0;
    let usersThisMonth = 0;
    let labVendorsThisMonth = 0;

    // Iterate through the userData
    for (const user of users) {

        const registeredDate = new Date(user.registeredDate);

        // Check if registeredDate falls within today, this week, or this month
        if (isSameDay(currentDate, registeredDate)) {
            if (user.role === 'user') usersToday++;
            else if (user.role === 'labVendor') labVendorsToday++;
        }

        if (isSameWeek(currentDate, registeredDate)) {
            if (user.role === 'user') usersThisWeek++;
            else if (user.role === 'labVendor') labVendorsThisWeek++;
        }

        if (isSameMonth(currentDate, registeredDate)) {
            if (user.role === 'user') usersThisMonth++;
            else if (user.role === 'labVendor') labVendorsThisMonth++;
        }
    }

    console.log("Users onboarded today:", usersToday);
    console.log("Lab vendors onboarded today:", labVendorsToday);
    console.log("Users onboarded this week:", usersThisWeek);
    console.log("Lab vendors onboarded this week:", labVendorsThisWeek);
    console.log("Users onboarded this month:", usersThisMonth);
    console.log("Lab vendors onboarded this month:", labVendorsThisMonth);
    return (
        <>
            <div className="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:px-8">
                <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
                    <div className="p-4 bg-green-400"><svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
                        </path>
                    </svg></div>
                    <div className="px-4 text-gray-700">
                        <h3 className="text-sm tracking-wider"> User Onboarded Today</h3>
                        <p className="text-3xl">{usersToday}</p>
                    </div>
                </div>
                <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
                <div className="p-4 bg-green-400"><svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
                        </path>
                    </svg></div>
                    <div className="px-4 text-gray-700">
                        <h3 className="text-sm tracking-wider"> User Onboarded This month</h3>
                        <p className="text-3xl">{usersThisMonth}</p>
                    </div>
                </div>
                <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
                <div className="p-4 bg-red-400"><svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4">
                        </path>
                    </svg></div>
                    <div className="px-4 text-gray-700">
                        <h3 className="text-sm tracking-wider"> Vandor Onboarded Today</h3>
                        <p className="text-3xl">{labVendorsToday}</p>
                    </div>
                </div>
                <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
                    <div className="p-4 bg-red-400"><svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4">
                        </path>
                    </svg></div>
                    <div className="px-4 text-gray-700">
                        <h3 className="text-sm tracking-wider">Vandor Onboarded this month </h3>
                        <p className="text-3xl">{labVendorsThisMonth}</p>
                    </div>
                </div>
            </div>
            <UserManagementTable/>
        </>
    )
}
