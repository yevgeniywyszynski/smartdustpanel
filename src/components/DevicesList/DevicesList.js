import React, { useState } from "react";
import styles from '../DevicesList/DevicesList.module.scss';
import { FaMobile } from 'react-icons/fa';

const DevicesList = () => {
    return(
        <div className={styles.devicesWrapper}>
            <div className={styles.device}>
                <div className={styles.mobileWrapper}>
                    <FaMobile className={styles.mobileIcon}/>
                    <p className={styles.modelTitle}>Samsumg s22</p>
                </div>
                <p className={styles.seriaNumber}>IMEI: 15678416000012</p>
                <button
                type="button"
                className={styles.btnInfo}>
                    Open
                </button>
            </div>
            <div className={styles.device}>
                <div className={styles.mobileWrapper}>
                    <FaMobile className={styles.mobileIcon}/>
                    <p className={styles.modelTitle}>Samsumg s6</p>
                </div>
                <p className={styles.seriaNumber}>IMEI: 15678416000012</p>
                <button
                type="button"
                className={styles.btnInfo}>
                    Open
                </button>
            </div>
            <div className={styles.device}>
                <div className={styles.mobileWrapper}>
                    <FaMobile className={styles.mobileIcon}/>
                    <p className={styles.modelTitle}>Samsumg A20</p>
                </div>
                <p className={styles.seriaNumber}>IMEI: 15678416000012</p>
                <button
                type="button"
                className={styles.btnInfo}>
                    Open
                </button>
            </div>
            <div className={styles.device}>
                <div className={styles.mobileWrapper}>
                    <FaMobile className={styles.mobileIcon}/>
                    <p className={styles.modelTitle}>Samsumg s7 Edge</p>
                </div>
                <p className={styles.seriaNumber}>IMEI: 15678416000012</p>
                <button
                type="button"
                className={styles.btnInfo}>
                    Open
                </button>
            </div>
            <div className={styles.device}>
                <div className={styles.mobileWrapper}>
                    <FaMobile className={styles.mobileIcon}/>
                    <p className={styles.modelTitle}>Iphone 11</p>
                </div>
                <p className={styles.seriaNumber}>IMEI: 15678416000012</p>
                <button
                type="button"
                className={styles.btnInfo}>
                    Open
                </button>
            </div>
        </div>
    )
}

export default DevicesList;