'use client';

import React, { useEffect, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Dialogebox from "./Dialogebox";

const slideritems = [
    {
      image:'/image/illustration.png',
      title:'Your Best IT Solutions',
      span: 'From 8 Years',
      details:'Where to grow your business as a It: site or social media?'
    },
      {
      image:'/image/illustration.png',
      title:'Your Best IT Solutions',
      span: 'From 8 Years',
      details:'Where to grow your business as a It: site or social media?'
    },
      {
      image:'/image/illustration.png',
      title:'Your Best IT Solutions',
      span: 'From 8 Years',
      details:'Where to grow your business as a It: site or social media?'
    },
      {
      image:'/image/illustration.png',
      title:'Your Best IT Solutions',
      span: 'From 8 Years',
      details:'Where to grow your business as a It: site or social media?'
    }

];


export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
    const [isDialogeOpen, setIsDialogeOpen] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  // autoplay effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    }, 7000); // 3 seconds delay

    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <div className="relative w-full mx-auto bg-gray-50 p-4 md:p-8 lg:p-10 z-0 mt-10 md:mt-12 lg:mt-15">
      {/* Slider */}
      <div ref={sliderRef} className="keen-slider  overflow-hidden">
        {slideritems.map((item, index) => (
          <div key={index} className="keen-slider__slide flex justify-center gap-3 md:gap-8 lg:gap-12 items-center">
          
              <div className='flex flex-col items-center p-3 mt-3 md:p-8 lg:p-10 gap-2 md:4'>
               <h3 className='text-lg w-full md:text-3xl lg:text-5xl font-bold text-gray-600 '>{item.title} 
                <span className='text-green-600 block'>{item.span}</span>
               </h3>
              <p className='text-gray-400 text-[12px] md:text-lg lg:text-xl'>{item.details}</p>
          <div className='flex justify-baseline w-full'>
                <Button className='text-[12px] md:text-md bg-green-600 px-4 md:px-8  md:py-5 rounded-sm hover:bg-green-700 cursor-pointer'onClick={()=> setIsDialogeOpen(!isDialogeOpen)}>Register</Button>
          </div>
           </div>
           <div className='p-4 py-10'>
             <img
              src={item.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-cover"
            />
           </div>
          </div>
        ))}
      </div>

 

      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {slideritems.map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`w-2 h-2 rounded-full ${
              currentSlide === idx ? 'bg-green-600' : 'bg-green-100'
            }`}
          />
        ))}
      </div>
      <Dialogebox isDialogeOpen={isDialogeOpen} setIsDialogeOpen={setIsDialogeOpen}/>
    </div>
  );
}
