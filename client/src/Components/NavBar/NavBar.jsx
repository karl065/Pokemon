import SearchBar from '../SearchBar/SearchBar';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <div className={styles.container}>
      <SearchBar />
    </div>
  );
};

export default NavBar;
