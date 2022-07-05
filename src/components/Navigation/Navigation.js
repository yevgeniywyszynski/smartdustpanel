import React, { useState } from 'react'
import { FaEnvelope, FaChevronDown, FaChevronUp, FaUserAlt } from "react-icons/fa";
import {Link} from 'react-router-dom';
import Menu from '../Menu/Menu';
import styles from '../Navigation/Navigation.module.scss';

const Navigation = () => {

    const [showSettings, setShowSettings] = useState(false)

    return(
        <div className={styles.navigationWrapper}>
            <div className={styles.menuWrapper}>
                <Link className={styles.userIcon} to="/panel/profile"> <FaUserAlt className={styles.userIcon} />ywyszyn</Link>
                <Link className={styles.emailIcon} to="/email"> <FaEnvelope className={styles.emailIcon} /></Link>
                <button 
                    type="button"
                    className={styles.btnSettings} 
                    onClick={() => setShowSettings(!showSettings)}>
                        {showSettings ? 
                        <FaChevronUp  className={styles.emailIcon} /> 
                        : 
                        <FaChevronDown className={styles.emailIcon} />} 
                </button>
            </div>
            <div className={styles.menuWrapper}>
                {
                    showSettings ? <Menu /> : null
                }
            </div>
        </div>
    )
}

export default Navigation;