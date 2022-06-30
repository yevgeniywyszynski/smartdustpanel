import React, { useState }  from "react";
import styles from '../MobileView/MobileView.module.scss';
import { FaMobileAlt, FaSignal, FaRegTrashAlt } from 'react-icons/fa';

const MobileView = () => {

    const [mobile, setMobile] = useState('')
    
    return(
        <div className={styles.mobileWrapper}>
            <div className={styles.mobileDetail}>
                <p className={styles.mobileTitle}>Samsung s22</p>
                <p className={styles.seriaNumber}>IMEI: 112356788954</p>
                <FaMobileAlt className={styles.mobileIcon} />
            </div>
            <div className={styles.controlWrapper}>
                <div className={styles.btnWrapper}>
                    <button 
                        type="button"
                        className={styles.wifiBtn}>
                           Wifi <FaSignal className={styles.wifiIcon}/>
                    </button>
                </div>
                <div className={styles.btnWrapper}>
                    <button
                        type="button"
                        className={styles.removeBtn}>
                            Remove Phone <FaRegTrashAlt className={styles.trashIcon}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MobileView;