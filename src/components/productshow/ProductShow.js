import React, { useRef, useState } from 'react'
import ReactImageMagnify from 'react-image-magnify'

const ProductShow = ({ images }) => {
    const [imgno, setimgno] = useState(0)
    function hoverLi(id) {
        setimgno(id)
    }

    const handleScroll = (direction) => {
        const scrollStep = 50;
        const ul = document.querySelector('ul.list-inside');
        if (direction === 'down') {
            ul.scrollTo({
                top: ul.scrollTop + scrollStep,
                behavior: 'smooth'
            });
        } else if (direction === 'up') {
            ul.scrollTo({
                top: ul.scrollTop - scrollStep,
                behavior: 'smooth'
            });
        }
    };


    return (
        <div className='flex flex-row justify-start'>
            <div className='list-inside m-1 w-32'>
                <button onClick={() => handleScroll('up')} className='border w-full flex items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
                <ul className="list-inside h-80 overflow-hidden">
                    {images.map((img, ind) => {
                        return (
                            <li key={ind} onMouseEnter={() => hoverLi(ind)}
                                className={'py-1 cursor-pointer ' + ((ind === imgno) ? 'border border-pink-300' : 'border border-gray-200')}>
                                <img className="overflow-hidden p-1" src={img} alt="product image" />
                            </li>
                        )
                    })}
                </ul>
                <button onClick={() => handleScroll('down')} className='border w-full flex items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                    </svg>
                </button>
            </div>
            <span className='relative w-full max-w-[800px] max-h-[230px] m-1'>
                <ReactImageMagnify {...{
                    smallImage: {
                        alt: 'Wristwatch by Ted Baker London',
                        isFluidWidth: true,
                        width: 300,
                        height: 450,
                        src: images[imgno]
                    },
                    largeImage: {
                        src: images[imgno],
                        width: 800,
                        height: 800,
                    },
                    enlargedImagePosition: 'beside',
                    enlargedImageContainerDimensions: {
                        width: '100%', // Adjust the width as needed
                        height: '100%', // Adjust the height as needed
                    },
                    lensStyle: { backgroundColor: 'rgb(0,0,0,.6)' }
                }} />
            </span>
        </div>
    )
}

export default ProductShow