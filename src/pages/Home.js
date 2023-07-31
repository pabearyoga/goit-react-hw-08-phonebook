import { Book } from 'components/Book/Book';

const styles = {
  container: {
    height: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '50px',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '5px',
    marginTop: '20px',
  },
  logo: {
    backgroundColor: '#f44336',
    padding: '10px',
    borderRadius: '50px',
    color: '#fff',
    fontSize: '24px',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  text: {
    fontWeight: '700',
    color: '#f44336',
    marginTop: '50px',
    textAlign: 'center',
    padding: '0 50px',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Welcome to <span style={styles.logo}>Phonebook</span> !
      </h1>
      <Book></Book>
    </div>
  );
}
