import styles from '../styles/Home.module.css'
import Link from 'next/link'

function MariaPrea() {
  return (
    <div className={styles.container}>
        <title>Página Maria Preá</title>    
        <h1 className ={styles.description}>Página Maria Preá</h1>
        <ul>
            <div>
                <Link href="/">
<button className={styles.card}>Clique para saber o segredo</button>                
                </Link>
                
            </div>
        </ul>
    </div>    
  )
}

export default MariaPrea



