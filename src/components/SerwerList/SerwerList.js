import React, { useState } from "react";
import styles from '../SerwerList/SerwerList.module.scss';
import { FaCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import DevicesList from "../DevicesList/DevicesList";

const SerwerList = () => {

    const [showDevices, setShowDevices] = useState(false)

    return(
        <div className={styles.serwerWrapper}>
            <div className={styles.serwer}>
                <p className={styles.serwerTitle}>serwer</p>
                <p className={styles.serwerIP}>IP: 23.43.11.39</p>
                <p className={styles.serwerStatus}><FaCircle className={styles.statusIconError} /></p>
                <button
                    type="button"
                    className={styles.btnDevices}
                    onClick={() => setShowDevices(!showDevices)}>
                    {showDevices ? <FaChevronUp className={styles.iconDevices}/> : <FaChevronDown className={styles.iconDevices} />}
                </button>
            </div>
            {
                showDevices ? <DevicesList /> : null
            }
            <div className={styles.serwer}>
                <p className={styles.serwerTitle}>serwer</p>
                <p className={styles.serwerIP}>IP: 41.01.37.12</p>
                <p className={styles.serwerStatus}><FaCircle className={styles.statusIcon} /></p>
                <button
                    type="button"
                    className={styles.btnDevices}
                    onClick={() => setShowDevices(!showDevices)}>
                    {showDevices ? <FaChevronUp className={styles.iconDevices}/> : <FaChevronDown className={styles.iconDevices} />}
                </button>
            </div>
            {
                showDevices ? <DevicesList /> : null
            }
            <div className={styles.serwer}>
                <p className={styles.serwerTitle}>serwer</p>
                <p className={styles.serwerIP}>IP: 10.87.22.84</p>
                <p className={styles.serwerStatus}><FaCircle className={styles.statusIcon} /></p>
                <button
                    type="button"
                    className={styles.btnDevices}
                    onClick={() => setShowDevices(!showDevices)}>
                    {showDevices ? <FaChevronUp className={styles.iconDevices}/> : <FaChevronDown className={styles.iconDevices} />}
                </button>
            </div>
            {
                showDevices ? <DevicesList /> : null
            }
            <div className={styles.serwer}>
                <p className={styles.serwerTitle}>serwer</p>
                <p className={styles.serwerIP}>IP: 21.17.27.90</p>
                <p className={styles.serwerStatus}><FaCircle className={styles.statusIcon} /></p>
                <button
                    type="button"
                    className={styles.btnDevices}
                    onClick={() => setShowDevices(!showDevices)}>
                    {showDevices ? <FaChevronUp className={styles.iconDevices}/> : <FaChevronDown className={styles.iconDevices} />}
                </button>
            </div>
            {
                showDevices ? <DevicesList /> : null
            }
            <div className={styles.serwer}>
                <p className={styles.serwerTitle}>serwer</p>
                <p className={styles.serwerIP}> IP: 80.27.00.51</p>
                <p className={styles.serwerStatus}><FaCircle className={styles.statusIcon} /></p>
                <button
                    type="button"
                    className={styles.btnDevices}
                    onClick={() => setShowDevices(!showDevices)}>
                    {showDevices ? <FaChevronUp className={styles.iconDevices}/> : <FaChevronDown className={styles.iconDevices} />}
                </button>
            </div>
            {
                showDevices ? <DevicesList /> : null
            }
        </div>
    )
}

export default SerwerList;