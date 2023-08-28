import styles from '@/styles/modal.module.css';
import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import Modal from '../modal/index';

const ModalButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={openModal} className={styles.button}>
        <IoIosArrowDown size={24}/>
      </button>
      <Modal isOpen={isModalOpen} onRequestClose={closeModal} closeModal={closeModal}/>
    </>
  );
};

export default ModalButton;
