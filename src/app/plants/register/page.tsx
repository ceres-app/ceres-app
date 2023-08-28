'use client'
import editStyles from '@/styles/editForm.module.css';
import styles from '@/styles/plants.module.css';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export const gardens = [
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
    const [garden, setGarden] = useState('');
    const [days, setDays] = useState();


    const handleNameEdit = (
        event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const handleDaysEdit = (
        event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const handleGardenEdit = (
        event: React.ChangeEvent<HTMLSelectElement>) => {
        setGarden(event.target.value);
    }

    const handleForm = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        console.log(garden);
    }

    return (
        <div className={styles.container}>
        <div className={editStyles.formTitle}>
            Informações da planta
        </div>
        <div className={editStyles.registerForm}>
            <form 
            className={editStyles.form} 
            onSubmit={(e) => handleForm(e)}
            method='POST'>
                <label htmlFor="Nome da planta">Nome da planta</label>
                <input 
                    type="text" 
                    placeholder="Ex: Abacate" 
                    className={editStyles.input} 
                    onChange={(e) => handleNameEdit(e)}
                />
                <label htmlFor='Intervalo'>Intervalo de dias</label>
                <input 
                    type='number'
                    placeholder='Dias'
                    className={editStyles.input}
                    onChange={(e) => handleDaysEdit(e)}/>
                <select className={editStyles.input} onChange={(e) => handleGardenEdit(e)}>
                    {gardens.map((garden) => (
                    <option 
                        key={garden.id} 
                        value={`${garden.name}`}>
                        {garden.name}
                    </option>
                    ))}
                </select>
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
