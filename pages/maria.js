import styles from '../styles/Home.module.css'
import Link from 'next/link'
import MariaPrea from '../components/MariaPrea'
const Maria = () => (
 
    <div className={styles.container}>
        
        <title>Página Maria Preá</title>    
        <h1 className ={styles.description}>Página Maria Preá</h1>
        <ul>
            <div>
                <MariaPrea palavra = {"Velha"}></MariaPrea>
                <Link href="/">
                <button className={styles.card}>Voltar</button>
                </Link>
            </div>
        </ul>
    </div>    
  
)

export default Maria




