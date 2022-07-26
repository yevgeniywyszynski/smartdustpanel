import React, { useState } from "react";
import styles from '../WithdrawMoney/WithdrawMoney.module.scss';
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

const WithdrawMoney = ({name, surname, accountBankNumber, balance, typeCurrency, changeBalance, addTransaction}) => {

    const [userName, setUserName] = useState(`${name} ${surname}`);
    const [transferAmount, setTransferAmount] = useState(0)
    
    const setMoneyTransaction = () => {
        let transObj = {}

        if(userName == '' || accountBankNumber.length < 26){
            alert('wpisz prawidlowo dane, sprawdz numer konta')
        } else {
            transObj = {
                id: 1111,
                data: "2020-01-02",
                orderType: "wyplata",
                userName: userName,
                accountBankNumber: accountBankNumber,
                amountPrice: Number(transferAmount),
                typeCurrency: "€"
            }
            addTransaction(transObj)
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

    const checkTransferAmount = (value) => {
        if(value > balance){
            alert('nie masz tyle na koncie')
        } else {
            setTransferAmount(value)
        }
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
                    max={balance}
                    value={transferAmount}
                    onChange={(e) => checkTransferAmount(e.target.value)}
                >
                </input>
                <input
                    className={styles.applicationInput}
                    type="range"
                    min="0"
                    step="1"
                    max={balance}
                    value={transferAmount}
                onChange={(e) => setTransferAmount(e.target.value)} 
            />
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