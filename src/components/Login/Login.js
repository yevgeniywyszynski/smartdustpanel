import React, { useState } from "react";
import styles from '../Login/Login.module.scss';

const Login = () => {

    const[emailUser, setUserMail] = useState('')
    const[passwordUser, setUserPassword] = useState('')

    const setUser = () => {
        if(emailUser == '' || passwordUser == ''){
            alert('wpisz swoj mail')
        } else {
            
        }
    }

    return(
        <div className={styles.loginsWrapper}>
            <div className={styles.mail}>
                <p className={styles.titleLogin}>Email</p>
                <input className={styles.login}
                onChange={e => setUserMail(e.target.value)}
                type="email"
                placeholder="Your Login"
                >    
                </input>
            </div>

            <div className={styles.mail}>
                <p className={styles.titleLogin}>Password</p>
                <input className={styles.login}
                type="text"
                onChange={e=> setUserPassword(e.target.value)}
                placeholder="password"
                >    
                </input>  
            </div>
            <div className={styles.btnWrapper}>
                <button
                 type="button" 
                 className={styles.btnLog}
                 onClick={setUser}
                 >
                Log in
                </button>
            </div>
        </div>
    )
}

export default Login;