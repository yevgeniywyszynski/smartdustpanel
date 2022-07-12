import React, { useState, useEffect } from "react";
import styles from '../DevicesList/DevicesList.module.scss';
import {FaChevronDown, FaChevronUp} from "react-icons/fa";
import { FaMobile } from 'react-icons/fa';
import MobileSettings from "../MobileSettings/MobileSettingsContainer";

const DevicesList = ({allDevices, serverIndex}) => {
    const [showSettings, setShowSettings] = useState([]);

    useEffect(() => {
        let devices = allDevices.length
        setShowSettings(new Array(devices).fill(false))
    }, [])

    return(
        <div className={styles.devicesWrapper}>
            {allDevices.map((device, index) =>(
                <div className={styles.device} key={device.id}
        
                    onClick={(e) => {
                        e.stopPropagation();
                        let arrayMobile = [...showSettings]
                        arrayMobile[index] = !arrayMobile[index]
                        setShowSettings(arrayMobile)
                    }}>

                    <div className={styles.mobileWrapper}>
                        <FaMobile className={styles.mobileIcon}/>
                        <p className={styles.modelTitle}>{device.modelPhone}</p>
                        <p className={styles.seriaNumber}>IMEI: {device.seriaNumber}</p>
                        <button 
                            type="button"
                            className={styles.btnSettings}>
                            {showSettings[index] ? <FaChevronUp className={styles.emailIcon}/> : <FaChevronDown className={styles.emailIcon} />}
                        </button>
                    </div>

                    {
                        showSettings[index] ?

                        <div className={styles.settingsWrapper}>
                            <MobileSettings device={device} />
                        </div> 

                        : null
                    }

                </div>
            ))}
        </div>
    )
}

export default DevicesList;