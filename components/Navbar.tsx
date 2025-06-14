import Image from "next/image"
import Link from "next/link"
import NavItems from "./NavItems"

const Navbar = () => {
  return (
    <nav className="navbar" >
        {/* Logo section Clicking on logo will navigate you to home page that's why link used */}
        <Link href={"/"} >
            <div className="flex items-center gap-2.5 cursor-pointer" >
                <Image 
                    src="/images/logo.svg" 
                    alt="logo" 
                    width={46}
                    height={44}    
                />
            </div>
        </Link>

        {/* links section */}
        <div className="flex items-center gap-8" >
            <NavItems/>
            <p>Sign-in</p>
        </div>
    </nav>
  )
}

export default Navbar
