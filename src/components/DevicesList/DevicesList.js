import React, {useEffect} from "react";
import styles from '../DevicesList/DevicesList.module.scss';
import {FaChevronDown, FaChevronUp} from "react-icons/fa";
import { FaMobile } from 'react-icons/fa';
import MobileSettings from "../MobileSettings/MobileSettingsContainer";

const DevicesList = ({allDevices, serverIndex, devicesListOpen, showMobileSettings}) => {

    useEffect(()=>{
        let temp = {...devicesListOpen}
            if(!devicesListOpen[serverIndex]) {
                temp[serverIndex] = new Array(allDevices.length).fill(false)
                showMobileSettings(temp)
            }
    }, [])

    return(
        <div className={styles.devicesWrapper}>
            {allDevices.map((device, index) =>(
                <div className={styles.device} key={device.id}
        
                    onClick={(e) => {
                            e.stopPropagation()
                            let arrayMobile = {...devicesListOpen}
                            arrayMobile[serverIndex][index] = !arrayMobile[serverIndex][index]
                            showMobileSettings(arrayMobile)
                    }}>

                    <div className={styles.mobileWrapper}>
                        <FaMobile className={styles.mobileIcon}/>
                        <p className={styles.modelTitle}>{device.modelPhone}</p>
                        <p className={styles.seriaNumber}>IMEI: {device.seriaNumber}</p>
                        <button 
                            type="button"
                            className={styles.btnSettings}>
                            {
                            (devicesListOpen.serverIndex && devicesListOpen.serverIndex[index])
                            ?
                            <FaChevronUp className={styles.emailIcon}/> 
                            : 
                            <FaChevronDown className={styles.emailIcon} />
                            }
                        </button>
                    </div>

                    {
                        (devicesListOpen[serverIndex] && devicesListOpen[serverIndex][index]) ?
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