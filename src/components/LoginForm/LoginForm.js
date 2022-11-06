import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Button } from 'components/Button/Button';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <input
        type="email"
        name="email"
        placeholder="Email"
        className={css.field}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className={css.field}
      />
      <Button type="submit">Register</Button>
    </form>
  );
};
