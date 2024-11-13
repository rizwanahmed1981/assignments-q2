import Image from "next/image"
import Imagecontainer from "@/app/public/Imagecontainer.png"



const Hero3 = () => {
    return (
        <div className="h-[700px] w-[1920px] bg-[#043873] px-[220px] py-[140px] flex flex-row ">
            <div className="w-[2651.8px] h-[547px] flex flex-col py-[80px] text-white">
                <div className="w-[656px] h-[120px]">
                    <p className="text-[64px] ">
                    Use as Extension
                    </p>
                </div>
                <div className="w-[656px] h-[110px]">
                    <p className="text-[18px] ">Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.

                    </p>
                </div>
                <div className="w-[160px] h-[63px] rounded-lg bg-[#4f9cf9] text-center py-4">
                    <p>Lets Go  &rarr;</p>
                </div>
            </div>
           
                <Image src={Imagecontainer} alt="container" width={824} height={549} />
           
        </div>
    )
}

export default Hero3