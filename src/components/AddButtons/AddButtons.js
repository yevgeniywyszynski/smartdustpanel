import React from "react";
import styles from './AddButtons.module.scss';

const AddButtons = ({ setFunc, setShowSerwerInstruction}) => {

    return(
        <div className={styles.addWrapper}>
            <button 
                className={styles.btnAddSerwer} type="button"
                onClick={() => {
                    setShowSerwerInstruction(true)
                }}
                >
                Doddaj serwer
            </button>
            <button 
                className={styles.btnAddSerwer} type="button"
                onClick={() => setFunc(true)}
                >
                Dodaj Urządzenie
            </button>
        </div>
    )
}

export default AddButtons;