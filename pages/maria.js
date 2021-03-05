import styles from '../styles/Home.module.css'
import Link from 'next/link'
import MariaPrea from '../components/MariaPrea'
function Maria() {
    return (
        <div className={styles.container}>

            <title>Página Maria Preá</title>
            <h1 className={styles.description}>Página Maria Preá</h1>
            <ul>
            <MariaPrea  palavra={"estressada"}></MariaPrea>
                <div className={styles.footer}>
                    <Link href="/">
                        <button className={styles.card}>Voltar</button>
                    </Link>
                </div>
            </ul>
        </div>
    )
    

}
export default Maria




