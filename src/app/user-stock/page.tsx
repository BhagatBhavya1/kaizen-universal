"use client"
import {UserStockData} from "../../../components/UserStockData";
import Image from "next/image";
import { useEffect, useState } from 'react';
import Navbar from "../../../components/Navbar";
import io from 'socket.io-client';
import { log } from "util";
export default function MyPortfolio() {
    const [stockNames, setStockNames] = useState([]);
    const b = "bjavau";
    // const [UserStockData,setUserStockData] = useState([]);
    useEffect(() => {
        const chatSocket = io('http://localhost:5000/all_watch',{query: {
            status:"All",
            symbol: "", // Send selected stock symbol to the backend
        }});
         // Connect to the 'chat' namespace
        // Chat namespace
        chatSocket.on('message', (msg) => {

            console.log('Cdata :', msg);
            console.log("x = ",msg.symbol);
            console.log("price",msg.ltp);
             // Check if the symbol exists in the stockNames list
             const symbolIndex = stockNames.findIndex(stock => stock.symbol === msg.symbol);

             if (symbolIndex !== -1) {
                 // Symbol exists, update its ltp value
                 setStockNames(prevStockNames => {
                     const updatedStocks = [...prevStockNames];
                     updatedStocks[symbolIndex].ltp = msg.ltp;
                     updatedStocks[symbolIndex].chp = msg.chp;
                     return updatedStocks;
                 });
             } else if(msg.symbol !== undefined){
                 // Symbol doesn't exist, add it to the list
                 setStockNames(prevStockNames => [
                     ...prevStockNames,
                     { symbol: msg.symbol, ltp: msg.ltp , chp:msg.chp }
                 ]);
             }
        });
        // chatSocket.on('stock_list',(stock)=>{
        //     // console.log('stock_list',stock);
        //     // setStockNames(prevStockNames => {
        //     //     const updatedStocks = stock.map(item => ({ ...item, price: 0 }));
        //     //     return updatedStocks;
        //     // });
        //     // console.log("names",stockNames);
        // });
        return () => {
            chatSocket.disconnect();
        };
    }, []);

    console.log("updated : ",stockNames);
    
    return (
        <div className="bg-slate-950 min-h-screen">
            <div className="flex flex-col py-6">
            <div className="px-3 rounded-md mb-4">
            <Navbar />
            </div>
            {stockNames.map((item, index) => (
                // index%2!==0 ? (
                    <div key={index} className="flex gap-4 gap-y-4 items-center text-center justify-between bg-slate-900 py-4 text-white">
                        <div className="w-1/3">
                            <h2>{item.symbol}</h2>
                        </div>
                        <div className="w-1/3">
                            <h2>{item.ltp}</h2>
                        </div>
                        {item.chp>0? (
                            <div className="w-1/3 text-green-600 flex items-center justify-center gap-1">
                            <Image
                            src="/tup.png"
                            alt="Example Image"
                            className="w-auto h-2"
                            layout="intrinsic"
                            width={4}
                            height={4}
                            />
                            <h2>+{item.chp}</h2>
                        </div>
                        ) : (
                            <div className="w-1/3 text-red-600 flex items-center justify-center gap-1">
                            <Image
                            src="/tdown.png"
                            alt="Example Image"
                            className="w-auto h-2"
                            layout="intrinsic"
                            width={4}
                            height={4}
                            />
                            <h2>{item.chp}</h2>
                        </div>
                        )}
                    </div>
                // ) : (
                //     <div key={index} className="flex gap-4 gap-y-4 items-center text-center justify-between bg-green-950 py-4 text-white">
                //         <div className="w-1/3">
                //             <h2>{item.stocks}</h2>
                //         </div>
                //         <div className="w-1/3">
                //             <h2>{item.latest_price}</h2>
                //         </div>
                //         {item.up ? (
                //             <div className="w-1/3 text-green-600 flex items-center justify-center gap-1">
                //             <Image
                //             src="/tup.png"
                //             alt="Example Image"
                //             className="w-auto h-2"
                //             layout="intrinsic"
                //             width={4}
                //             height={4}
                //             />
                //             <h2>+{item.state}</h2>
                //         </div>
                //         ) : (
                //             <div className="w-1/3 text-red-600 flex items-center justify-center gap-1">
                //             <Image
                //             src="/tdown.png"
                //             alt="Example Image"
                //             className="w-auto h-2"
                //             layout="intrinsic"
                //             width={4}
                //             height={4}
                //             />
                //             <h2>-{item.state}</h2>
                //         </div>
                //         )}
                //     </div>
                // )
            ))}
            </div>
        </div>
    )
}