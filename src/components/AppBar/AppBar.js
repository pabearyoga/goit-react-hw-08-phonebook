import css from './AppBar.module.css';

export const AppBar = () => {
  return (
    <header className={css.wrapper}>
      <section className={css.section}>
        <h2 className={css.logo}>Phonebook</h2>
      </section>
    </header>
  );
};
