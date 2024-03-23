'use client'
import { useEffect, useState } from 'react';
export default function TargetValue() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            setIsSmallScreen(width < 625);
        };
        console.log(setIsSmallScreen)
        checkScreenSize();

        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);
    return (
        <div className="flex flex-col bg-slate-950 min-h-screen px-6 py-6 w-full">
            <div className="bg-green-950 px-8 py-4 rounded-md justify-center">
                <h1 className="text-white text-4xl">Reliance Industries</h1>
                <hr className="mt-5 mb-5 mx-auto border-gray-400 border-2" />
                <div className={`${isSmallScreen ? 'flex flex-col gap-6' : 'flex gap-6 justify-center'}`}>
                    <div className={`${isSmallScreen ? "w-full h-1/3" : "w-1/3"} bg-green-300 px-2 py-2`}>
                        <div className="flex flex-col">
                            <div className="flex">
                                <h1 className="text-2xl">Latest Price</h1>
                            </div>
                            <div className="flex justify-between">
                                <h1 className="text-2xl">391.59</h1>
                                <h2 className="bg-white rounded-xl px-1 py-1">+5,2%</h2>  
                            </div>
                        </div>
                    </div>
                    <div className={`${isSmallScreen ? "w-full h-1/3" : "w-1/3"} bg-green-300 px-2 py-2`}>
                    <div className="flex flex-col">
                            <div className="flex">
                                <h1 className="text-2xl">High Price</h1>
                            </div>
                            <div className="flex justify-between">
                                <h1 className="text-2xl">400.43</h1>
                                <h2 className="bg-white rounded-xl px-1 py-1">+2,5%</h2>  
                            </div>
                        </div>
                    </div>
                    <div className={`${isSmallScreen ? "w-full h-1/3" : "w-1/3"} bg-green-300 px-2 py-2`}>
                    <div className="flex flex-col">
                            <div className="flex">
                                <h1 className="text-2xl">Low Price</h1>
                            </div>
                            <div className="flex justify-between">
                                <h1 className="text-2xl">176.32</h1>
                                <h2 className="px-1 py-1 bg-black rounded-xl text-white">-1,2%</h2>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}