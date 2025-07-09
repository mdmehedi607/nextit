import Image from "next/image";
import Navbar from "./Componenet/Navbar";
import Slider from "./Componenet/Slider";
import Logoslide from "./Componenet/Logoslide";
import { ArrowBigRight, ArrowRight, Building, Contact, CreditCard, HandCoins, Webhook } from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Footer from "./Componenet/Footer";


export default function Home() {
  const cardItems = [
    {
      icon: <Contact className="w-8 h-8 text-green-500"/>,
      title: "Membership Organization",
      details:
        "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      icon: <Building className="w-8 h-8 text-green-500"/>,
      title: "National Associations",
      details:
        "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      icon: <Webhook className="w-8 h-8 text-green-500"/>,
      title: "Clubs And Groups",
      details:
        "Our membership management software provides full automation of membership renewals and payments",
    },
  ];

  const helpingItems = [
    {
      icon: <Contact className="w-6 h-6 md:w-10 md:h-10 text-green-500"/>,
      count: '2,245,341',
      subject: 'Members'
    },
     {
      icon: <Building className="w-6 h-6 md:w-10 md:h-10 text-green-500"/>,
      count: '45,341',
      subject: 'Clubs'
    },
     {
      icon: <HandCoins className="w-6 h-6 md:w-10 md:h-10 text-green-500"/>,
      count: '2,24,341',
      subject: 'Event Bookings'
    },
     {
      icon: <CreditCard className="w-6 h-6 md:w-10 md:h-10 text-green-500"/>,
      count: '4,455,341',
      subject: 'Payments'
    },
  ]

   const logos = [
  { id: 1, src: '/image/Logo1.svg', alt: 'Logo 1' },
  { id: 2, src: '/image/Logo2.svg', alt: 'Logo 2' },
  { id: 3, src: '/image/Logo3.svg', alt: 'Logo 3' },
  { id: 4, src: '/image/Logo4.svg', alt: 'Logo 4' },
  { id: 5, src: '/image/Logo5.svg', alt: 'Logo 5' },
  { id: 6, src: '/image/Logo6.svg', alt: 'Logo 5' },
];

const marketingItems = [
   {
    id:1,
    image:'/image/market/image1.png',
    title:'Creating Streamlined Safeguarding Processes with OneRen'
   },
    {
    id:2,
    image:'/image/market/image2.png',
    title:'What are your safeguarding responsibilities and how can you manage them?',
   },
       {
    id:3,
    image:'/image/market/image3.png',
    title:'Revamping the Membership Model with Triathlon Australia?',
   },
]

  return (
    <main className="w-full h-auto">
      <Navbar />
      <Slider />
      {/* Client Section */}
      <div className="w-full flex flex-col justify-center items-center p-4 gap-3 md:p-8 md:gap-5">
        <div className="flex flex-col justify-center items-center gap-3">
          <h4 className="text-xl md:text-3xl font-bold text-gray-800 ">
            Our Happy Clients
          </h4>
          <p className="text-sm md:text-lg text-gray-400">
            We have been working with almost 300+ clients
          </p>
          <div className="flex justify-between items-center w-19/20 overflow-hidden mx-auto">
            <Logoslide />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <h3 className="text-xl md:text-4xl font-bold text-gray-800 text-center">
            Manage your entire community <br/> in a single system
          </h3> 
          <p className="text-sm md:text-lg text-gray-500">Who is next it suitable for?</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20 px-5">
            {cardItems.map((item, index)=>
            <Card key={index} className='p-4 '>
              <CardContent className='flex flex-col justify-between items-center gap-4'>
                <div className="flex justify-center items-center bg-green-50 rounded-br-3xl rounded-tl-3xl p-5">
                  {item.icon}
                </div>
                <div className="flex flex-col gap-4 justify-center items-center">
                  <h4 className="text-2xl text-gray-700 font-bold text-center">{item.title}</h4>
                   <p className="text-lg text-gray-500 text-center">{item.details}</p>
                </div>
              </CardContent>
            </Card>
            )}
            
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 p-1 md:p-10">
          <div className="flex flex-2 justify-center items-center md:p-8">
            <img src='/image/pana.png'  className="w-full h-auto object-cover"/>
          </div>
          <div className="flex flex-3 justify-center items-center p-5">
            <div className="flex flex-col justify-baseline items-center gap-3">
               <h3 className="text-xl md:text-3xl text-gray-800 font-bold">The unseen of spending three years at Pixelgrade</h3>
               <p className="text-sm md:text-lg text-gray-400 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
          <div className='w-full'>
            <Link href='/'>
            <Button className='text-[12px] md:text-md bg-green-600 px-4 md:px-8  md:py-5 rounded-sm hover:bg-green-700 cursor-pointer'>Learn More </Button>
            </Link>
          </div>
            </div>
          </div>
        </div>
      </div>
      {/* Helping section*/}
      <div className="flex flex-col justify-center items-center gap-5 ">
         <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 px-4 md:px-15 py-4 bg-green-50">
           <div className="flex flex-2 flex-col gap-3 justify-baseline md:p-15">
            <h3 className="text-xl md:text-3xl text-gray-800 font-bold">Helping a local <br/> <span className="text-green-500">business reinvent itself</span></h3>
            <p className="text-sm md:text-lg text-gray-400">We reached here with our hard work and dedication</p>
           </div>
           <div className="flex flex-3 justify-center items-center">
            <div className="grid grid-cols-2 gap-2 md:gap-5">
              {helpingItems.map((item, index)=>
               <div key={index} className="flex gap-1 md:gap-3 justify-center items-center p-4">
                 <div className="flex justify-center items-center">{item.icon}</div>
                 <div className="flex flex-col justify-center items-center">
                  <span className="text-xl md:text-3xl font-bold text-gray-800">{item.count}</span>
                  <span className="text-sm md:text-lg text-gray-500">{item.subject}</span>
                 </div>
               </div>
              )}
            </div>
           </div>
         </div>


           <div className="flex flex-col md:flex-row justify-center items-center gap-3 p-4 md:p-10">
          <div className="flex flex-2 justify-center items-center md:p-8">
            <img src='/image/rafiki.png'  className="w-full h-auto object-cover"/>
          </div>
          <div className="flex flex-3 justify-center items-center p-5">
            <div className="flex flex-col justify-baseline  gap-3">
               <h3 className="text-xl md:text-3xl text-gray-800 font-bold">How to design your site footer like we did</h3>
               <p className="text-sm md:text-lg text-gray-400 ">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
          <div className='w-full'>
            <Link href='/'>
            <Button className='text-[12px] md:text-md bg-green-600 px-4 md:px-8  md:py-5 rounded-sm hover:bg-green-700 cursor-pointer'>Learn More </Button>
            </Link>
          </div>
            </div>
          </div>
        </div>


          <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-12 bg-gray-50 px-8 py-6 md:py-6 md:px-25 ">
          <div className="flex flex-2 justify-center items-center">
            <img src='/image/black.png'  className="w-full h-auto object-cover"/>
          </div>
          <div className="flex flex-5 justify-center">
            <div className="flex flex-col justify-baseline  gap-3">
               <p className="text-sm md:text-lg text-gray-400 ">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
               <span className='text-xl text-green-600 font-bold'>JHON SHAMSON</span>
               <span className="text-sm md:text-lg text-gray-400">British Dragon Boat Racing Association</span>
               <div className='flex flex-col md:flex-row justify-baseline items-center gap-4'>
                  <div className='flex baseline items-center gap-2 md:gap-8'>
                    {logos.map((logo, index)=> <div key={index}>
                       <Image 
                        src={logo.src}
                        alt={logo.alt}
                        width={50}
                        height={50}
                       />
                    </div>)}
                  </div>
                  <div className="flex justify-center items-center">
                    <Link href='/' className='text-lg text-green-600 flex justify-center items-center gap-2'>
                     Meet All Customer 
                     <ArrowBigRight/>
                    </Link>
                  </div>
               </div>
            </div>
          </div>
        </div>

        <div className='flex justify-center items-center px-5 py-6 md:pb-30 md:px-25 md:py-8 pb-28 flex-col gap-2'>
          <div className='flex justify-center items-center flex-col gap-3 md:w-2/3'> 
             <h2 className='text-xl md:text-3xl text-gray-800 font-bold'>Caring is the new marketing</h2>
             <p className='text-sm md:text-lg text-gray-400 text-center'>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-30 md:gap-4 justify-center items-center ">
             {marketingItems.map((item)=>
             <div key={item.id} className="flex justify-center items-center relative">
                 <Image
                  src={item.image}
                  alt='Marketing Image'
                  width={320}
                  height={230}
                  className="object-cover"
                 />
                 <div className="flex flex-col gap-8 justify-center items-center p-4 rounded-xl bg-white shadow-lg absolute top-45 w-4/5 left-auto">
                    <h5 className="text-center text-[16px] text-gray-400 ">{item.title}</h5>
                    <Link href={`/marketing/${item.id}`} className="text-green-600 text-sm flex gap-2">Read More
                      <ArrowRight/>
                    </Link>
                 </div>
             </div>)}
          </div>
        </div>

      </div>
      <Footer/>
    </main>
  );
}
