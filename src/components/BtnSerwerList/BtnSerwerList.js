import React, { useState } from 'react'
import styles from '../BtnSerwerList/BtnSerwerList.module.scss';
import { FaChevronUp } from "react-icons/fa";
import SerwerList from '../SerwerList/SerwerListContainer';

const BtnSerwerList = () => {

    const [showSerwerList, setShowSerwerList] = useState(false)

    return(
        <div className={styles.btnSerwerListWrapper}>
            <button
                className={styles.btnSerwerList}
                type="button"
                onClick={() => setShowSerwerList(!showSerwerList)}>
                    {showSerwerList? <FaChevronUp  className={styles.emailIcon} />   : "All your's devices" }
            </button>

            <div className={styles.serwerWrapper}>
                {
                    showSerwerList ? <SerwerList /> : null
                }
            </div>
        </div>
    )
}

export default BtnSerwerList;