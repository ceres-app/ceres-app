'use client'
import styles from '@/styles/menu.module.css';
import { logout } from '@/utils/auth';
import { useRouter } from 'next/navigation';
import React, { useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';
import { NavigateButton } from '../navigate-button';

interface MenuProps {
    isMenuOpen: boolean;
    toggleMenu: () => void;
  }

export const Menu: React.FC = () => { {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  const handleLogout = () => {
      logout();
      router.push('/login');
    };
    
  
  return (
      <>
        <button className={styles.menuButton} onClick={toggleMenu}>
        <RxHamburgerMenu size={24}/>
      </button>
      <div className={`${styles.menu} ${isMenuOpen ? styles.open : styles.close}`}>
            <button onClick={toggleMenu} className={styles.menuCloseButton}>
              <AiOutlineClose size={24}/>
            </button>
        <div className={styles.menuList}>
        <NavigateButton text='Página inicial' page='/'/>
        <NavigateButton text='Plantas' page='/plants'/>
        <NavigateButton text="Irrigadores" page='/pumps'/>
        <NavigateButton text='Sair' page='/login' onClick={handleLogout}/>
        </div>
      </div>
      </>
    )
  }
}