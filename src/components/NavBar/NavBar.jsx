import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import style from '../NavBar/NavBar.module.css';


const NavBar = () => {
  return (
    <nav className={style.NavBar}>
      <ul className={style.gs}>
        <li>
          <NavLink to="/" end>  Inicio
          </NavLink>
        </li>
      </ul>
      <ul className={style.cate}>
        <li>
          <NavLink to="/category/PC" className={({ isActive }) => (isActive ? 'ActiveOption' : 'Option')}>
            PC
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/XBOX" className={({ isActive }) =>  {
            console.log('isActive PC:', isActive);
            return isActive ? 'ActiveOption' : 'Option';
          }}>
            XBOX
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/PS5" className={({ isActive }) => (isActive ? 'ActiveOption' : 'Option')}>
            PS5
          </NavLink>
        </li>
      </ul>
      <div id="carrito" className="carrito">
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
