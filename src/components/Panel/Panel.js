import React from 'react'
import styles from '../Panel/Panel.module.scss';
import {Link} from 'react-router-dom';
import { FaEnvelope, FaCog } from "react-icons/fa";

const Panel = () => {
    return(
        <div className={styles.panelWrapper}>
            <div className={styles.menuWrapper}>
                <p className={styles.nickName}>Zalogowany jako: <span className={styles.nickStyl}>ywyszyn</span></p>
                <Link className={styles.emailIcon} to="/email"> <FaEnvelope className={styles.emailIcon} /></Link>
                <button type="button" className={styles.btnSettings}><FaCog className={styles.settingsIcon} /></button>
            </div>
            <div className={styles.amountWrapper}>
                <p className={styles.balanceTitle}>Stan konta: <span className={styles.balance}>100 €</span></p>
                <p className={styles.balanceTitle}> + <span className={styles.balance}>75 €</span></p>
            </div>
        </div>
    )
}

export default Panel;