import Image from "next/image"
import Imagecontainer from "@/app/public/Imagecontainer.png"
import WorkTogether from "@/app/public/WorkTogether.png"



const Hero2 = () => {
    return (
        <div className="h-[1588px] w-[1920px] bg-white px-[220px] py-[140px] gap-20 flex flex-col ">
            <div className="flex flex-row gap-15">
                <div className="w-[2651.8px] h-[547px] flex flex-col py-[40px] text-black">
                    <div className="w-[656px] h-[160px]">
                        <p className="text-[64px] ">
                            Project Management
                        </p>
                    </div>
                    <div className="w-[656px] h-[130px]">
                        <p className="text-[18px] ">Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
                        </p>
                    </div>
                    <div className="w-[219px] h-[63px] rounded-lg bg-[#4f9cf9] text-center py-4 text-[18px] text-white">
                        <p>Get Started  &rarr;</p>
                    </div>
                </div>

                <Image src={Imagecontainer} alt="container" width={800} height={450} />

            </div>
            <div className="flex flex-row gap-20 items-center" >
                <Image src={WorkTogether} alt="Work Together Image Here" width={700} height={450} />
                <div className="w-[2651.8px] h-[547px] flex flex-col py-[40px] text-black">
                    <div className="w-[656px] h-[130px]">
                        <p className="text-[64px] ">
                            Work together
                        </p>
                    </div>
                    <div className="w-[656px] h-[110px]">
                        <p className="text-[18px] ">With whitepace, share your notes with your colleagues and collaborate on them.
                            You can also publish a note to the internet and share the URL with others.

                        </p>
                    </div>
                    <div className="w-[200px] h-[63px] rounded-lg bg-[#4f9cf9] text-center py-4 text-[18px] text-white">
                        <p>Try it now  &rarr;</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Hero2