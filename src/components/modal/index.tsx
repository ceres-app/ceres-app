import styles from '@/styles/modal.module.css';
import ReactModal from 'react-modal';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  closeModal: any
}

const jardinsCadastrados = [
  {
    id: 1,
    name: 'Tomate',
  },
  {
    id: 2,
    name: 'Jardim 2',
  }
];

const Modal: React.FC<ModalProps> = ({ isOpen, onRequestClose, closeModal }) => {

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal"
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      ariaHideApp={true}
    >
      <div className={styles.modal}>
        <h1 className={styles.modalTitle}>Jardins cadastrados</h1>
        <div className={styles.listView}>
          {jardinsCadastrados.map((cardData) => (
              <ul key={cardData.id} className={styles.modalList}>
                <li className={styles.listContent}>{cardData.name}</li>
              </ul>
          ))}
        </div>
          <button onClick={closeModal} className={styles.modalButton}>Fechar</button>
      </div>
    </ReactModal>
  );
};

export default Modal;
