'use client'
import Card from '@/components/card';
import GreenButton from '@/components/green-button';
import ModalButton from '@/components/modal-button';
import { WeatherCard } from '@/components/weather-card';
import { Garden } from '@/entities/Garden';
import DeviceService from '@/services/device.service';
import styles from '@/styles/home.module.css';
import { SendDeviceRequest } from '@/use_cases/device/SendDeviceRequest';
import { plantList } from '@/utils/data';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { RiAddLine } from 'react-icons/ri';

const deviceService = new DeviceService();
const sendCommand = new SendDeviceRequest(deviceService);

const Home: React.FC = () => {
  const [isOn, setIsOn] = useState(false);
  const router = useRouter();
  const [garden, setGarden] = useState<Garden>();
  const [buttonText, setButtonText] = useState('Iniciar irrigação');
  async function handleIrrigation(){
    if (isOn) {
      setIsOn(false);
      setButtonText('Iniciar irrigação');
      try {
        await fetch('http://localhost:3000/users/64dd3a166566cdf859439c85/devices/64dd3a176566cdf859439c87/on', {
          method: 'PATCH',
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          }
        });
        console.log('Device command executed succefully');
      } catch (error) {
        console.error('Error creating device:', error);
      }
    }
    else {
      setIsOn(true)
      setButtonText('Parar irrigação');
      try {
        await fetch('http://localhost:3000/users/64dd3a166566cdf859439c85/devices/64dd3a176566cdf859439c87/off', {
          method: 'PATCH'
        });
        console.log('Device command executed succefully');
      } catch (error) {
        console.error('Error sending command device:', error);
      }
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
            {plantList.map((cardData) => (
            <Link href={`plants/${cardData.id}`} key={cardData.id} className={styles.listItem}>
            <Card
              title={cardData.name}
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
