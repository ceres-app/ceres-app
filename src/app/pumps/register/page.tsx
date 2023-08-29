'use client'
import DeviceService from '@/services/device.service';
import editStyles from '@/styles/editForm.module.css';
import styles from '@/styles/plants.module.css';
import { Create } from '@/use_cases/device/Create';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const deviceService = new DeviceService();
const createUC = new Create(deviceService);

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

  async function handleForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(name);
    console.log(serialID);
    try {
      await fetch('http://localhost:3000/users/64dd3a166566cdf859439c85/devices', {
        method: 'POST',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          serialID: serialID,
        }),
      });
      console.log('Device created successfully');
    } catch (error) {
      console.error('Error creating device:', error);
    }

    router.prefetch('/pumps');
    router.push('/pumps');
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
