import Image from "next/image"
import Imagecontainer from "@/app/public/Imagecontainer.png"



const Hero4 = () => {
    return (
        <div className="h-[700px] w-[1920px] bg-white px-[220px] py-[140px] flex flex-row gap-20 items-center ">
                <Image src={Imagecontainer} alt="container" width={824} height={549} />
            <div className="w-[2651.8px] h-[547px] flex flex-col py-[80px] text-black">
                <div className="w-[656px] h-[190px]">
                    <p className="text-[64px] ">
                    Customize it to your needs
                    </p>
                </div>
                <div className="w-[656px] h-[110px]">
                    <p className="text-[18px] ">Customize the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.

                    </p>
                </div>
                <div className="w-[160px] h-[63px] rounded-lg bg-[#4f9cf9] text-white text-center py-4">
                    <p>Lets Go  &rarr;</p>
                </div>
            </div>
           
           
        </div>
    )
}

export default Hero4