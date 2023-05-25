
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { useState } from 'react';

function AvatarList() {
  const [scrollLeft, setScrollLeft] = useState(false);
  const [scrollRight, setScrollRight] = useState(true);

  const handleScroll = (scrollOffset) => {
    const list = document.querySelector('.avatar-list');
    const distanceToScroll = Math.abs(scrollOffset);
    const step = Math.sign(scrollOffset) * 40;
    let remainingDistance = distanceToScroll;
    const timerId = setInterval(() => {
      if (remainingDistance < step) {
        list.scrollLeft += remainingDistance;
        clearInterval(timerId);
        return;
      }
      list.scrollLeft += step;
      remainingDistance -= step;
    }, 15);
  };

  const handleScrollLeft = () => {
    const list = document.querySelector('.avatar-list');
    const step = list.clientWidth;
    handleScroll(-step);
    setScrollRight(true);
    if (list.scrollLeft - step <= 0) {
      setScrollLeft(false);
    }
  };

  const handleScrollRight = () => {
    const list = document.querySelector('.avatar-list');
    const step = list.clientWidth;
    handleScroll(step);
    setScrollLeft(true);
    if (list.scrollLeft + step >= list.scrollWidth - list.clientWidth) {
      setScrollRight(false);
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center space-x-2 overflow-x-hidden">
        <button
          onClick={handleScrollLeft}
          className={`px-2 py-1 rounded-md bg-white hover:bg-gray-200 transition duration-300 focus:outline-none ${
            scrollLeft ? 'text-gray-900' : 'text-gray-400 cursor-default'
          }`}
          disabled={!scrollLeft}
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        <div className="avatar-list flex flex-nowrap space-x-2 overflow-x-hidden">
          <img src="https://picsum.photos/id/1015/120/120" alt="Avatar 1" className="w-50 h-50 rounded-full" />
          <img src="https://picsum.photos/id/1022/120/120" alt="Avatar 2" className="w-50 h-50 rounded-full" />
          <img src="https://picsum.photos/id/1023/120/120" alt="Avatar 3" className="w-50 h-50 rounded-full" />
          <img src="https://picsum.photos/id/1024/120/120" alt="Avatar 4" className="w-50 h-50 rounded-full" />
          <img src="https://picsum.photos/id/1035/120/120" alt="Avatar 5" className="w-50 h-50 rounded-full" />
          <img src="https://picsum.photos/id/1045/120/120" alt="Avatar 6" className="w-50 h-50 rounded-full" />
          <img src="https://picsum.photos/id/1050/120/120" alt="Avatar 7" className="w-50 h-50 rounded-full" />
          <img src="https://picsum.photos/id/1060/120/120" alt="Avatar 8" className="w-50 h-50 rounded-full" />
          <img src="https://picsum.photos/id/1015/120/120" alt="Avatar 1" className="w-50 h-50 rounded-full" />
          <img src="https://picsum.photos/id/1022/120/120" alt="Avatar 2" className="w-50 h-50 rounded-full" />
          <img src="https://picsum.photos/id/1023/120/120" alt="Avatar 3" className="w-50 h-50 rounded-full" />
          <img src="https://picsum.photos/id/1024/120/120" alt="Avatar 4" className="w-50 h-50 rounded-full" />
          <img src="https://picsum.photos/id/1035/120/120" alt="Avatar 5" className="w-50 h-50 rounded-full" />
          <img src="https://picsum.photos/id/1045/120/120" alt="Avatar 6" className="w-50 h-50 rounded-full" />
          <img src="https://picsum.photos/id/1050/120/120" alt="Avatar 7" className="w-50 h-50 rounded-full" />
          <img src="https://picsum.photos/id/1060/120/120" alt="Avatar 8" className="w-50 h-50 rounded-full" />
        </div>
        <button
          onClick={handleScrollRight}
          className={`px-2 py-1 rounded-md bg-white hover:bg-gray-200 transition duration-300 focus:outline-none ${
            scrollRight ? 'text-gray-900' : 'text-gray-400 cursor-default'
          }`}
          disabled={!scrollRight}
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default AvatarList;

// import React, { useState } from 'react';


// const Carousel= ()=>{
//     const slides = [
//         {
//           url: 'https://images.unsplash.com/photo-1571296541989-88ac5b9ae51c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
//         },
//         {
//           url: 'https://images.unsplash.com/photo-1618771622937-35409be962fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
//         },
//         {
//           url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
//         },
    
//         {
//           url: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
//         },
//         {
//           url: 'https://images.unsplash.com/photo-1612869538502-b5baa439abd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
//         },
//       ];
    
//       const [currentIndex, setCurrentIndex] = useState(0);
    
//       const prevSlide = () => {
//         const isFirstSlide = currentIndex === 0;
//         const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//         setCurrentIndex(newIndex);
//       };
    
//       const nextSlide = () => {
//         const isLastSlide = currentIndex === slides.length - 1;
//         const newIndex = isLastSlide ? 0 : currentIndex + 1;
//         setCurrentIndex(newIndex);
//       };
    
//       const goToSlide = (slideIndex) => {
//         setCurrentIndex(slideIndex);
//       };
//       setTimeout(() => {
//         nextSlide();
//       }, 5000);
//       return (
//         <div className='max-w-[1400px] h-[480px] w-full m-auto py-16 px-4  group'>
//           <div
//             style={{ backgroundImage: `url(${slides[currentIndex].url})` }} 
//             className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
//           ></div>
         
//           <div className='flex top-4 justify-center py-2'>
//             {slides.map((slide, slideIndex) => (
//               <div
//                 key={slideIndex}
//                 onClick={() => goToSlide(slideIndex)}
//                 className='text-2xl cursor-pointer'
//               >
                
//               </div>
//             ))}
//           </div>
//         </div>
//       );
// }
// export default Carousel