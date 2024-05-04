import { register } from 'module'
import styles from './Register.module.scss'
import Link from 'next/link'

const RegisterView = () => {
  return (
    <div className={styles.register}>
      <h1 className={styles.register__title}>Register</h1>
      <form action="" className={styles.register__form}>
        <div className={styles.register__form__item}>
          <label htmlFor="fullname" className={styles.register__form__item__label}>Fullname</label>
          <input type="text" id='fullname' placeholder='Fullname' className={styles.register__form__item__input}/>
        </div>
        <div className={styles.register__form__item}>
          <label htmlFor="email" className={styles.register__form__item__label}>Email</label>
          <input type="email" id='email' placeholder='test@example.com' className={styles.register__form__item__input}/>
        </div>
        <div className={styles.register__form__item}>
          <label htmlFor="password" className={styles.register__form__item__label}>Password</label>
          <input type="password" id='password' placeholder='******' className={styles.register__form__item__input}/>
        </div>
        <button  className={styles.register__form__button} type='submit'>Submit</button>
      </form>
      <p className={styles.register__link}>Have an account? Sign in <Link href={'/auth/login'}>here</Link></p>
    </div>
  )
}

export default RegisterView