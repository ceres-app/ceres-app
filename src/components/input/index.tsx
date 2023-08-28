import styles from '@/styles/global.module.css';
import { Poppins } from 'next/font/google';
import React from 'react';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '200'
})

interface InputProps {
  onChange: any;
  placeholder: string;
  type: string;
}

const Input: React.FC<InputProps> = ({onChange, placeholder}) => {
  return (
    <input className={styles.input}
    onChange={onChange}
    placeholder={placeholder}
    />
  );
};

export default Input;
