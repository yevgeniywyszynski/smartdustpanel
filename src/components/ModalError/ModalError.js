import React from "react"
import styles from '../ModalError/ModalError.module.scss';

const ModalError = ({setFunc, changeIsOpen, inactiveSerwer}) => {
    
    return(
        <div className={styles.modalWrapper}>
            <div className={styles.modal}>
                <div className={styles.btnWrapper}>
                    <p>serwer wymaga uwagi: {inactiveSerwer.length}</p>
                    <button 
                        className={styles.btnExit}
                        onClick={() => setFunc(false)}
                        >
                        Zamknij
                    </button>
                    <button 
                        className={styles.btnOpen}
                        onClick={() => {
                            changeIsOpen(true)
                            setFunc(false)
                        }}
                        >
                        Napraw
                </button>
                </div>
            </div>
        </div>
    )
}

export default ModalError;