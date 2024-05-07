import { register } from "module";
import styles from "./Register.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const RegisterView = () => {
  const { push } = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('')

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    setIsLoading(true)
    setError('')
    
    const data = {
      fullname: event.target.fullname.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };

    const result = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (result.status === 200) {
      event.target.reset();
      setIsLoading(false)
      push('/auth/login')
    } else {
      setIsLoading(false)
      setError(result.status === 400 ? 'Email already exists' : '')
    }
  };

  return (
    <div className={styles.register}>
      <h1 className={styles.register__title}>Register</h1>
      {error && <p className={styles.register__error}>{error}</p>}
      <form onSubmit={handleSubmit} className={styles.register__form}>
        <div className={styles.register__form__item}>
          <label htmlFor="fullname" className={styles.register__form__item__label}>
            Fullname
          </label>
          <input type="text" id="fullname" placeholder="Fullname" className={styles.register__form__item__input} />
        </div>
        <div className={styles.register__form__item}>
          <label htmlFor="email" className={styles.register__form__item__label}>
            Email
          </label>
          <input type="email" id="email" placeholder="test@example.com" className={styles.register__form__item__input} />
        </div>
        <div className={styles.register__form__item}>
          <label htmlFor="password" className={styles.register__form__item__label}>
            Password
          </label>
          <input type="password" id="password" placeholder="******" className={styles.register__form__item__input} />
        </div>
        <button className={styles.register__form__button} type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Register'}
        </button>
      </form>
      <p className={styles.register__link}>
        Have an account? Sign in <Link href={"/auth/login"}>here</Link>
      </p>
    </div>
  );
};

export default RegisterView;
