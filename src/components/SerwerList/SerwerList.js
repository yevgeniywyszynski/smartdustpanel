import React, { useEffect, useState } from "react";
import styles from '../SerwerList/SerwerList.module.scss';
import { FaCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import DevicesList from "../DevicesList/DevicesListContainer";

const SerwerList = ({allSerwer}) => {

    const [showDevices, setShowDevices] = useState([])

    useEffect(() => {
        let n = allSerwer.length
        setShowDevices(new Array(n).fill(false))
    }, [])

    return(
        <div className={styles.serwerWrapper}>
            {allSerwer.map((serwer,index) => (
                <div key={serwer.id} 
                onClick={() => {
                    let temp = [...showDevices]
                    temp[index] = !temp[index]
                    setShowDevices(temp)
                    }}>
                    <div className={styles.serwer}>
                        <div className={styles.ipWrapper}>
                            <p className={styles.serwerStatus}><FaCircle className={serwer.statusWork !== "active" ? styles.statusIconError : styles.statusIcon} /></p>
                            <p className={styles.serwerIP}>IP: {serwer.serwerIP}</p>
                        </div>
                        <button
                            type="button"
                            className={styles.btnDevices}
                        >
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