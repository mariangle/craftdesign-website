import Link from "next/link"

const Nav = () => {
  return (
    <nav className='flex justify-between py-6 max-w-screen-xl mx-auto px-4 items-center'>
        <div><b><Link href="/">CRAFT</Link></b></div>
        <div>
            <ul className='flex gap-6'>
                <li><Link href="/works">Our Works</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/about">About Us</Link></li>
            </ul>
        </div>
        <div>
            <button className='bg-white px-4 py-2 shadow-xl'><Link href="/contact">Contact Us</Link></button>
        </div>
    </nav>
  )
}

export default Nav