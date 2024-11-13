import Image from "next/image"
import Apple from "@/app/public/Apple.png"
import Google from "@/app/public/Google.png"
import microsoft from "@/app/public/microsoft.png"
import SlackTech from "@/app/public/SlackTech.png"




const Hero6 = () => {
    return (
        <div className="w-[1920px} h-[574px] bg-white text-black flex flex-col justify-center items-center gap-20">
            <p className="text-[72px]">Our Sponsors</p>
            <div className="flex flex-row justify-between w-[1482px] h-[71px]">
                <Image src={Apple} alt="Apple logo" width={55} height={68}/>
                <Image src={microsoft} alt="Microsoft Logo" width={287} height={62} />
                <Image src={SlackTech} alt="Slack Technologoes Logo" width={280} height={71} />
                <Image src={Google} alt="Google logo" width={211} height={69.81}/>

            </div>
        </div>
    )
}



export default Hero6