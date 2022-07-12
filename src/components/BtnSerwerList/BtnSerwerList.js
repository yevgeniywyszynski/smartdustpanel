import React from 'react'
import styles from '../BtnSerwerList/BtnSerwerList.module.scss';
import SerwerList from '../SerwerList/SerwerListContainer';

const BtnSerwerList = ({isOpen, changeIsOpen}) => {

    return(
        <div className={styles.btnSerwerListWrapper}>
            <button
                className={styles.btnSerwerList}
                type="button"
                onClick={() => changeIsOpen(!isOpen)}>
                    {isOpen? "Close your's devices": "All your's devices" }
            </button>

            <div className={styles.serwerWrapper}>
                {
                    isOpen ? <SerwerList /> : null
                }
            </div>
        </div>
    )
}

export default BtnSerwerList;