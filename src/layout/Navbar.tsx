import icon from '../../assets/icon.svg';
import Tab from '../renderer/components/navbar/Tab';
import "./Navbar.css"

export default function Navbar() {
  return (
        <ul className='nav'>
          <img src={icon} alt="logo" className='logo' />
          <Tab to="/" label="Home" />
          <Tab to="/toe-tag" label="Production" />
          <Tab to="/serial-number-tag" label="Serial Number" />
          <Tab to="/part-tag" label="Parts" />
          <Tab to="/crate-tag" label="Crates" />
        </ul>
  );
}
