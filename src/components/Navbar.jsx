// import React from 'react'
// import { NavLink } from 'react-router-dom'

// const Navbar = () => {
//     return (
//         <header className='header'>
//             <NavLink to="/" className='w-10 h-10 rounded-lg bg-white items-center justify-content flex font-bold shadow-md' >

//                 <p className='blue-gradient_text'>UP</p>
//             </NavLink>

//             <nav className=' flex text-lg gap-7 font-medium'>
//                 <NavLink to='/about' className={(isActive) => isActive ? 'Text-blue-500' : 'text-black '} >
//                     About
//                 </NavLink>

//                 <NavLink to='/projects' className={(isActive) => isActive ? 'Text-blue-500' : 'text-black '} >
//                     Projects
//                 </NavLink>
//             </nav>


//         </header>
//     )
// }

// export default Navbar
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className='header'>
            {/* FIXED: Changed 'justify-content' to 'justify-center' */}
            <NavLink to="/" className='w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md' >
                <p className='blue-gradient_text'>UP</p>
            </NavLink>

            <nav className='flex text-lg gap-7 font-medium'>
                {/* FIXED: Added { } around isActive and lowercased 'text-blue-500' */}
                <NavLink to='/about' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'} >
                    About
                </NavLink>

                {/* FIXED: Added { } around isActive and lowercased 'text-blue-500' */}
                <NavLink to='/projects' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'} >
                    Projects
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar