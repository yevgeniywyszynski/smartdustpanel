import React from "react";
import styles from '../DevicesList/DevicesList.module.scss';
import { FaMobile } from 'react-icons/fa';
import {Link} from 'react-router-dom';

const DevicesList = ({allDevices}) => {
    return(
        <div className={styles.devicesWrapper}>
            {allDevices.map(device =>(
                <div className={styles.device} key={device.id}>
                    <div className={styles.mobileWrapper}>
                        <FaMobile className={styles.mobileIcon}/>
                        <p className={styles.modelTitle}>{device.modelPhone}</p>
                    </div>
                    <p className={styles.seriaNumber}>IMEI: {device.seriaNumber}</p>
                    <Link
                        to={`/panel/mobile${device.id}`}
                        type="button"
                        className={styles.btnInfo}>
                            Open
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default DevicesList;