import React, { useState } from "react";
import Contracts from "../Contracts/ContractsContainer";
import styles from '../Profile/Profile.module.scss';
import {FaChevronDown, FaChevronUp} from "react-icons/fa";

const Profile = ({name, surname, accountBankNumber}) => {

    const[showContracts, setShowContracts] = useState(false)

    return(
        <div className={styles.profileWrapper}>
           <p className={styles.name}>{name} {surname}</p>
           <p className={styles.contact}>+48 881 221 441</p>
           <p className={styles.contact}>jan.kowalski@gmail.com</p>
           <p className={styles.contact}>Ul.Wolska 30/12, Warszawa</p>
           <p className={styles.contact}>{accountBankNumber}</p>
           <div className={styles.contractList}>
                <p className={styles.title}>Umowy</p>
                <button
                    type="button"
                    className={styles.btn}
                    onClick={() => setShowContracts(!showContracts)}>
                    {showContracts? <FaChevronUp className={styles.iconDevices} /> : <FaChevronDown className={styles.iconDevices} />}
                </button>
           </div>
            {showContracts ? <Contracts /> : null}
        </div>
    )
}

export default Profile;