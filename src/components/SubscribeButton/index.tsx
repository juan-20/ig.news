import React from 'react';
import styles from './styles.module.scss'

function SubscribeButton() {
  return (
    <button
      type='button'
      className={styles.subscribeButton}>
      Subscribe now
    </button>
  );
}

export default SubscribeButton;