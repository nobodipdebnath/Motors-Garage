import logo from '../assets/images/logo2.png'
import { NavLink } from 'react-router';

const NavBar = () => {
    const links =<>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
    </>
    return (
        <nav className='flex justify-between items-center'>
            <div>
                <img className='h-14 w-auto object-cover' src={logo} alt="" />
            </div>
            <ul className='flex items-center gap-6 text-white'>
                {links}
            </ul>
            <div>
                <button className='common-btn'>Book Appointment</button>
            </div>
        </nav>
    );
};

export default NavBar;