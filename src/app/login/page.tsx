import Image from "next/image";
import { RiUserFill, RiLockPasswordFill } from 'react-icons/ri';
import Navbar from "../../../components/Navbar";
export default function Login() {
  return (
    <main>
      <div className="relative w-full min-h-screen mx-auto">
        <div className="absolute -z-10 w-full">
          <Image
            src="/login.png"
            alt="Example Image"
            className="w-full"
            layout="responsive"
            width={1000}
            height={1000}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div>
          {/* <Navbar /> */}
        </div>
        <div className="flex items-center justify-center h-screen">
          <form className="rounded px-8 pt-6 pb-8 mb-4 w-2/3">
            <div className="mb-6">
              <label className="block text-gray-50 font-bold text-l font-bold mb-4" htmlFor="username">
                <div className="flex">
                  <div><RiUserFill className="mr-2" /></div>
                  <div>Username</div>
                </div>
              </label>
              <input
                className="bg-transparent font-extrabold shadow appearance-none border rounded-full w-full py-5 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Enter Username"
              />
            </div>
            <div className="mb-6">
              <label className="block text-white text-l font-bold mb-2" htmlFor="password">
              <div className="flex">
                  <div><RiLockPasswordFill className="mr-2" /></div>
                  <div>Password</div>
                </div>
              </label>
              <input
                className="bg-transparent font-extrabold shadow appearance-none border rounded-full w-full py-5 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter Password"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-green-500 text-white font-bold py-5 px-3 rounded-full focus:outline-none focus:shadow-outline w-full"
                type="button"
              >
                Get Started
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
