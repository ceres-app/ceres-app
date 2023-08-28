import styles from '@/styles/global.module.css';
import { Poppins } from 'next/font/google';
import router from 'next/router';
import React from 'react';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '200'
})

const BackButton: React.FC = () => {
    const goBack = () => {
        router.back();
      }
    return (
        <button onClick={()=> goBack()} className={styles.goBackButton}>Voltar</button>
);
};

export default BackButton;
