import {UserStockData} from "../../../components/UserStockData";
import Image from "next/image";
export default function MyPortfolio() {
    return (
        <div className="bg-slate-950 min-h-screen">
            <div className="flex flex-col py-6">
            <div className="flex gap-4 gap-y-4 items-center text-center justify-between bg-slate-900 py-4 text-white">
                        <div className="w-1/3">
                            <h2>Stocks</h2>
                        </div>
                        <div className="w-1/3">
                            <h2>Latest Price</h2>
                        </div>
                        <div className="w-1/3">
                            <h2>State</h2>
                        </div>
                    </div>
            {UserStockData.map((item, index) => (
                index%2!==0 ? (
                    <div key={index} className="flex gap-4 gap-y-4 items-center text-center justify-between bg-slate-900 py-4 text-white">
                        <div className="w-1/3">
                            <h2>{item.stocks}</h2>
                        </div>
                        <div className="w-1/3">
                            <h2>{item.latest_price}</h2>
                        </div>
                        {item.up ? (
                            <div className="w-1/3 text-green-600 flex items-center justify-center gap-1">
                            <Image
                            src="/tup.png"
                            alt="Example Image"
                            className="w-auto h-2"
                            layout="intrinsic"
                            width={4}
                            height={4}
                            />
                            <h2>+{item.state}</h2>
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
                            <h2>-{item.state}</h2>
                        </div>
                        )}
                    </div>
                ) : (
                    <div key={index} className="flex gap-4 gap-y-4 items-center text-center justify-between bg-green-950 py-4 text-white">
                        <div className="w-1/3">
                            <h2>{item.stocks}</h2>
                        </div>
                        <div className="w-1/3">
                            <h2>{item.latest_price}</h2>
                        </div>
                        {item.up ? (
                            <div className="w-1/3 text-green-600 flex items-center justify-center gap-1">
                            <Image
                            src="/tup.png"
                            alt="Example Image"
                            className="w-auto h-2"
                            layout="intrinsic"
                            width={4}
                            height={4}
                            />
                            <h2>+{item.state}</h2>
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
                            <h2>-{item.state}</h2>
                        </div>
                        )}
                    </div>
                )
            ))}
            </div>
        </div>
    )
}