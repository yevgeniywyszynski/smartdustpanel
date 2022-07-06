import React from "react";
import styles from '../Contracts/Contracts.module.scss';
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";

const Contracts = ({allContracts}) => {
    return(
        <div className={styles.contarctPage}>
            {allContracts.map(contract => (
                <div className={styles.contractWrapper} key={contract.id}>
                    {contract.status !== "signed" ? <FaRegCircle className={styles.noSigned}/> : <FaCheckCircle className={styles.signed}/>}
                    <p className={styles.title}>{contract.title}</p>
                    <p className={styles.dataSigned}> data podpisanaia: {contract.dataSigned}</p>
                    <p className={styles.dateAdd}> aktualizacja: {contract.lastActualisation}</p>
                </div>
            ))}
        </div>
    )
}

export default Contracts;