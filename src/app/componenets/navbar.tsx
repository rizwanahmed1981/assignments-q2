import Link from "next/link";
import Image from "next/image";
import logo from "@/app/public/Logo.png"



const NavBar = () => {
    return (
        <div className="h-[92px] w-[1920px] py-[16px] px-[220px] bg-[#043873] flex flex-row items-center justify-between">
            <div className="h-={34px} w-{191px}">
                <Image src={logo} alt="logo here" />
            </div>

            <div className="w-[737.5px] h-[60px] flex justify-between">
                <div className="w-[549] h-[23] flex gap-[60px]">
                    <ul className="flex flex-row gap-8 justify-between items-center text-white">
                        <li> <Link href={'/'}>Products</Link></li>
                        <li><Link href={'/'}>solutions</Link></li>
                        <li><Link href={'/'}>Resources</Link></li>
                        <li><Link href={'/'}>Pricing</Link></li>
                    </ul>
                </div>
                <div className="w-[126px] h-[60px] rounded-lg justify-end px-[40px] py-[16px] bg-[#FFE492] text-black">
                    <p>Login</p>
                </div>
            </div>

        </div>
    )
}

export default NavBar