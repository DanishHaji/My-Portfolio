import React, {useState} from 'react';
import { BsMenuUp } from "react-icons/bs";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
            <div className='text-xl font-medium'>Danish</div>
            <ul className='gap-10 lg:gap-16 hidden md:flex'>
                <li className='menuLink'><a href='#hero'>Home</a></li>
                <li className='menuLink'><a href='#about'>About</a></li>
                <li className='menuLink'><a href='#skills'>Skills</a></li>
                <li className='menuLink'><a href='#projects'>Projects</a></li>
                <li className='menuLink'><a href='#contact'>Contact</a></li>
            </ul>
            <BsMenuUp className='md:hidden cursor-pointer' size={40} onClick={toggleMenu} />
        </div>
    {isMenuOpen && (
        <ul className='flex flex-col items-center mt-4 md:hidden'>
          <li className='menuLink'><a href='#hero' onClick={toggleMenu}>Home</a></li>
          <li className='menuLink'><a href='#about' onClick={toggleMenu}>About</a></li>
          <li className='menuLink'><a href='#skills' onClick={toggleMenu}>Skills</a></li>
          <li className='menuLink'><a href='#projects' onClick={toggleMenu}>Projects</a></li>
          <li className='menuLink'><a href='#contact' onClick={toggleMenu}>Contact</a></li>
        </ul>
      )}   
    </div>
  );
}

export default Navbar
