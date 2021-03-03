import styles from '../styles/Home.module.css'
import Link from 'next/link'

function TelaInicial() {
  return (
    <div className={styles.container}>
      <title>Minha Primeira Página Next.js</title>
      
      <h1 className={styles.description}>
        Minha primeira página Next.js
      </h1>
      <ul>
        <div>
          <Link href="/maria">
            <button className={styles.card}>Acesso a Maria Preá</button>
          </Link>
        </div>
      </ul>
    </div>
  )
}

export default TelaInicial

