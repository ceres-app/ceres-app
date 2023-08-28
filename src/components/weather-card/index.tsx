import styles from '@/styles/weather-card.module.css';
import React from 'react';
import { IoWaterOutline } from 'react-icons/io5';
import { TiWeatherPartlySunny } from 'react-icons/ti';

interface WeatherData {
  temperature: number;
  humidity: number;
  wind: number;
  rainChance: number;
}

const fakeWeatherData = {
  temperature: 25,
  humidity: 70,
  wind: 10,
  rainChance: 30,
};
export const WeatherCard: React.FC = () => {
  return (
    <div className={styles.weatherCard}>
      <div className={styles.cardTitle}>
        <h1>Jardim de Casa</h1>
        <div className={styles.icon}>
          <TiWeatherPartlySunny/>
        </div>
      </div>
      <div className={styles.description}>
      <h3>Chances de chuva {fakeWeatherData.rainChance}%</h3>
      <div className={styles.bottomCard}>
        <p style={{fontWeight: 'bold'}}>{fakeWeatherData.temperature}°C</p>
        <p><IoWaterOutline/> {fakeWeatherData.humidity}%</p>
        <p>{fakeWeatherData.wind} km/h</p>
      </div>
      </div>
    </div>
  );
};

