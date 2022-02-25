import styles from './styles.module.scss'
import { FaGithub } from "react-icons/fa"
import { FiX } from "react-icons/fi"

function SignInButton() {

  const isUserLoggedIn = false;

  return isUserLoggedIn ? (
    <button
      type='button'
      className={styles.signInButton}>
      <FaGithub color='#eba417' />
      Sign in with Github
    </button>
  ) : (
    <button
      type='button'
      className={styles.signInButton}>
      <FaGithub color='#04d361' />
      Juan-20
      <FiX color='#737380' className={styles.closeIcon} />
    </button>
  )
}

export default SignInButton;
