import React from "react";
import styles from '../styles/Button.module.css'

export default function Button (props) {
    return (
        <React.Fragment>
            <button onClick={props.onClick}
            className={styles.button}
            style={{ 
                border: props.border ?? 'solid 5px crimson',
                backgroundColor: props.cor ?? 'red',
                color: props.letra ?? 'black'
                }}>
            {props.texto}
            </button>
        </React.Fragment>
    )
}