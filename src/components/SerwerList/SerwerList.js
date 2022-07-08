import React, { useEffect, useState } from "react";
import styles from '../SerwerList/SerwerList.module.scss';
import { FaCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import DevicesList from "../DevicesList/DevicesListContainer";

const SerwerList = ({allSerwer, addStoreSerwer}) => {

    const [showDevices, setShowDevices] = useState([])
    const[serwerIP, setSerwerIP] = useState('')

    useEffect(() => {
        let n = allSerwer.length
        setShowDevices(new Array(n).fill(false))
    }, [])

    const addNewSerwer = () => {
        const regexp = /^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/

        if(regexp.test(serwerIP) === false){
            alert("pole IP jest puste, albo za krótkie ")
        } else {
            let newObj = {
                id: Math.floor(Math.random() * 1000),
                serwerIP: serwerIP,
                statusWork: 'active'
            }
            addStoreSerwer(newObj)
            setSerwerIP('')
        }
    }

    return(
        <div className={styles.serwerWrapper}>
            <div className={styles.addWrapper}>
                <div className={styles.dataSerwer}>
                    <input 
                        className={styles.serwerDataForm}
                        type="text"
                        placeholder="adres IP 31.10.22.94"
                        value={serwerIP}
                        onChange={e => setSerwerIP(e.target.value)}
                        >
                    </input>
                </div>
                <button 
                    className={styles.btnAddSerwer} type="button"
                    onClick={addNewSerwer}
                    >
                        Doddaj serwer
                </button>
            </div>

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