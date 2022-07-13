import React from "react";
import styles from '../SerwerList/SerwerList.module.scss';
import { FaCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import DevicesList from "../DevicesList/DevicesListContainer";
import AddSerwer from "../AddSerwer/AddSerwerContainer";

const SerwerList = ({allSerwer, serwerListOpen, showDevicesList}) => {

    return(
        <div className={styles.serwerWrapper}>
            <AddSerwer />
            {allSerwer.map((serwer,index) => (
                <div key={serwer.id} 
                    onClick={() => {
                        let temp = [...serwerListOpen]
                        temp[index] = !temp[index]
                        showDevicesList(temp)
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
                            {serwerListOpen[index] ? <FaChevronUp className={styles.iconDevices}/> : <FaChevronDown className={styles.iconDevices} />}
                        </button>
                    </div>

                    {
                        serwerListOpen[index] ? <DevicesList serverIndex={index}/> : null
                    }
                    
                </div>
            ))}
        </div>
    )
}

export default SerwerList;