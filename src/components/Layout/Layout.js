import React from 'react';
import styles from '../Layout/Layout.module.scss';
import {Outlet} from 'react-router-dom';

const Layout = () => {

    return(
        <div className={styles.layoutWrapper}>
            <div className={styles.titleWrapper}>
                <p className={styles.title}>Welcome Your's</p>
                <img src= "https://smartdust.me/wp-content/uploads/2021/05/Smartdust_logo_poziome.svg" ></img>
                <p className={styles.title}>Panel</p>
            </div>
            <Outlet/>
        </div>
    )
}

export default Layout;