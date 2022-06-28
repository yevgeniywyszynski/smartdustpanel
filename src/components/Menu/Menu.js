import React from "react";
import styles from '../Menu/Menu.module.scss';
import {Link} from 'react-router-dom';

const Menu = () => {
    return(
        <div className={styles.menuWrapper}>
            <Link className={styles.menu} to="settings">ustawienia</Link>
            <Link classname={styles.menu} to="profile">mój profil</Link>
        </div>
    )
}

export default Menu;