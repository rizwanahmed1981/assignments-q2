import Image from "next/image"
import Logo from "@/app/public/Logo.png"





const Foot = () => {
    return (
        <div className="w-[1920px] h-[461px] bg-[#043873] text-white flex flex-col items-center justify-center">
            <div className="flex flex-row w-[1480px] h-[289px] justify-between pt-14">
                <div className="w-[295px] h-[169px] flex flex-col gap-4">
                    <Image src={Logo} alt="Whitepace Logo Here" width={191} height={34} />
                    <p className="text-[18px]">whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
                </div>
                <div>
                    <ul className="flex flex-col gap-3">
                        <li className="text-[18px] ">Product</li>
                        <li>Overview</li>
                        <li>Pricing</li>
                        <li>Customer Stories</li>
                    </ul>
                </div>
                <div>
                    <ul className="flex flex-col gap-3">
                        <li className="text-[18px]">Resources</li>
                        <li>Blog</li>
                        <li>Guides & Tutorials</li>
                        <li>Help Center</li>
                    </ul>
                </div>
                <div>
                    <ul className="flex flex-col gap-3">
                        <li className="text-[18px]">Company</li>
                        <li>About us</li>
                        <li>Careers</li>
                        <li>Media Kit</li>
                    </ul>
                </div>


            </div>
            <hr className="w-[1480px] opacity-100 border-[#2E4E73] mb-6"/>
            <p>©2021 Whitepace LLC.</p>

        </div>

    )
}
export default Foot