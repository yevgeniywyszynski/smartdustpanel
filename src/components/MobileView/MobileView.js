import React, { useState, useEffect }  from "react";
import {useParams} from 'react-router-dom';
import styles from '../MobileView/MobileView.module.scss';
import { FaMobileAlt, FaUndoAlt} from 'react-icons/fa';

const MobileView = ({getDeviceById}) => {

    let{id} = useParams()
    const [mobile, setMobile] = useState({})

    useEffect(() =>{
        setMobile(getDeviceById(id)[0])
    }, [])

    
    return(
        <div className={styles.mobileWrapper}>
            <div className={styles.mobileDetail}>
                <p className={styles.mobileTitle}>{mobile.modelPhone}</p>
                <p className={styles.seriaNumber}>IMEI: {mobile.seriaNumber}</p>
                <FaMobileAlt className={styles.mobileIcon} />
            </div>
            <div className={styles.controlWrapper}>
                <div className={styles.btnWrapper}>
                    <button 
                        type="button"
                        className={styles.resetBtn}>
                           RESET <FaUndoAlt className={styles.wifiIcon}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MobileView;