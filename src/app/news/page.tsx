import {NewsData} from "../../../components/NewsData";
export default function News() {
    return (
        <div className="bg-slate-900 min-h-screen">
            <div className="bg-green-950 ml-6 mr-6">
                <div className="container mx-auto">
                    <div className="grid grid-cols-4 gap-4 px-2 py-10">
                        {NewsData.map((item, index) => (
                            <div key={index} className="p-4 bg-transparent rounded-lg border-white border-4">
                                <h1 className="text-center items-center text-2xl text-white font-extrabold mb-2">{item.headline}</h1>
                                <p className="text-sm text-white">{item.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}