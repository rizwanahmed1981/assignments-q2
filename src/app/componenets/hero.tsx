import Image from "next/image"
import Imagecontainer from "@/app/public/Imagecontainer.png"



const Hero = () => {
    return (
        <div className="h-[829px] w-[1920px] bg-[#043873] px-[220px] py-[140px] flex flex-row ">
            <div className="w-[2651.8px] h-[547px] flex flex-col py-[40px] text-white">
                <div className="w-[656px] h-[220px]">
                    <p className="text-[64px] ">
                        Get More Done with whitepace
                    </p>
                </div>
                <div className="w-[656px] h-[130px]">
                    <p className="text-[18px] ">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
                    </p>
                </div>
                <div className="w-[219px] h-[63px] rounded-lg bg-[#4f9cf9] text-center py-4">
                    <p>Try Whitepace Free  &rarr;</p>
                </div>
            </div>
           
                <Image src={Imagecontainer} alt="container" width={824} height={549} />
           
        </div>
    )
}

export default Hero