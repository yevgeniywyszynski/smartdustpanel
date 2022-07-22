import React, { useState } from "react";
import styles from './AddDevice.module.scss';

const AddDevice = ({addStoreDevice}) => {

    const [modelPhone, setModelPhone] = useState('');
    const [phoneIMEI, setphoneIMEI] = useState ('')

    const addNewDevice = () => {
        if(modelPhone == '' || phoneIMEI.length > 15){
            alert('wpisz poprawna nazwe')
        }else {
            let newObj = {
                id: Math.floor(Math.random() * 1000),
                modelPhone: modelPhone,
                seriaNumber: phoneIMEI,
            }
            addStoreDevice(newObj)
            setModelPhone('')
            setphoneIMEI('')
        }
    }

    return(
        <div className={styles.addDeviceWrapper}>
            <input 
                type="text"
                className={styles.addDeviceStyle}
                placeholder="model telefonu"
                maxLength="15"
                value={modelPhone}
                onChange={(e) => setModelPhone(e.target.value)}
            >
            </input>
            <input
                type="text"
                maxLength="15"
                className={styles.addDeviceStyle}
                placeholder="wpisz IMEI: 000000000000000"
                value={phoneIMEI}
                onChange={(e) => setphoneIMEI(e.target.value)}
            >    
            </input>
            <button 
                className={styles.btnAddDevice}
                onClick={addNewDevice}
                >
                Dodaj Urządzenie
            </button>
        </div>
    )
}

export default AddDevice;