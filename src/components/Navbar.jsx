import Logo from '../assets/images/logo.svg'
import { Menu, X } from 'lucide-react';
// import Button from './Button';
import { useState } from 'react';
export default function Navbar() {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const menuToggle = () => {
        setMenuOpen((prevMenuState) => !prevMenuState);
        console.log('hello');
    };



    const closeToggle = () => {
        setMenuOpen(false);
    };




    return (
        <section className='py-10 mx-5 lg:mx-20'>
            <nav className='flex justify-between lg:py-4' >
                <div className='flex gap-10'>
                    <div>
                        <img src={Logo} alt="Logo" />
                    </div>

                    <ul className='flex gap-5 sm:hidden text-[13px] mt-1 '>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Resources</a></li>
                    </ul>
                </div>


                <div className={`menu-icon ${isMenuOpen ? 'hide' : ''}`} onClick={menuToggle}>
                    <Menu className='lg:hidden cursor-pointer' />
                    <ul className='flex gap-7 sm:hidden  text-[13px] '>
                        {/* <li><a href="#">Login</a></li>
                        <li className='bg-cyan rounded-full px-4 py-2'><a href="#">Signup</a></li> */}
                        <button>Login</button>
                        <button className='bg-cyan py-1 px-3 font-bold rounded-full text-[13px] text-white'>Sign Up</button>
                    </ul>
                </div>

                <div className={`menu-info font-bold  ${isMenuOpen ? 'appear' : 'hide'}`} style={{ animationDelay: '0.35s' }}>
                    <ul className='flex flex-col gap-5 p-6 md:p-10 text-[15px] text-center text-white rounded-lg   bg-darkV mt-1 nav-info '>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Resources</a></li>
                        <hr style={{ color: "hsl(257, 7%, 63%)" }} />
                        <li className='flex flex-col gap-7 text-[15px] '>
                            <button>Login</button>
                            <button className='bg-cyan py-1 px-3 font-bold rounded-full  text-white'>Sign Up</button>
                        </li>
                    </ul>
                </div>
                {isMenuOpen && (
                    <div className="close-menu " onClick={closeToggle}>
                        <X />
                    </div>
                )}



            </nav>
        </section>
    )
}
