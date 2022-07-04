import React, { useState, useEffect } from "react";
import styles from '../DevicesList/DevicesList.module.scss';
import {FaChevronDown, FaChevronUp} from "react-icons/fa";
import { FaMobile } from 'react-icons/fa';
import MobileSettings from "../MobileSettings/MobileSettings";

const DevicesList = ({allDevices}) => {
    const [showSettings, setShowSettings] = useState([]);

    useEffect(() => {
        let devices = allDevices.length
        setShowSettings(new Array(devices).fill(false))
    }, [])

    return(
        <div className={styles.devicesWrapper}>
            {allDevices.map((device, index) =>(
                <div className={styles.device} key={device.id}>
                    <div className={styles.mobileWrapper}>
                        <FaMobile className={styles.mobileIcon}/>
                        <div className={styles.mobileIconMoreWrapper}>
                        <p className={styles.modelTitle}>{device.modelPhone}</p>
                            <button 
                                type="button"
                                className={styles.btnSettings} 
                                onClick={() => {
                                    let arrayMobile = [...showSettings]
                                    arrayMobile[index] = !arrayMobile[index]
                                    setShowSettings(arrayMobile)
                                    }}>
                                {showSettings[index] ? <FaChevronUp className={styles.emailIcon}/> : <FaChevronDown className={styles.emailIcon} />}
                            </button>
                        </div>
                    </div>
                    <p className={styles.seriaNumber}>IMEI: {device.seriaNumber}</p>
                    <div className={styles.settingsWrapper}>
                        {
                        showSettings[index] ? <MobileSettings device={device} /> : null
                        }
                    </div>
                </div>
            ))}
        </div>
    )
}

export default DevicesList;