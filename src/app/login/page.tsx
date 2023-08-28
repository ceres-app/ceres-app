'use client'
import styles from '@/styles/login.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Login: React.FC = () => {
  const router = useRouter(); 
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const handleFormEdit = (
    event: React.ChangeEvent<HTMLInputElement>, 
    name: string) => {
    setFormData({
      ...formData,
      [name]: event.target.value
    })
  }

  const handleForm = (event: React.FormEvent<HTMLFormElement>) =>{
      event.preventDefault();
      console.log(formData);
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src='/logo.png' alt='Logo' width={200} height={200}/>
        <h1>Ceres</h1>
      </div>
      <div className={styles.loginForm}>
        <form 
          className={styles.form} 
          onSubmit={(e) => handleForm(e)}>
          <input 
            type="text" 
            placeholder="Usuário" 
            className={styles.input} 
            onChange={(e) => handleFormEdit(e, 'username')}/>
          <input 
            type="password" 
            placeholder="Senha" 
            className={styles.input}
            onChange={(e) => handleFormEdit(e, 'password')} />
          <button 
            className={styles.button}>
              Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
