import React, { useState } from "react";
import styles from '../Login/Login.module.scss';
import {Link} from 'react-router-dom';

const Login = () => {

    const[emailUser, setUserMail] = useState('')
    const[passwordUser, setUserPassword] = useState('')

    // const setUser = () => {
    //     if(emailUser == '' || passwordUser == ''){
    //         alert('wpisz swoj mail')
    //     } else {
            
    //     }
    // }

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
                type="password"
                onChange={e=> setUserPassword(e.target.value)}
                placeholder="password"
                >    
                </input>  
            </div>
            <div className={styles.btnWrapper}>
                <Link className={styles.btnLog} to="panel">Log in</Link>
            </div>
        </div>
    )
}

export default Login;