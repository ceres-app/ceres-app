import styles from '@/styles/global.module.css';
import { Poppins } from 'next/font/google';
import React from 'react';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '200'
})

interface ButtonProps {
  content: any;
  width?: string;
  height?: string;
  margin?: string;
  isOn?: boolean;
  onClick?: any;
}

const GreenButton: React.FC<ButtonProps> = ({content, width, height, margin, onClick, isOn = false}) => {
  const buttonStyle = {
    width: width,
    margin: margin,
    height: height,
  };
  const buttonClassName = isOn ? `${styles.greenButton} ${styles.greenButtonOn}` : styles.greenButton;
  return (
    <button 
      className={buttonClassName} 
      style={buttonStyle} 
      onClick={onClick}>
      {content}
    </button>
  );
};

export default GreenButton;
