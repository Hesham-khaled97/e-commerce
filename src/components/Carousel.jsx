import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const Carousel = () => {
    let slides = [
        "https://ewm.swiss/application/files/8216/1597/9679/E-commerce_web_design_EWM_SA_Digital_Agency_Geneva.jpg",
        "https://imatrix.com/wp-content/uploads/sites/12/2021/03/ecommerce.jpg",
        "https://www.navy-usna.org/wp-content/uploads/2021/07/1-2.jpg"
      ];

    const [current, setCurrent] = useState(0);

    const previousSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    }
    
    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    }

    return (
        <div className='relative full-height overflow-hidden'>
            <div className='flex transition ease-out duration-40' style={{
                transform: `translateX(-${current * (100 / slides.length)}%)`,
                width: `${slides.length * 100}%`,
            }}>
                {slides.map((slide, index) => (
                    <div key={index} className='w-full full-height bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${slide})`, flex: `0 0 ${100 / slides.length}%` }} />
                ))}
            </div>
            <div className='absolute top-0 flex px-4 items-center justify-between h-full w-full text-3xl text-gray-600'>
                <button onClick={previousSlide}><FaArrowAltCircleLeft /></button>
                <button onClick={nextSlide}><FaArrowAltCircleRight /></button>
            </div>
            <div className='absolute bottom-0 flex items-center justify-center w-full py-3 gap-2'>
                {slides.map((_, index) => (
                    <div key={index} onClick={() => setCurrent(index)} className={`w-5 h-5 rounded-full cursor-pointer ${index === current ? 'bg-gray-600' : 'bg-gray-300'}`} />
                ))}
            </div>
        </div>
    );
}

export default Carousel;
