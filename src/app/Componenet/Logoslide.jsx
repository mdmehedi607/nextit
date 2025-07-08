
// components/LogoMarquee.js
'use client';
import Image from 'next/image';

   const logos = [
  { id: 1, src: '/image/logo1.svg', alt: 'Logo 1' },
  { id: 2, src: '/image/logo2.svg', alt: 'Logo 2' },
  { id: 3, src: '/image/logo3.svg', alt: 'Logo 3' },
  { id: 4, src: '/image/logo4.svg', alt: 'Logo 4' },
  { id: 5, src: '/image/logo5.svg', alt: 'Logo 5' },
  { id: 6, src: '/image/logo6.svg', alt: 'Logo 5' },
];

export default function Logoslide() {
  return (
    <div className="overflow-hidden p-4 bg-white">
      <div className="flex animate-marquee gap-4 md:8 whitespace-nowrap items-center">
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="px-2 flex-shrink-0">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={80}
              height={80}
              className="object-contain w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 "
            />
          </div>
        ))}
      </div>
    </div>
  );
}