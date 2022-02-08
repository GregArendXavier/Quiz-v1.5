import Cartao from '../components/Cartao'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Button from '../components/button'
import { useState } from 'react'

export default function Home(props) {

    const [level, setLevel] = useState('easy')

    return (
        <div className={styles.home}>
            <h1>Home</h1>
            <div className={styles.levels}>
                <Button texto='Fácil' border="solid 5px #7EA3CC" cor='#5F8CBF' onClick={() => setLevel('easy')}/>
                <Button texto='Médio' border="solid 5px #FFDE70" cor='#FFD23F' onClick={() => setLevel('medium')}/>
                <Button texto='Dificil' onClick={() => setLevel('hard')} letra='#FFF'/>
            </div>
            <div className={styles.temas}>
                <Cartao border='none'>
                <div className={styles.grupo1}>
                    <Cartao bgcolor='#A58E27'>
                        <Link href={`/quiz/${level}/matematica`} passHref>
                            Matemática
                        </Link>
                    </Cartao>
                    <Cartao bgcolor='#972D07'>
                        <Link href={`/quiz/${level}/historia`}  passHref>
                            História
                        </Link>
                    </Cartao>
                </div>
                <div className={styles.grupo2}>
                    <Cartao bgcolor='#136F63'>
                        <Link href={`/quiz/${level}/diversos`} passHref>
                            Diversos
                        </Link>
                    </Cartao>
                    <Cartao bgcolor='#01110A'>
                        <Link href={`/quiz/${level}/esportes`} passHref>
                            Esportes
                        </Link>
                    </Cartao>
                </div>
                <div className={styles.grupo3}>
                    <Cartao bgcolor='#F52F57'>
                        <Link href={`/quiz/${level}/ciencias`} passHref>
                            Ciências
                        </Link>
                    </Cartao>
                    <Cartao bgcolor='#93A3BC'>
                        <Link href={`/quiz/${level}/geografia`} passHref>
                            Geografia
                        </Link>
                    </Cartao>
                </div>
                </Cartao>
            </div>
        </div>
    )
}