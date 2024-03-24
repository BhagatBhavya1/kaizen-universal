import {navbar1} from "./NavbarData";
import { FaArrowLeft } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";
import Link from "next/link";
export default function Navbar(){
    return (
        <div className="bg-green-950 flex justify-between rounded-md px-6 py-2">
            <div>
                <h1 className="text-2xl text-white font-bold">Kaizan Universal</h1>
            </div>
            <div className="flex gap-12">
                <Link href="/">
                <div className="flex gap-1 justify-center items-center text-center">
                <span className="text-lg text-white"><FaArrowLeft /></span>
                <h1 className="text-2md text-white">BACK</h1>
                </div>
                </Link>
                {navbar1.map((item,index)=>(
                    <Link href={item.route}>
                    <h1 className="text-md text-white">{item.name}</h1>
                    </Link>
                ))}
                <Link href="/">
                <span className="text-2xl text-white flex justify-center items-center text-center"><MdHomeFilled /></span>
                </Link>
            </div>
        </div>
    )
}