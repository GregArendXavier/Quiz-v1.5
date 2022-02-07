import Botao from '../components/Botao'
import Cartao from '../components/Cartao'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Home(props) {
    return (
        <div className={styles.home}>
            <h1>Home</h1>
            <div className={styles.temas}>
                <Cartao border='none'>
                <div className={styles.grupo1}>
                    <Cartao bgcolor='#A58E27'>
                        <Link href="/quiz/matematica" passHref>
                            Matemática
                        </Link>
                    </Cartao>
                    <Cartao bgcolor='#972D07'>
                        <Link href='/quiz/historia' passHref>
                            História
                        </Link>
                    </Cartao>
                </div>
                <div className={styles.grupo2}>
                    <Cartao bgcolor='#136F63'>
                        <Link href='/quiz/diversos' passHref>
                            Diversos
                        </Link>
                    </Cartao>
                    <Cartao bgcolor='#01110A'>
                        <Link href='/quiz/esportes' passHref>
                            Esportes
                        </Link>
                    </Cartao>
                </div>
                <div className={styles.grupo3}>
                    <Cartao bgcolor='#F52F57'>
                        <Link href='/quiz/ciencias' passHref>
                            Ciências
                        </Link>
                    </Cartao>
                    <Cartao bgcolor='#93A3BC'>
                        <Link href='/quiz/geografia' passHref>
                            Geografia
                        </Link>
                    </Cartao>
                </div>
                </Cartao>
            </div>
            {/* <Botao texto="Iniciar Quiz" href={"/quiz/1"}/> */}
        </div>
    )
}