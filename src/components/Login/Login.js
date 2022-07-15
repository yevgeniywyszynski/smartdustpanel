import React, { useState } from "react";
import styles from '../Login/Login.module.scss';
import Panel from '../Panel/Panel';

const Login = ({changeSubmitted, isSubmitted}) => {

    const database = [
        {
          username: "user1",
          password: "pass1"
        },
        {
          username: "user2",
          password: "pass2"
        },
        {
            username: "ywyszyn",
            password: "dupa"
        }
    ];

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const[errorMessages, setErrorMessages] = useState({})

    const renderErrorMessage = (name) =>
        name === errorMessages.name 
        && 
        (
        <div className={styles.error}>{errorMessages.message}</div>
    );

    const handleSubmit = (event) => {
        event.preventDefault();
        
        let { uname, pass } = document.forms[0];
          
        const userData = database.find((user) => user.username === uname.value);

        if (userData) {
          if (userData.password !== pass.value) {
                setErrorMessages({ name: "pass", message: errors.pass });
          } else {
                changeSubmitted(true);
          }
        } else {
            setErrorMessages({ name: "uname", message: errors.uname });
        }
      };

      const renderForm = (
        <div className={styles.form}>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
              <label>Username </label>
              <input className={styles.inputLog} type="text" name="uname" required />
              {renderErrorMessage("uname")}
            </div>
            <div className={styles.inputContainer}>
              <label>Password </label>
              <input className={styles.inputLog} type="password" name="pass" required />
              {renderErrorMessage("pass")}
            </div>
            <div className={styles.buttonContainer}>
              <input className={styles.submitLog} type="submit" />
            </div>
          </form>
        </div>
      );

    return(
        <div className={styles.app}>
        <div className={styles.loginForm}>
          {isSubmitted ? <Panel />: renderForm}
        </div>
      </div>
    )
}

export default Login;