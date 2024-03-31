"use client";
// import {AddStockData} from "./AddStockData";
import { FaSort } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import {useState,useEffect} from "react";
export default function AddStock() {
    const bgArray=["bg-green-900","bg-green-950"];
    const [AddStockData, setAddStockData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/Stock_status_data', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        setAddStockData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
    return (
        <div className="w-1/2 flex flex-col border border-white rounded-md">
            <div className={`flex ${bgArray[1]} py-4 px-4`}>
                <div className="w-1/4">
                    <input type="checkbox" />
                </div>
                <div className="w-1/4">
                    <div className="flex">
                        <h1 className="text-white">Stock Name</h1>
                        <button className="text-gray-500">
                            <FaSort />
                        </button>
                    </div>
                </div>
                <div className="w-1/4">
                    <div className="flex">
                        <h1 className="text-white">Register Date</h1>
                        <button className="text-gray-500">
                            <FaSort />
                        </button>
                    </div>
                </div>
                <div className="flex gap-2">
                    <h1 className="text-white">Actions</h1>
                </div>
            </div>
            {AddStockData.map((item,index)=>(
                <div className={`flex ${bgArray[index%2]} py-4 px-4`}>
                    <div className="w-1/4">
                        <input type="checkbox" />
                    </div>
                    <div className="w-1/4">
                        <h1 className="text-white">{item.stock_name}</h1>
                    </div>
                    <div className="w-1/4">
                        <h1 className="text-white">{item.symbol}</h1>
                    </div>
                    <div className="flex gap-2">
                        <button className="px-0.5 py-0.5 bg-white">
                            <span><CiEdit /></span>
                        </button>
                        <button className="px-0.5 py-0.5 bg-white">
                            <RiDeleteBin5Line />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}