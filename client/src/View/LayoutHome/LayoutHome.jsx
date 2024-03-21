import NavBar from '../../Components/NavBar/NavBar';
import SideBar from '../../Components/SideBar/SideBar';
import {Outlet} from 'react-router-dom';
import styles from './LayoutHome.module.css';

const LayoutHome = () => {
  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles['main-content']}>
        <NavBar />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutHome;
