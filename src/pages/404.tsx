import styles from '@/styles/404.module.scss'

const Custom404 = () => {
  return (
    <div className={styles.error}>
      <img className={styles.error__image} src="/not_found.png" alt="not found" />
      <h1>Halaman tidak ditemukan</h1>
    </div>
  )
}

export default Custom404