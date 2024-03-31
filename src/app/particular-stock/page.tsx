"use client";
import { FaArrowRight } from "react-icons/fa";;
import { useEffect, useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import Navbar from "../../../components/Navbar";
import io from 'socket.io-client';

export default function ParticularStock() {
    const [selectedStartDate, setSelectedStartDate] = useState('');
    //live data
    const [messages, setMessages] = useState([]);
    const handleStartDateChange = (event : any) => {
        setSelectedStartDate(event.target.value);
    };
    const [selectedEndDate, setSelectedEndDate] = useState('');
    const handleEndDateChange = (event : any) => {
        setSelectedEndDate(event.target.value);
    };
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    useEffect(() => {
        const checkScreenSize = () => {
            const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            setIsSmallScreen(width < 625);
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        const chatSocket = io('http://localhost:5000/chat',{query: {
            status:"Single",
            symbol: "NSE:SBIN-EQ", // Send selected stock symbol to the backend
        }});
         // Connect to the 'chat' namespace
        // Chat namespace
        chatSocket.on('message', (msg) => {
            console.log('Cdata :', msg);
            setMessages((prevMessages) => [...prevMessages, msg]);
        });

        return () => {
            window.removeEventListener('resize', checkScreenSize);
            chatSocket.disconnect();
        };
    }, []);
    return (
        <div className="flex flex-col bg-slate-950 min-h-screen px-6 py-6 w-full">
            <div className="px-3 rounded-md mb-4">
            <Navbar />
            </div>
            <div className="bg-green-950 px-8 py-4 rounded-md justify-center">
                <div className="flex justify-between">
                <h1 className="text-white text-4xl">Reliance Industries</h1>
                <div className="flex gap-2">
                <div className="flex flex-col">
                <div className="text-xl bg-green-300 px-4 text-black font-bold flex justify-center items-center text-center">Start Date</div>
                <input
                    type="date"
                    value={selectedStartDate}
                    onChange={handleStartDateChange}
                    className="appearance-none bg-green-300 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                />
                </div>
                <div className="text-white font-extrabold justify-center items-center flex h-1/2"><FaArrowRight /></div>
                <div className="flex flex-col">
                <div className="bg-green-300 text-xl px-4 text-black font-bold flex justify-center items-center text-center">End Date</div>
                <input
                    type="date"
                    value={selectedEndDate}
                    onChange={handleEndDateChange}
                    className="appearance-none bg-green-300 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                />
                </div>
                <button className="bg-transparent rounded-md text-white font-bold py-2 px-4 border border-white shadow-md">
                    <div className="flex justify-center items-center text-center">
                        <span>Target Value</span>
                        <span><IoIosArrowForward /></span>
                    </div>
                </button>
                </div>
                </div>
                <hr className="mt-5 mb-5 mx-auto border-gray-400 border-2" />
                <div className={`${isSmallScreen ? 'flex flex-col gap-6' : 'flex gap-6 justify-center'}`}>
                    <div className={`${isSmallScreen ? "w-full h-1/4" : "w-1/4"} bg-green-300 px-2 py-2`}>
                        <div className="flex flex-col">
                            <div className="flex">
                                <h1 className="text-2xl">Latest Price</h1>
                            </div>
                            <div className="flex justify-between">
                                <h1 className="text-2xl">{messages.length > 0 ? messages[messages.length - 1]['ltp'] : '0.00'}</h1>
                                <h2 className="bg-white rounded-xl px-1 py-1">{messages.length > 0 ? messages[messages.length - 1]['chp'] >0 ? '+'+messages[messages.length - 1]['chp'] :messages[messages.length - 1]['chp']  : '0.00'}%</h2>  
                            </div>
                        </div>
                    </div>
                    <div className={`${isSmallScreen ? "w-full h-1/4" : "w-1/4"} bg-green-300 px-2 py-2`}>
                    <div className="flex flex-col">
                            <div className="flex">
                                <h1 className="text-2xl">High Price</h1>
                            </div>
                            <div className="flex justify-between">
                                <h1 className="text-2xl">{messages.length > 0 ? messages[messages.length - 1]['high_price'] : '0.00'}</h1>
                                {/* <h2 className="bg-white rounded-xl px-1 py-1">+2,5%</h2>   */}
                            </div>
                        </div>
                    </div>
                    <div className={`${isSmallScreen ? "w-full h-1/4" : "w-1/4"} bg-green-300 px-2 py-2`}>
                    <div className="flex flex-col">
                            <div className="flex">
                                <h1 className="text-2xl">Low Price</h1>
                            </div>
                            <div className="flex justify-between">
                                <h1 className="text-2xl">{messages.length > 0 ? messages[messages.length - 1]['low_price'] : '0.00'}</h1>
                                {/* <h2 className="px-1 py-1 bg-black rounded-xl text-white">-1,2%</h2>   */}
                            </div>
                        </div>
                    </div>
                    <div className={`${isSmallScreen ? "w-full h-1/4" : "w-1/4"} bg-green-300 px-2 py-2`}>
                        <div className="flex flex-col">
                            <div className="flex">
                                <h1 className="text-2xl">Time Period</h1>
                            </div>
                            <div className="flex justify-between">
                                <h1 className="text-2xl">6 Months</h1>
                                <h2 className="bg-white rounded-xl px-1 py-1">+11%</h2>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}