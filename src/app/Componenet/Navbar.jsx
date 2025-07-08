'use client'
import { Button } from "@/components/ui/button"
import { AlignCenter, ArrowBigRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"


import Dialogebox from "./Dialogebox";

const navitem = [
    {
        name: 'Home',
        path: '/'
    },
       {
        name: 'Feature',
        path: '/feature'
    },
       {
        name: 'Community',
        path: '/community'
    },
       {
        name: 'Blog',
        path: '/blog'
    },
       {
        name: 'Pricing',
        path: '/pricing'
    },

]


function Navbar() {
  const [isOpen, setIsOpen]= useState(false);
  const [isDialogeOpen, setIsDialogeOpen] = useState(false);
  return (
     <header className="w-full flex justify-center items-center p-1 md:p-3 bg-white shadow-sm fixed top-0 left-0 z-50 relaive">
       <div className="w-[90%] flex justify-between items-center">
        <div className="md:px-3 flex justify-center items-center">
         <Link href='/' className="flex justify-center items-center">
           <Image src='/image/Icon.svg' width={30} height={30} alt="logo" className="flex justify-center items-center"/>
           <span className="text-xl font-bold text-green-900 px-1">NextIt</span>
         </Link>
       </div>
       <div className="flex  justify-center items-center">
        <nav className=" hidden md:flex justify-baseline items-center gap-5">
          <div className=' md:flex justify-center  items-center gap-5 px-5'>
                {navitem.map((item, index)=><Link key={index} href={item.path} className="block text-md text-gray-500 hover:text-gray-700 my-4 md:my-0 ">{item.name}</Link>)}
          </div>
          <div className="flex justify-center items-center">
            
            <Button className='flex justify-center items-center text-sm md:text-md md:gap-1 bg-green-600 p-1 rounded-sm hover:bg-green-700 cursor-pointer' onClick={()=> setIsDialogeOpen(!isDialogeOpen)}>
              <span>Register Now</span>
              <ArrowBigRight/>
            </Button>
            
          </div>

          
        </nav>
       </div>
        <div className="p-2 flex justify-center items-center md:hidden">
         <Button variant='ghost' size='icon'onClick={()=> setIsOpen(!isOpen)} className='text-lg text-gray-700'>{isOpen ? 'X':<AlignCenter width={10}/>}</Button>
        </div>
        <div className={`w-screen h-screen bg-white absolute top-15 md:top-19 right-0 z-10 flex flex-col items-center gap-4  md:hidden shadow-md py-6 ${isOpen ? 'translate-x-0':'translate-x-100'} transition duration-300`}>
          {navitem.map((item,index)=><Link key={index} href={item.path} className='text-right w-full flex justify-center px-10 py-2 text-gray-600 hover:text-gray-700'>{item.name}</Link>)}
           <div className="flex items-center">
            
            <Button className='flex justify-center items-center text-sm md:text-md md:gap-1 bg-green-600 p-1 rounded-sm hover:bg-green-700 cursor-pointer' onClick={()=> setIsDialogeOpen(!isDialogeOpen)} >
              <span>Register Now</span>
              <ArrowBigRight/>
            </Button>
            
          </div>
        </div>
       </div>

       <Dialogebox isDialogeOpen={isDialogeOpen} setIsDialogeOpen={setIsDialogeOpen}/>
     </header>

     

  )
}

export default Navbar;