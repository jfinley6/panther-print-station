import { NavLink } from 'react-router-dom';
import "./Tab.css"

interface TabProps {
  to: string;
  label: string;
}

export default function Tab({ to, label }: TabProps) {
  return (
    <li>
      <NavLink className={({ isActive }) => (isActive ? 'link-styles active' : 'link-styles')} to={to}><span>{label}</span></NavLink>
    </li>
  );
}