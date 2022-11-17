


import React, { useState } from 'react'
import { HiOutlineX } from 'react-icons/hi'
import { FaAlignJustify, } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function NavDesktop() {
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => setIsOpen(!isOpen)

    return (
        <>

            <div class="   shadow-md w-full fixed z-10 ">
                <div class="  hidden lg:block bg-slate-800 text-gray-300 py-2 text-sm">
                    <div class=" container  mx-auto flex justify-between">
                        <div class="flex items-center">
                            <div>
                                Ne donnez pas suite aux demandes de prise de contact en dehors de la plateforme laissées dans des
                                commentaires!
                                
                            </div>
                        </div>
                        <div class="flex gap-x-4 items-center">
                            <a href="" class=" bg-do-blue-mediumdark px-3 py-1 rounded text-sky-400 font-semibold">We're Hiring</a>

                        </div>
                    </div>
                </div>

                <div className ="  flex justify-between items-center  mx-auto py-5 w-full bg-slate-50">
                    <div className=" container mx-auto flex justify-between items-center gap-x-6 ">
                        <div className=' container mx-auto flex justify-between items-center gap-x-6 '>
                            <div className=' hidden md:block'>
                                <div className=' flex justify-between items-center gap-x-6'>
                                    <img src='./logo1.png' alt="logo continum" width="60px" />
                                      <Link class=" hover:text-gray-600" to = "/"> Accueil</Link> 
                                    <a href="#" class=" hover:text-gray-600">Concerts</a>
                                    <a href="#" class=" hover:text-gray-600">Artistes</a>
                                    <a href="#" class=" hover:text-gray-600">Comment ça marche?</a>
                                    <a href="#" class=" hover:text-gray-600">Pricing</a>
                                </div>
                            </div>
                            <div className='hidden md:block'>
                                <div class="  flex gap-4">
                                    <Link  class=" hover:shadow-lg shadow-md shadow-gray-500/50 border px-5 py-3 rounded-xl  duration-300 ease-out hover:ease-in" to ="/signup"> 
                                       Log In</Link>
                                    <a href="http://localhost:3000/signup" class=" px-5 py-3 rounded-xl hover:shadow-md shadow-lg shadow-blue-800  bg-blue-700 hover:bg-blue-700 active:bg-blue-900 text-white font-bold transition duration-300 ease-out hover:ease-in">Sign
                                        Up</a>
                                </div>
                            </div>
                        </div>
                        <div className=' px-4 '>
                            <div className='md:hidden' onClick={handleClick}>
                                {isOpen ? <HiOutlineX className='h-6 w-6 ' /> : <FaAlignJustify className='h-6 w-6 ' />}


                            </div>
                        </div>

                    </div>


                </div>
                <div className=' container bg-white '>

                    <ul className={!isOpen ? 'hidden' : 'absolute   bg-white w-full h-78  '}>
                        <li className="shadow-lg items-center pl-16 pt-2 h-10  border-b-2  bg-slate-50 w-full"><a href='http://localhost:3000/'>Accueil</a></li>
                        <li className="items-center pl-16 pt-2 h-10  border-b-2  bg-slate-50 w-full">Concerts</li>
                        <li className="items-center pl-16 pt-2 h-10  border-b-2  bg-slate-50 w-full">Artistes</li>
                        <li className="items-center pl-16 pt-2 h-10  border-b-2  bg-slate-50 w-full">Comment ça marche?</li>
                        <li className="items-center pl-16 pt-2 h-10  border-b-2  bg-slate-50 w-full">Pricing</li>
                        <div className=' flex flex-col gap-4'>
                            <button className="mt-3 mx-16 hover:shadow-lg shadow-md shadow-gray-500/50 border px-5 py-3 rounded-xl  duration-300 ease-out hover:ease-in">
                              <Link  className=' p-0 hover:text-gray-800' to ="/signup">  SignUp</Link> 
                            </button>
                            <button className='mb-4 mx-16 px-5 py-3 rounded-xl hover:shadow-md shadow-lg shadow-blue-800  bg-blue-700 hover:bg-blue-700 active:bg-blue-900 text-white font-bold transition duration-300 ease-out hover:ease-in'>Sign in</button>
                        </div>
                    </ul>
                </div>
                 
            </div>
        </>
    )
}
export default NavDesktop