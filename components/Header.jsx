import React from 'react'
import Link from 'next/link'
import { useState } from 'react';

const Header = () => {
    const [show, setshow] = useState(false);
  return (
    <div>
        <div className="bg-white bg-opacity-5 border-b  backdrop-blur-sm  bg-blend-multiply border-white/30 shadow-md  ">
            <nav className="2xl:container 2xl:mx-auto sm:py-6 sm:px-7 py-5 px-4">
                {/* For large and Medium-sized Screen */}
                <div className="flex justify-between ">
                    <div className="hidden sm:flex flex-row items-center space-x-6 text-white font-thin lg:-mr-40">
                        <Link
                            class="relative  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-gradient-to-r hover:text-gray-300 from-black to-blue-900 before:transition hover:before:scale-100"
                            href="/Corporate/AboutUs"
                            >
                            Story
                        </Link>
                        <Link
                            class="relative  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-gradient-to-r hover:text-gray-300 from-black to-blue-900 before:transition hover:before:scale-100"
                            href="/Products/RodBallMill"
                            >
                            Leaderboard
                        </Link>
                        <Link
                            class="relative  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-gradient-to-r hover:text-gray-300 from-black to-blue-900 before:transition hover:before:scale-100"
                            href="/Engineering/TurnkeyProjects"
                            >
                            About Us
                        </Link>
                        <Link
                            class="relative  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-gradient-to-r hover:text-gray-300 from-black to-blue-900 before:transition hover:before:scale-100"
                            href="/Gallery"
                            >
                            Gallery
                        </Link>
                    </div>
                    <Link className=" flex -my-4 space-x-3 items-center lg:-ml-24 justify-center " href={'/'}>
                        <img
                            src={'/astro.gif'}
                            width={60}
                            height={60}                        
                        />
                        <p className=' text-white text-3xl font-thin'>Astro Shooter</p>
                        <img
                            src={'/astro.gif'}
                            width={60}
                            height={60}                        
                        />
                    </Link>
                    <div className="hidden sm:flex flex-row space-x-4 items-center mr-5 text-white  ">
                        <Link
                            class="relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-gradient-to-r hover:text-gray-300 from-black to-blue-900 before:transition hover:before:scale-100"
                            href="/Corporate/ContactUs"
                            >
                            Connect Wallet
                        </Link>
                    </div>
                    {/* Burger Icon */}
                    <div id="bgIcon" onClick={()=>setshow(!show)} className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  justify-center items-center sm:hidden cursor-pointer`}>
                        <svg className={`${show ? 'hidden' : ''}`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className=" transform duration-150" d="M4 6H20" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 12H20" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path className=" transform duration-150" d="M4 18H20" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <svg className={`${show ? 'block' : 'hidden'}`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 6L18 18" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
                {/* Mobile and small-screen devices (toggle Menu) */}
                <div id="MobileNavigation" className={`${show ? 'block' : 'hidden'} sm:hidden mt-4 mx-auto`}>
                    <div className="flex flex-row items-center justify-center space-x-6 mt-10 text-gray-600">
                    <Link
                            class="relative  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-gradient-to-r hover:text-gray-300 from-black to-blue-900 before:transition hover:before:scale-100"
                            href="/Corporate/AboutUs"
                            >
                            Corporate
                        </Link>
                        <Link
                            class="relative  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-gradient-to-r hover:text-gray-300 from-black to-blue-900 before:transition hover:before:scale-100"
                            href="/Products/RodBallMill"
                            >
                            Products
                        </Link>
                        <Link
                            class="relative  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-gradient-to-r hover:text-gray-300 from-black to-blue-900 before:transition hover:before:scale-100"
                            href="/Engineering/TurnkeyProjects"
                            >
                            Engineering
                        </Link>
                        <Link
                            class="relative  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-gradient-to-r hover:text-gray-300 from-black to-blue-900 before:transition hover:before:scale-100"
                            href="/Gallery"
                            >
                            Gallery
                        </Link>
                    </div>
                    <div className="flex flex-col gap-4 mt-4 w-full items-center border-t border-gray-300 text-gray-600">
                        <Link
                            class="relative mt-4 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-gradient-to-r hover:text-gray-300 from-black to-blue-900 before:transition hover:before:scale-100"
                            href="/Corporate/ContactUs"
                            >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Header