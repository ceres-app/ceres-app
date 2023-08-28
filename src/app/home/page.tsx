'use client'
import Card from '@/components/card';
import GreenButton from '@/components/green-button';
import ModalButton from '@/components/modal-button';
import { WeatherCard } from '@/components/weather-card';
import { Garden } from '@/entities/Garden';
import styles from '@/styles/home.module.css';
import Link from 'next/link';
import React, { useState } from 'react';
import { RiAddLine } from 'react-icons/ri';

const cardsData = [
  {
    id: 1,
    title: 'Tomate',
    days: 2,
  },
  {
    id: 2,
    title: 'Tomate',
    days: 7,
  },
  {
    id: 3,
    title: 'Tomate',
    days: 3,
  },
  {
    id: 4,
    title: 'Tomate',
    days: 13,
  },
  {
    id: 5,
    title: 'Tomate',
    days: 6,
  }
];

const Home: React.FC = () => {
  const [isOn, setIsOn] = useState(false);
  const [garden, setGarden] = useState<Garden>();
  const [buttonText, setButtonText] = useState('Iniciar irrigação');
  const handleIrrigation = () =>{
    if (isOn) {
      setIsOn(false);
      setButtonText('Iniciar irrigação');
    }
    else {
      setIsOn(true)
      setButtonText('Parar irrigação');
    };
  }

  return (
    <main className={styles.container}>
      <div className={styles.main}>
        <WeatherCard/>
        <div className={styles.gardenTitle}>
          <div className={styles.gardenName}>
          <ModalButton /> <h2 className={styles.text}>Jardim</h2>
          </div>
          <Link href={'/garden/register'}>
          <GreenButton content='Adicionar jardim'margin='0px 0px 0px 20px'/>
          </Link>
        </div>
        <div className={styles.listView}>
          <div className={styles.listContent}>
            {cardsData.map((cardData) => (
            <Link href={`plants/${cardData.id}`} key={cardData.id} className={styles.listItem}>
            <Card
              title={cardData.title}
              days={cardData.days}
            />
            </Link>
            ))}
          </div>
        <Link href='/plants/register'>
          <button className={styles.addPlant}>
            <RiAddLine size={35}/>
          </button>
        </Link>
        </div>
 
          <p className={styles.connected}>Conectado a</p>
          <GreenButton 
            content={buttonText}
            width='200px' 
            height='50px'
            isOn={isOn}
            onClick={() => handleIrrigation()}/>
      </div>
    </main>
  );
};

export default Home;
