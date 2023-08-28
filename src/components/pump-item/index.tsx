'use client'
import logo from '@/assets/pump-icon-activated.svg';
import styles from '@/styles/pumps.module.css';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface PumpItemProps {
  page: string;
  name: string;
  isWorking: boolean;
}

const PumpItem: React.FC<PumpItemProps> = ({ name, isWorking, page }) => {
  return (
    <Link className={styles.item} href={`/pumps/${page}`}>
        <Image src={logo} alt='icon' width={60} height={60} className={styles.itemImage}/>
        <div className={styles.itemContent}>
        <h3 className={styles.itemTitle}>{name}</h3>
        <h2 className={styles.itemSubtitle}>{isWorking ? 'Ativa': 'Desativada'}</h2>
      </div>
    </Link>
  );
};

export default PumpItem;
