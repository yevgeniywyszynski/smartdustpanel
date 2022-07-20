import React, {useState} from "react";
import styles from '../SerwerList/SerwerList.module.scss';
import { FaCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import DevicesList from "../DevicesList/DevicesListContainer";
import AddSerwer from "../AddSerwer/AddSerwerContainer";
import InstructionDevice from '../InstructionDevice/InsructionDevice';

const SerwerList = ({allSerwer, serwerListOpen, showDevicesList}) => {
    const[showInstruction, setShowInstruction] = useState(false)

    return(
        <div className={styles.serwerWrapper}>
            <AddSerwer setFunc = {setShowInstruction} />

            {showInstruction ? <InstructionDevice setFunc={setShowInstruction} /> : null}
            {allSerwer.map((serwer,index) => (
                <div key={serwer.id} >
                    <div className={serwer.statusWork !== 'active' ? styles.serwerInActive : styles.serwer}
                        onClick={() => {
                            let temp = [...serwerListOpen]
                            temp[index] = !temp[index]
                            showDevicesList(temp)
                        }}>
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