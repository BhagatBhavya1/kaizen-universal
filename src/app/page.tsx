import Image from "next/image";
import {WhyUs} from "../../components/HomePage";
export default function Home() {
  return (
      <div className="flex flex-col">
          <div>
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
          <div className="flex flex-col text-center items-center justify-center px-10">
              <h1 className="text-4xl">Why Us ?</h1>
              <div className={`mt-4 w-full justify-left grid grid-cols-2 gap-8 px-2 py-4`}>
                  {WhyUs.map((item, index) => (
                      <div key={index} className="justify-left bg-slate-950 rounded-lg px-6">
                          <h1 className="mt-6 mb-6 text-4xl text-left items-left justify-left text-green-400 font-extrabold">{item.header}</h1>
                          <p className="mb-6 text-sm text-white text-left items-left justify-left">{item.content}</p>
                      </div>
                  ))}
              </div>
          </div>
          <div className="bg-slate-950 flex flex-col mt-12">
            <h1 className="text-xl text-green-300 justify-center text-center items-center py-10">TRANDING TRADS</h1>
          </div>
      </div>

  );
}
