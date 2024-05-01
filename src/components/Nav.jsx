// import { headerLogo } from '../assets/images';
// import { hamburger } from '../assets/icons';
// import { navLinks } from '../constants'
// import { useState } from 'react';

// const Nav = () => {
//   const [menuOpen, setMenuOpen] = useState(false);


//   return (
//     <header className='padding-x py-8 absolute z-10 w-full'>
//       <nav className='flex justify-between items-center max-container'>
//         <a href="/">
//           <img 
//             src={headerLogo} 
//             alt="logo"
//             width={130}
//             height={29}
//           />
//         </a>

//         <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
//           {navLinks.map(link => (
//             <li key={link.label}>
//               <a 
//                 href={link.href}
//                 className='font-monserrat leading-normal text-lg text-slate-gray'
//               >
//                 {link.label}
//               </a>
//             </li>
//           ))}
//         </ul>

//         <div className='hidden max-lg:block'>
//           <button className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-200" onClick={() => setMenuOpen(!menuOpen)}>
//             <img 
//               src={hamburger} 
//               alt="Hamburger"
//               width={25}
//               height={25}
//             />
//           </button>
//         </div>
//       </nav>
//     </header>
//   )
// }

// export default Nav













// import { headerLogo } from '../assets/images';
// import { hamburger } from '../assets/icons';
// import { navLinks } from '../constants';
// import { useState } from 'react';

// const Nav = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className='padding-x py-8 absolute z-10 w-full'>
//       <nav className='flex justify-between items-center max-container'>
//         <a href="/">
//           <img 
//             src={headerLogo} 
//             alt="logo"
//             width={130}
//             height={29}
//           />
//         </a>

//         {/* Navigation links */}
//         <ul className={`flex-1 flex justify-center items-center gap-16 max-lg:hidden ${menuOpen ? 'hidden' : 'block'}`}>
//           {navLinks.map(link => (
//             <li key={link.label}>
//               <a 
//                 href={link.href}
//                 className='font-monserrat leading-normal text-lg text-slate-gray'
//               >
//                 {link.label}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Hamburger icon */}
//         <div className='hidden max-lg:block'>
//           <button className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-200" onClick={() => setMenuOpen(!menuOpen)}>
//             <img 
//               src={hamburger} 
//               alt="Hamburger"
//               width={25}
//               height={25}
//             />
//           </button>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Nav;






// import { headerLogo } from '../assets/images';
// import { hamburger } from '../assets/icons';
// import { useState } from 'react';
// import MobileMenu from './MobileMenu';
// import { navLinks } from '../constants'

// const Nav = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleMenuClick = () => {
//     setMenuOpen(!menuOpen);
//     document.body.classList.toggle('blur-background', !menuOpen);
//   };

//   return (
//     <header className='padding-x py-8 absolute z-10 w-full'>
//       <nav className='flex justify-between items-center max-container'>
//         <a href="/">
//           <img 
//             src={headerLogo} 
//             alt="logo"
//             width={130}
//             height={29}
//           />
//         </a>

//         <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
//            {navLinks.map(link => (
//             <li key={link.label}>
//               <a 
//                 href={link.href}
//                 className='font-monserrat leading-normal text-lg text-slate-gray'
//               >
//                 {link.label}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Hamburger icon */}
//         <div className='hidden max-lg:block'>
//           <button className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-200" onClick={handleMenuClick}>
//             <img 
//               src={hamburger} 
//               alt="Hamburger"
//               width={25}
//               height={25}
//             />
//           </button>
//         </div>
//       </nav>

//       {/* Menu component */}
//       {menuOpen && <MobileMenu closeMenu={() => setMenuOpen(false)} />}
//     </header>
//   );
// };

// export default Nav;










import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { useState } from 'react';
import MobileMenu from './MobileMenu';
import { navLinks } from '../constants';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle('blur-background', !menuOpen);
  };

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img 
            src={headerLogo} 
            alt="logo"
            width={130}
            height={29}
          />
        </a>

        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map(link => (
            <li key={link.label}>
              <a 
                href={link.href}
                className='font-monserrat leading-normal text-lg text-slate-gray'
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger icon */}
        <div className='hidden max-lg:block'>
          <button className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-200" onClick={handleMenuClick}>
            <img 
              src={hamburger} 
              alt="Hamburger"
              width={25}
              height={25}
            />
          </button>
        </div>
      </nav>

      {/* Menu component */}
      {menuOpen && (
        <div className='blur-background'>
          <MobileMenu closeMenu={() => setMenuOpen(false)} />
        </div>
      )}
    </header>
  );
};

export default Nav;