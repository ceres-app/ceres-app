'use client'
import editStyles from '@/styles/editForm.module.css';
import styles from '@/styles/plants.module.css';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const gardens = [
    {
        id: 1,
        name: 'Jardim'
    },
    {
        id: 2,
        name: 'Jardim 2',
    }
]

const Register: React.FC = ({}) => {
  const router = useRouter(); 
  const [name, setName] = useState('');
  const [serialID, setSerial] = useState('');

  const handleNameEdit = (
    event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const handleSerialIDEdit = (
    event: React.ChangeEvent<HTMLInputElement>) => {
    setSerial(event.target.value);
  }

  // const handleGardenEdit = (
  //   event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setGarden(event.target.value);
  // }

  const handleForm = (event: React.FormEvent<HTMLFormElement>) =>{
      event.preventDefault();
      console.log(name);
  }
  
  return (
    <div className={styles.container}>
      <h1 className={editStyles.formTitle}>
        Informações do dispositivo
      </h1>
      <div className={editStyles.registerForm}>
        <form 
          className={editStyles.form} 
          onSubmit={(e) => handleForm(e)}
          method='POST'>
          <label htmlFor="Nome do dispositivo">Nome do dispositivo</label>
          <input 
            type="text" 
            placeholder="" 
            className={editStyles.input} 
            onChange={(e) => handleNameEdit(e)}/>
        <label htmlFor='SerialID'>Serial ID do dispositivo</label>
        <input 
            type="text" 
            placeholder="" 
            className={editStyles.input} 
            onChange={(e) => handleSerialIDEdit(e)}/>
         {/* <select className={editStyles.input} onChange={(e) => handleGardenEdit(e)}>
         {gardens.map((garden) => (
            <option 
                key={garden.id} 
                value={`${garden.name}`}>
                {garden.name}
            </option>
         ))}
        </select> */}
          <button 
            className={editStyles.button}
            type='submit'>
              Criar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
