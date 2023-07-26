import Link from "next/link";

import { RiWhatsappFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";

const SocialMediaLinks = () => {
    return(
        <div className="flex justify-center md:justify-end items-center gap-4">
            <Link href="" className="transition-all ease-in duration-75 hover:-translate-y-1">
                <RiWhatsappFill className="w-5 h-5"/>
            </Link>

            <Link href="" className="transition-all ease-in duration-75 hover:-translate-y-1">
                <FaLinkedin className="w-5 h-5"/>
            </Link>

            <Link href="" className="transition-all ease-in duration-75 hover:-translate-y-1">
                <PiInstagramLogoFill className="w-5 h-5"/>
            </Link>
        </div>
    )
}

export default SocialMediaLinks;