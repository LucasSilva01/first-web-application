import styles from '../styles/Home.module.css'
import Link from 'next/link'

function Home() {
  return (
    <div className={styles.container}>
      <title>Minha Primeira Página Next.js</title>
      <h1 className={styles.title}>
        Minha primeira página Next
      </h1>
      <ul>
        <li>
          <Link href="/maria">
            <button className={styles.description}>Link para Maria</button>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
