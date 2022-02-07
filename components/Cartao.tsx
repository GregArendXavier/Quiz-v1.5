import styles from "../styles/Cartao.module.css"

interface CartaoProps {
    bgcolor?: string
    children?: any
    border?: string
    next?: () => void
}

export default function Cartao(props: CartaoProps) {
    return (
        <div className={styles.cartao}
            style={{
                backgroundColor: props.bgcolor ?? "#333",
                border: props.border ?? "solid 2px #ccc",
            }}
            onClick={props.next}>
            {props.children}
        </div>
    )
}