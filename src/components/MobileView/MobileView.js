import React, { useState }  from "react";
import styles from '../MobileView/MobileView.module.scss';

const MobileView = () => {

    const [mobile, setMobile] = useState('')
    
    return(
        <div className={styles.mobileWrapper}>
            Mobile View
        </div>
    )
}

export default MobileView;