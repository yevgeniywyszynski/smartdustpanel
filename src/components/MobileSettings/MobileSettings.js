import React from "react";
import styles from '../MobileSettings/MobileSettings.module.scss';
import {FaWifi, FaRegTrashAlt } from 'react-icons/fa';
import {Link} from 'react-router-dom';

const MobileSettings = ({device, removeDevice}) => {
    return(
        <div className={styles.settingsWrapper}
        onClick={(e) => e.stopPropagation()}
        >
            <button className={styles.btnWifi}>
                Wifi <FaWifi className={styles.wifiIcon}/>
            </button>
            <button 
                className={styles.btnRemove}
                type="button"
                onClick={() => removeDevice(device.id)}
            >
                Delate <FaRegTrashAlt className={styles.trashIcon}/>
            </button>
            <Link
                to={`/panel/mobile${device.id}`}
                type="button"
                className={styles.btnInfo}>
                    More
            </Link>
        </div>
    )
}

export default MobileSettings;