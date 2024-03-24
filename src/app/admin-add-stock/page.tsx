"use client"
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
export default function AdminAddStock() {
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = (event : any) => {
        setSearchTerm(event.target.value);
    };
    return (
        <div className="flex flex-col bg-slate-950 min-h-screen">
            <div className="flex gap-2 px-2 py-2">
                <div className="relative mx-auto w-5/6">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaSearch className="text-gray-400" />
                    </div>
                    <input
                        type="text"
                        className="bg-transparent block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>
                <div className="w-1/6">
                <button
                    className="flex items-center justify-center px-4 py-2 bg-green-600 text-black rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    // onClick={onClick}
                    >
                    <FaPlus className="mr-2" />
                    Add new Stock
                </button>
                </div>
            </div>
            <div></div>
        </div>
    )
}