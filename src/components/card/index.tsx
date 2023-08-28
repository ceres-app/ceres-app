import logo from '@/assets/plant.png';
import styles from '@/styles/card.module.css';
import Image from 'next/image';
import React from 'react';

interface CardProps {
  title: string;
  days: number;
}

const Card: React.FC<CardProps> = ({title, days }) => {

  return (
    <div className={styles.card}>
        <Image src={logo} alt='icon' width={60} height={60}/>
        <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardSubtitle}>Necessita de irrigação a cada {days} dias</p>
      </div>
    </div>
  );
};

export default Card;
