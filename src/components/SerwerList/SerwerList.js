import React, { useEffect, useState } from "react";
import styles from '../SerwerList/SerwerList.module.scss';
import { FaCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import DevicesList from "../DevicesList/DevicesList";

const SerwerList = ({allSerwer}) => {

    const [showDevices, setShowDevices] = useState([])

    useEffect(() => {
        let n = allSerwer.length
        setShowDevices(new Array(n).fill(false))
    }, [])
    
    return(
        <div className={styles.serwerWrapper}>
            {allSerwer.map((serwer,index) => (
                <div key={serwer.id}>
                <div className={styles.serwer}>
                    <p className={styles.serwerTitle}>serwer</p>
                    <p className={styles.serwerIP}>IP:{serwer.serwerIP}</p>
                    <p className={styles.serwerStatus}><FaCircle className={serwer.statusWork !== "active" ? styles.statusIconError : styles.statusIcon} /></p>
                    <button
                        type="button"
                        className={styles.btnDevices}
                        onClick={() => {
                            let temp = [...showDevices]
                            temp[index] = !temp[index]
                            setShowDevices(temp)
                            }}>
                        {showDevices[index] ? <FaChevronUp className={styles.iconDevices}/> : <FaChevronDown className={styles.iconDevices} />}
                    </button>
                </div>
                    {
                        showDevices[index] ? <DevicesList /> : null
                    }
                </div>
            ))}
        </div>
    )
}

export default SerwerList;