import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const {cartTotalQuantity} = useSelector(state => state.cart);
    console.log(cartTotalQuantity);
    return (
        <div className='shadow-md sticky top-0 left-0 z-50 bg-white'>
            <div className='flex justify-between align-baseline py-5 container px-4 mx-auto' >
                <div className='text-sm lg:text-2xl '><Link to={'/'}>E-Commerce</Link></div>
                <div className='flex gap-x-3 lg:gap-x-6 '>
                    <Link className='text-sm lg:text-xl' to={'/'}>Home</Link>
                    <Link className='text-sm lg:text-xl' to={'/cart'}>Cart</Link>
                    <Link className='text-sm lg:text-xl' to={''}>About</Link>
                </div>
                <div className='relative'>
                    <div>
                        <Link to={'/cart'}><svg className='w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.00014 14H18.1359C19.1487 14 19.6551 14 20.0582 13.8112C20.4134 13.6448 20.7118 13.3777 20.9163 13.0432C21.1485 12.6633 21.2044 12.16 21.3163 11.1534L21.9013 5.88835C21.9355 5.58088 21.9525 5.42715 21.9031 5.30816C21.8597 5.20366 21.7821 5.11697 21.683 5.06228C21.5702 5 21.4155 5 21.1062 5H4.50014M2 2H3.24844C3.51306 2 3.64537 2 3.74889 2.05032C3.84002 2.09463 3.91554 2.16557 3.96544 2.25376C4.02212 2.35394 4.03037 2.48599 4.04688 2.7501L4.95312 17.2499C4.96963 17.514 4.97788 17.6461 5.03456 17.7462C5.08446 17.8344 5.15998 17.9054 5.25111 17.9497C5.35463 18 5.48694 18 5.75156 18H19M7.5 21.5H7.51M16.5 21.5H16.51M8 21.5C8 21.7761 7.77614 22 7.5 22C7.22386 22 7 21.7761 7 21.5C7 21.2239 7.22386 21 7.5 21C7.77614 21 8 21.2239 8 21.5ZM17 21.5C17 21.7761 16.7761 22 16.5 22C16.2239 22 16 21.7761 16 21.5C16 21.2239 16.2239 21 16.5 21C16.7761 21 17 21.2239 17 21.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg></Link>
                    </div>
                    <span className='absolute w-5 h-5 text-sm lg:text-lg lg:w-6 lg:h-6 bg-red-400 rounded-full text-white font-bold flex justify-center align-center right-[0] bottom-[-3px]'>
                        {cartTotalQuantity}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Navbar