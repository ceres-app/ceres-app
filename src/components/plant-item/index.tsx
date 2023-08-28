'use client'
import logo from '@/assets/plant.png';
import styles from '@/styles/plants.module.css';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface PlantItemProps {
  title: string;
  days: number;
  associated: any;
  page: string;
}

const PlantItem: React.FC<PlantItemProps> = ({ title, days, associated, page }) => {
  return (
    <Link className={styles.item} href={`/plants/${page}`}>
        <Image src={logo} alt='icon' width={60} height={60} className={styles.itemImage}/>
        <div className={styles.itemContent}>
        <h3 className={styles.itemTitle}>{title}</h3>
        <p className={styles.itemSubtitle}>Necessita ser irrigado a cada {days} dias</p>
        <div className={styles.associated}>
        Associado a <p className={styles.tag}>{associated.name}</p>
        </div>
      </div>
    </Link>
  );
};

export default PlantItem;
