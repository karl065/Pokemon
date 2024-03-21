import styles from './LandingPage.module.css';
import {Link} from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pokebola}>
        <div className={styles.pokeballBtn}>
          <Link className={styles.link} to="/home">
            <span className={styles.textos}>¡Atrápalos ya!</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
