import Link from "next/link";

import { RiWhatsappFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";


interface ISocialMediaLinksProps{
    bigger?: boolean
}

const SocialMediaLinks = ({bigger}: ISocialMediaLinksProps) => {
    return(
        <div className="flex justify-center md:justify-end items-center gap-6">
            <Link data-aos="fade-up" href="" data-aos-offset="0" className="transition-all ease-in duration-75 hover:-translate-y-1">
                <RiWhatsappFill className={`${bigger ? "w-6 h-6" : "w-5 h-5"}`}/>
            </Link>

            <Link data-aos="fade-up" data-aos-delay="250" data-aos-offset="0" href="" className="transition-all ease-in duration-75 hover:-translate-y-1">
                <FaLinkedin className={`${bigger ? "w-6 h-6" : "w-5 h-5"}`}/>
            </Link>

            <Link data-aos="fade-up" data-aos-delay="500" data-aos-offset="0" href="https://www.instagram.com/switftstock" className="transition-all ease-in duration-75 hover:-translate-y-1">
                <PiInstagramLogoFill className={`${bigger ? "w-6 h-6" : "w-5 h-5"}`}/>
            </Link>
        </div>
    )
}

export default SocialMediaLinks;