import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
  return (
    <main>
      <div className="relative w-full min-h-screen">
        <div className="absolute -z-10 w-full">
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
      </div>
    </main>
  );
};

export default Navbar;
