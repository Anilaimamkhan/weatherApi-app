// import { MenuIcon } from 'lucide-react'
// import React, { useState, useEffect } from 'react'
// import { motion } from 'framer-motion'

// const Navbar = () => {
//     const [menu, setMenu] = useState(false)
//     const [scrolling, setScrolling] = useState(false)

//     const handleMenu = () => {
//         setMenu(!menu)
//     }

//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 50) {
//                 setScrolling(true)
//             } else {
//                 setScrolling(false)
//             }
//         }

//         window.addEventListener('scroll', handleScroll)
//         return () => window.removeEventListener('scroll', handleScroll)
//     }, [])

//     return (
//         <>
//             <motion.div 
//                 className={`sticky top-0 bg-gradient-to-r from-gray-200 to-gray-400 p-4 text-white ${scrolling ? 'bg-opacity-90 backdrop-blur-md' : ''} w-full z-10`}
//                 initial={{ y: -100 }}
//                 animate={{ y: 0 }}
//                 transition={{ duration: 0.5 }}
//             >
//                 <div className='flex justify-between items-center px-3'>
//                     <div className='cursor-pointer text-3xl md:4xl lg:5xl font-bold hover:text-indigo-400 transition-all duration-300'> Anila.</div>
//                     <ul className='hidden gap-6 cursor-pointer md:flex'>
//                         <li className='hover:text-indigo-400 transition-all duration-300'>Home</li>
//                         <li className='hover:text-indigo-400 transition-all duration-300'>About</li>
//                         <li className='hover:text-indigo-400 transition-all duration-300'>Contact</li>
//                     </ul>
//                     <div className='md:hidden cursor-pointer'>
//                         <MenuIcon onClick={handleMenu} />
//                     </div>
//                 </div>
//                 {
//                     menu && (
//                         <motion.div 
//                             className='flex justify-center items-center mt-10'
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             transition={{ duration: 0.5 }}
//                         >
//                             <ul className='gap-7 cursor-pointer md:hidden font-bold'>
//                                 <li className='hover:text-indigo-400 transition-all duration-300'>Home</li>
//                                 <li className='hover:text-indigo-400 transition-all duration-300'>About</li>
//                                 <li className='hover:text-indigo-400 transition-all duration-300'>Contact</li>
//                             </ul>
//                         </motion.div>
//                     )
//                 }
//             </motion.div>

//             {/* Hero Section with Scroll Animation */}
//             <motion.div 
//                 className='w-full h-[400px] p-0 mt-6 bg-[url("https://images.unsplash.com/photo-1730544531296-ea17ddc154fd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-center bg-cover flex items-center justify-center'
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 1.5 }}
//             >
//                 <motion.h1 
//                     className='text-5xl font-bold text-white'
//                     initial={{ scale: 0.8 }}
//                     animate={{ scale: 1 }}
//                     transition={{ duration: 1.2 }}
//                 >
//                     Welcome to My Website
//                 </motion.h1>
//             </motion.div>

//             {/* Card Section */}
//             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10'>
//                 <motion.div className='bg-red-500 h-20 flex items-center justify-center text-white text-lg font-semibold' whileHover={{ scale: 1.1, rotate: 5 }}>Box 1</motion.div>
//                 <motion.div className='bg-green-500 h-20 flex items-center justify-center text-white text-lg font-semibold' whileHover={{ scale: 1.1, rotate: -5 }}>Box 2</motion.div>
//                 <motion.div className='bg-blue-500 h-20 flex items-center justify-center text-white text-lg font-semibold' whileHover={{ scale: 1.1, rotate: 5 }}>Box 3</motion.div>
//             </div>

//             {/* Gallery Section */}
//             <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10'>
//                 {Array.from({ length: 8 }).map((_, i) => (
//                     <motion.div 
//                         key={i} 
//                         className='bg-gray-300 h-40 flex items-center justify-center text-lg font-semibold' 
//                         whileHover={{ scale: 1.05, rotate: 2 }}
//                     >
//                         Gallery {i + 1}
//                     </motion.div>
//                 ))}
//             </div>

//             {/* Footer */}
//             <footer className='text-center p-6 bg-gray-800 text-white'>
//                 © 2025 Anila. All rights reserved.
//             </footer>
//         </>
//     )
// }

// export default Navbar