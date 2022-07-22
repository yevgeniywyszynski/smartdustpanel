import React, { useState } from "react";
import styles from '../SerwerAddForm/SerwerAddForm.module.scss';

const SerwerAddForm = ({addStoreSerwer, setShowSerwerInstruction}) => {
    const[serwerIP, setSerwerIP] = useState('')

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
        <div className={styles.serwerAddFormWrapper}>
            <div className={styles.dataSerwer}>
                <input 
                    className={styles.serwerDataForm}
                    type="text"
                    placeholder="adres IP 31.10.22.94"
                    value={serwerIP}
                    onChange={e => setSerwerIP(e.target.value)}
                    >
                </input>

                <div className={styles.btnAddSerwerWrapper}>
                    <button 
                        className={styles.btnAddSerwer} type="button"
                        onClick={() => {
                        addNewSerwer()
                        if(serwerIP){
                            setShowSerwerInstruction(false)
                        }
                        }}
                    >
                    Doddaj serwer
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SerwerAddForm;