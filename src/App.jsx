// import React from 'react'

// const App = () => {
//   return (
//     <>
//       {/* text */}
//       <div className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
//         Anila is Becoming a React Developer! 🌸
//       </div>

//       {/* bg image */}
//       <div className="h-screen bg-[url('https://images.unsplash.com/photo-1589820296156-3b823f1f7050')] bg-cover bg-center">
//         <h1 className="text-gray-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center">
//           Tailwind CSS Responsive Background! 🌸
//         </h1>
//       </div>

//       {/* margin padding */}
//       <div className="bg-gray-200 text-black p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20">
//         Responsive Padding!
//       </div>

//       {/* grid bootstrap */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
//         <div className="bg-red-500 h-20">Box 1</div>
//         <div className="bg-green-500 h-20">Box 2</div>
//         <div className="bg-blue-500 h-20">Box 3</div>
//         <div className="bg-blue-800 h-20">Box 4</div>
//         <div className="bg-blue-200 h-20">Box 5</div>
//         <div className="bg-blue-950 h-20">Box 6</div>

//       </div>

//     </>
//   )
// }

// export default App




// 2nd
// import { useState } from 'react';
// import { Menu, X } from 'lucide-react';

// function App() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//     <nav className="w-full bg-gray-900 text-white p-6">
//       <div className="flex justify-between items-center">

//         {/* Logo */}
//         <h1 className="text-2xl font-bold">Anila's Website 🌸</h1>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-8 text-lg">
//           <li>Home</li>
//           <li>About</li>
//           <li>Projects</li>
//           <li>Contact</li>
//         </ul>

//         {/* Mobile Menu Icon */}
//         <button onClick={toggleNavbar} className="md:hidden">
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <ul className="flex flex-col gap-6 text-center mt-6 md:hidden">
//           <li>Home</li>
//           <li>About</li>
//           <li>Projects</li>
//           <li>Contact</li>
//         </ul>
//       )}
//     </nav>
//     <div className="min-h-screen bg-gray-100 p-6">
//       {/* Hero Section */}
//       <div className="text-center py-16 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-2xl shadow-xl">
//         <h1 className="text-5xl font-bold mb-4">Welcome to My Tailwind UI</h1>
//         <p className="text-lg">Building Responsive Websites with Tailwind CSS</p>
//         <button className="mt-6 px-6 py-2 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-indigo-200 transition">Get Started</button>
//       </div>

//       {/* Grid Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
//         <div className="bg-red-500 h-20 flex items-center justify-center text-white text-lg font-semibold">Box 1</div>
//         <div className="bg-green-500 h-20 flex items-center justify-center text-white text-lg font-semibold lg:col-span-2">Box 2 (Full Width)</div>
//         <div className="bg-blue-500 h-20 flex items-center justify-center text-white text-lg font-semibold">Box 3</div>
//       </div>

//       {/* Card Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
//         <div className="bg-white p-6 rounded-2xl shadow-lg">
//           <h2 className="text-xl font-bold mb-2">Card 1</h2>
//           <p className="text-gray-600">This is a simple card with Tailwind CSS.</p>
//         </div>

//         <div className="bg-white p-6 rounded-2xl shadow-lg">
//           <h2 className="text-xl font-bold mb-2">Card 2</h2>
//           <p className="text-gray-600">Adding more responsiveness and clean UI.</p>
//         </div>

//         <div className="bg-white p-6 rounded-2xl shadow-lg">
//           <h2 className="text-xl font-bold mb-2">Card 3</h2>
//           <p className="text-gray-600">Tailwind CSS is super powerful!</p>
//         </div>
//       </div>
//     </div>
//     {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//   <div className="bg-red-500 h-20">Box 1</div>
//   <div className="bg-green-500 h-20 lg:col-span-2">Box 2</div>
//   <div className="bg-blue-500 h-20 md:col-span-2 lg:col-span-1">Box 3</div>
// </div> */}

//     </> 
//   );
// }

// export default App;


// 3rd METHOD
// import { useState } from "react";

// export default function App() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       {/* Navbar */}
//       <nav className="bg-white shadow-md p-4 flex justify-between items-center rounded-lg mb-8">
//         <h1 className="text-2xl font-bold text-indigo-600">My Website</h1>
//         <div className="hidden md:flex space-x-6">
//           <a href="#" className="text-gray-600 hover:text-indigo-600">Home</a>
//           <a href="#" className="text-gray-600 hover:text-indigo-600">About</a>
//           <a href="#" className="text-gray-600 hover:text-indigo-600">Contact</a>
//         </div>
//         <button onClick={toggleMenu} className="md:hidden text-gray-600">
//           ☰
//         </button>
//       </nav>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white p-4 rounded-lg mb-8">
//           <a href="#" className="block mb-2 text-gray-600 hover:text-indigo-600">Home</a>
//           <a href="#" className="block mb-2 text-gray-600 hover:text-indigo-600">About</a>
//           <a href="#" className="block mb-2 text-gray-600 hover:text-indigo-600">Contact</a>
//         </div>
//       )}

//       {/* Hero Section */}
//       <div className="text-center py-16 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-2xl shadow-xl">
//         <h1 className="text-5xl font-bold mb-4">Welcome to My Tailwind UI</h1>
//         <p className="text-lg">Building Responsive Websites with Tailwind CSS</p>
//         <button className="mt-6 px-6 py-2 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-indigo-200 transition">Get Started</button>
//       </div>

//       {/* Grid Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
//         <div className="bg-red-500 h-20 flex items-center justify-center text-white text-lg font-semibold w-full max-w-4xl">Box 1</div>
//         <div className="bg-green-500 h-20 flex items-center justify-center text-white text-lg font-semibold lg:col-span-2">Box 2 (Full Width)</div>
//         <div className="bg-blue-500 h-20 flex items-center justify-center text-white text-lg font-semibold">Box 3</div>
//       </div>

//       {/* Card Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
//         <div className="bg-white p-6 rounded-2xl shadow-lg">
//           <h2 className="text-xl font-bold mb-2">Card 1</h2>
//           <p className="text-gray-600">This is a simple card with Tailwind CSS.</p>
//         </div>

//         <div className="bg-white p-6 rounded-2xl shadow-lg">
//           <h2 className="text-xl font-bold mb-2">Card 2</h2>
//           <p className="text-gray-600">Adding more responsiveness and clean UI.</p>
//         </div>

//         <div className="bg-white p-6 rounded-2xl shadow-lg">
//           <h2 className="text-xl font-bold mb-2">Card 3</h2>
//           <p className="text-gray-600">Tailwind CSS is super powerful!</p>
//         </div>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
//   <div className="bg-red-500 h-20 flex items-center justify-center text-white text-lg font-semibold w-full">Box 1</div>
//   <div className="bg-green-500 h-20 flex items-center justify-center text-white text-lg font-semibold">Box 2</div>
//   <div className="bg-blue-500 h-20 flex items-center justify-center text-white text-lg font-semibold">Box 3</div>
// </div>

//     </div>
//   );
// }




// khudh ki bnai hoi project
// import React from 'react'
// import Navbar from './component/Navbar'

// const App = () => {
//   return (
//     <>
//       <Navbar/>
//       <Navbar/>
//       <Navbar/>
//       <Navbar/>
//       <Navbar/>
//       <Navbar/>
//       <Navbar/>

//     </>
//   )
// }

// export default App



// WEATHER APP
import React from 'react'
import Weather from './component/weather Api/Weather'

const App = () => {
  return (
    <>
      <Weather/>
    </>
  )
}

export default App
