"use client"
import Link from "next/link";
import Image from "next/image";
import {useState,useEffect} from "react"
import {WhyUs} from "../../components/HomePage";
import {contact} from "../../components/ContactUs";
import { FaEnvelope, FaLinkedin, FaComment, FaShieldAlt, FaClock } from 'react-icons/fa';
import { FaShield } from "react-icons/fa6";
export default function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
    useEffect(() => {
        const checkScreenSize = () => {
            const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            setIsSmallScreen(width < 535);
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);
  return (
      <div className="flex flex-col bg-green-100">
          <div className="bg-green-100">
          <Image
            src="/home_bg.png"
            alt="Example Image"
            className="w-full"
            layout="responsive"
            width={1000}
            height={1000}
            style={{ width: '100%', height: '100%' }}
          />
          </div>
          <div className="flex flex-col text-center items-center justify-center px-10 bg-green-100">
              <h1 className="text-4xl">Why Us ?</h1>
              <div className={`mt-4 w-full justify-left grid ${isSmallScreen ? "grid-cols-1" : "grid-cols-2"} gap-8 px-2 py-4 mb-20`}>
                  {WhyUs.map((item, index) => (
                      <div key={index} className="justify-left bg-slate-950 rounded-lg px-6">
                          <h1 className="mt-6 mb-6 text-4xl text-left items-left justify-left text-green-400 font-extrabold">{item.header}</h1>
                          <p className="mb-6 text-sm text-white text-left items-left justify-left">{item.content}</p>
                      </div>
                  ))}
              </div>
          </div>
          <div className="bg-slate-950 flex flex-col">
            <h1 className="text-2xl text-green-300 justify-center text-center items-center py-10">TRANDING TRADS</h1>
          </div>
          <div className="bg-green-100">
            <h1 className="py-10 text-2xl justify-center text-center items-center">
              FACES BEHIND KAIZAN
            </h1>
          <Image
            src="/people.png"
            alt="Example Image"
            layout="responsive"
            className="px-20 py-5"
            width={1000}
            height={1000}
          />
          </div>
          <div className="flex flex-col bg-slate-950 px-10 py-10 rounded-b-3xl overflow-hidden">
            <h1 className="text-green-100 text-2xl text-center item-center justify-center">CONTACT US</h1>
            <div className="flex mt-12 justify-center text-center items-center">
              {contact.map((item,index)=>(
                <h1 key={index} className="w-1/6 text-white font-bold">{item}</h1>
              ))}
            </div>
            <div className="flex py-8 text-3xl text-white justify-center items-center">
              <div className="w-1/12 flex justify-center">
              <Link href="/"><FaEnvelope /></Link>
              </div>
              <div className="w-1/12 flex justify-center">
              <Link href="/"><FaLinkedin /></Link>
              </div>
              <div className="w-1/12 flex justify-center">
              <Link href="/"><FaComment /></Link>
              </div>
              <div className="w-1/12 flex justify-center">
              <Link href="/"><FaShield /></Link>
              </div>
              <div className="w-1/12 flex justify-center">
              <Link href="/"><FaClock /></Link>
              </div>
            </div>
            <div className="flex justify-center">
              <h1 className="text-gray-500">Any text <span>&copy;</span> Kaizanuniversal 2020. All right reserved</h1>
            </div>
          </div>
          <div className="py-2"></div>
      </div>

  );
}
