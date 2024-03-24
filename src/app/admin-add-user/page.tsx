"use client";
import Navbar from "../../../components/NavbarAdmin"
import { HiOutlineDotsVertical } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoFilterOutline } from "react-icons/io5";
import { IoIosCloudDownload } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { FaPlus } from "react-icons/fa";
import {AddUserData} from "../../../components/AddUserData";
export default function AddAdminUser() {
    return (
        <div className="flex flex-col bg-slate-950 min-h-screen py-4">
            <div className="px-3 rounded-md mb-4">
            <Navbar />
            </div>
            <div className="flex justify-between px-6">
                <div>
                    <h1 className="text-white text-xl">Current users</h1>
                </div>
                <div className="flex gap-4">
                    <button className="flex gap-2 items-center text-center justify-center px-4 py-2 bg-slate-700 text-black rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        <span className="flex text-green-300 text-lg justify-center items-center text-center"><RiDeleteBin6Line /></span>
                        <h1 className="text-green-300">Delete</h1>
                    </button>
                    <button className="flex gap-2 items-center text-center justify-center px-4 py-2 bg-slate-700 text-black rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        <span className="flex text-green-300 text-lg justify-center items-center text-center"><IoFilterOutline /></span>
                        <h1 className="text-green-300">Filters</h1>
                    </button>
                    <button className="flex gap-2 items-center text-center justify-center px-4 py-2 bg-slate-700 text-black rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        <span className="flex text-green-300 text-lg justify-center items-center text-center"><IoIosCloudDownload /></span>
                        <h1 className="text-green-300">Export</h1>
                    </button>
                    <button className="flex gap-2 items-center text-center justify-center px-4 py-2 bg-green-600 text-black rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        <span className="flex text-black text-lg justify-center items-center text-center"><FaPlus /></span>
                        <h1 className="text-black">Add new</h1>
                    </button>
                </div>
            </div>
        </div>
    )
}