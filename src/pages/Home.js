const styles = {
  container: {
    height: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
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
      <h1>
        Welcome to <span style={styles.logo}>Phonebook</span> !
      </h1>

      <p style={styles.text}>
        With this App you can safe your contacts in a one place. Safe,
        convenient and accessible at any time and anywhere in the world!
      </p>
    </div>
  );
}
