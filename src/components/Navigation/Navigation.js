import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from './Navigation.module.css';
import { Button } from 'components/Button/Button';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={css.link} to="/">
        <Button>Home</Button>
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contact">
          <Button>Phonebook</Button>
        </NavLink>
      )}
    </nav>
  );
};
