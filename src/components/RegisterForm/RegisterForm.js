import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Button } from 'components/Button/Button';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <input
        type="text"
        name="name"
        placeholder="Username"
        className={css.field}
      />
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
