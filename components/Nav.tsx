import Link from "next/link"
import { FiPhoneCall } from "react-icons/fi"
import { VscThreeBars } from "react-icons/vsc"
import Button from "./Button"


const Nav = () => {
  return (
    <nav className='flex justify-between py-6 max-w-screen-xl mx-auto px-4 items-center lg:px-12'>
        <div>
          <b>
            <Link href="/" className="text-lg">
              <span className="bg-gradient-to-r from-blue-500">CRAFT</span>
              DESIGN
            </Link>
          </b>
        </div>
        <div className="hidden md:block">
            <ul className='flex gap-6'>
                <li><Link href="#services">Services</Link></li>
                <li><Link href="#works">Our Works</Link></li>
                <li><Link href="#about">About Us</Link></li>
            </ul>
        </div>
        <div className="flex items-center gap-4">
            <Button className='bg-white p-2 md:px-6 md:py-3 shadow-xl'>
              <Link href="/contact" className="flex items-center gap-2">
                Contact Us
                <span className="hidden md:block"><FiPhoneCall /></span>
              </Link>
            </Button>
            <div className="md:hidden cursor-pointer">
              <VscThreeBars size={25}/>
            </div>
        </div>
        { /* MOBILE BURGER */}
    </nav>
  )
}

export default Nav