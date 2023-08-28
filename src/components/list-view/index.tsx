import styles from '@/styles/global.module.css';
import React from 'react';
import { RiAddLine } from 'react-icons/ri';
import Card from '../card';

interface ListViewProps {
    data: any
}

const ListView: React.FC<ListViewProps> = ({data}) => {

  return (
    <div className={styles.listView}>
          <div className={styles.listContent}>
            {data.map((cardData: any, index: string) => (
            <Card
              key={index}
              imageSrc={cardData.imageSrc}
              title={cardData.title}
              subtitle={cardData.subtitle}
            />
            ))}
          </div>
        <button className={styles.addPlant}>
          <RiAddLine size={35}/>
        </button>
        </div> 
  );
};

export default ListView;