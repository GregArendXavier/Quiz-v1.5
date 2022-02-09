import Cartao from '../components/Cartao'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Button from '../components/button'
import { useState } from 'react'

export default function Home(props) {

    const [level, setLevel] = useState('easy')
    const [easy, setEasy] = useState('none')
    const [medium, setMedium] = useState('none')
    const [hard, setHard] = useState('none')

    function changeLevel (param) {
        setLevel(param)
        switch (param) {
            case 'easy': {
                setEasy('10px 5px 5px #7EA3CC')
                setMedium('none')
                setHard('none')
            };
            break;
            case 'medium': {
                setMedium('10px 5px 5px #FFDE70')
                setEasy('none')
                setHard('none')
            };
            break;
            case 'hard': {
                setHard('10px 5px 5px crimson')
                setEasy('none')
                setMedium('none')
            };
            break;
        }
    }

    return (
        <div className={styles.home}>
            <h1>Home</h1>
            <div className={styles.levels}>
                <Button texto='Fácil' border="solid 5px #7EA3CC" cor='#5F8CBF' onClick={() => changeLevel('easy')}  ativo={easy}/>
                <Button texto='Médio' border="solid 5px #FFDE70" cor='#FFD23F' onClick={() => changeLevel('medium')} ativo={medium}/>
                <Button texto='Dificil' onClick={() => changeLevel('hard')} letra='#FFF' ativo={hard}/>
            </div>
            <div className={styles.temas}>
                <Cartao border='none'>
                <div className={styles.grupo1}>
                    <Cartao bgcolor='#A58E27'>
                        <Link href={`/${level}/matematica`} passHref>
                            Matemática
                        </Link>
                    </Cartao>
                    <Cartao bgcolor='#972D07'>
                        <Link href={`/${level}/historia`}  passHref>
                            História
                        </Link>
                    </Cartao>
                </div>
                <div className={styles.grupo2}>
                    <Cartao bgcolor='#136F63'>
                        <Link href={`/${level}/diversos`} passHref>
                            Diversos
                        </Link>
                    </Cartao>
                    <Cartao bgcolor='#01110A'>
                        <Link href={`/${level}/esportes`} passHref>
                            Esportes
                        </Link>
                    </Cartao>
                </div>
                <div className={styles.grupo3}>
                    <Cartao bgcolor='#F52F57'>
                        <Link href={`/${level}/ciencias`} passHref>
                            Ciências
                        </Link>
                    </Cartao>
                    <Cartao bgcolor='#93A3BC'>
                        <Link href={`/${level}/geografia`} passHref>
                            Geografia
                        </Link>
                    </Cartao>
                </div>
                </Cartao>
            </div>
        </div>
    )
}