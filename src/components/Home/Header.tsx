import Image from "next/image"
import logoSvg from '../../assets/logo-white.svg'
import Link from "next/link"

const Header = () => {
  return (
    <header className="py-8 px-16 flex items-center justify-between bg-brand-100">
      <Image src={logoSvg} alt="Logo da SwiftStock" />

      <nav className="flex items-center gap-16 text-white-primary text-base capitalize font-default-font">
        <Link className=" " href={'/'}>Início</Link>

        <Link className=" " href={'/'}>Sobre</Link>
        
        <Link className=" " href={'/'}>Benefícios</Link>

        <Link className=" " href={'/'}>Depoimentos</Link>

        <Link href={'/'} className="text-py-4 px-10 bg-brand-200 rounded-md font-bold hidden sm:flex	">Login</Link>

      </nav>

    </header>
  )
}

export default Header