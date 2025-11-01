import React from 'react';
import { useAuth } from '../context/AuthContext';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
        TaskFlow
      </div>
      <div className={styles.navbarMenu}>
        <span className={styles.navbarUser}>
          Welcome, {user?.name || 'User'}
        </span>
        <button onClick={logout} className={styles.logoutButton}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;