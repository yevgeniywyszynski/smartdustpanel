import React, { useState } from "react";
import styles from '../WithdrawMoney/WithdrawMoney.module.scss';
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

const WithdrawMoney = ({name, surname, accountBankNumber, balance, typeCurrency, changeBalance}) => {

    const [userName, setUserName] = useState(`${name} ${surname}`);
    const [transferAmount, setTransferAmount] = useState('')

    const setMoneyTransaction = () => {
        let transObj = {}

        if(userName == '' || accountBankNumber.length < 26){
            alert('wpisz prawidlowo dane, sprawdz numer konta')
        } else {
            transObj = {
                userName: userName,
                accountBankNumber: accountBankNumber,
                transferAmount: transferAmount
            }
            console.log(transObj)
            alert('twoj wniosek zostal wyslany')
            setUserName('')
            setTransferAmount('')
            afterDraw()
        }
    }

    const afterDraw = () => {
        let drawSum = balance - transferAmount
        changeBalance(drawSum)
    }    

    return(
        <div className={styles.withdrawWrapper}>
            <ReactNotifications />
            <div className={styles.ballanceWrapper}>
                <p className={styles.titleBallance}>Dostępne środki</p>
                <p className={styles.ballanceAvailable}>{balance}{typeCurrency}</p>
            </div>
            <div className={styles.applicationForm}>
                <input className={styles.applicationName}
                    type="text"
                    placeholder="Imię Nazwisko"
                    defaultValue={userName}
                    onChange={(e) => setUserName(e.target.value)}
                >
                </input>
                <input className={styles.applicationInput}
                    placeholder="Numer Konta"
                    type="number"
                    min="0"
                    defaultValue={accountBankNumber}

                >
                </input>
                <input className={styles.applicationInput}
                    placeholder="Wpisz kwotę wypłaty "
                    type="number"
                    min="0" 
                    step="1"
                    max="10000"
                    value={transferAmount}
                    onChange={(e) => setTransferAmount(e.target.value)}
                >
                </input>
            </div>
            <button type="button" 
                className={styles.btnSendForm}
                onClick={() => setMoneyTransaction()}
                >
                Wypłać
            </button>
        </div>
    )
}

export default WithdrawMoney;