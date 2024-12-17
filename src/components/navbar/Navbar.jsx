import './navbar.css';
import logo from '../../assets/logo.png';
import {Link} from 'react-scroll';
import contact from '../../assets/contact.png';

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-220} duration={500}><img src={logo} alt="" className='logo'/></Link>
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-220} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='about' spy={true} smooth={true} offset={0} duration={500} className="desktopMenuListItem">About</Link>
            <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Portfolio</Link>
            <Link activeClass='active' to='client' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Clients</Link>
        </div>
        <button className="desktopMenuBtn" onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src={contact} alt="" className="desktopMenuImg" />
            Contact Me
        </button>
    </nav>
  )
}

export default Navbar