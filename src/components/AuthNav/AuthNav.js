import { NavLink } from 'react-router-dom';
import { Button } from 'components/Button/Button';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div>
      <NavLink className={css.link} to="/register">
        <Button>Register</Button>
      </NavLink>
      <NavLink className={css.link} to="/login">
        <Button>Log In</Button>
      </NavLink>
    </div>
  );
};
