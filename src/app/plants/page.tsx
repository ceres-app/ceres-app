'use client'
import PlantItem from '@/components/plant-item';
import styles from '@/styles/plants.module.css';
import { plantList } from '@/utils/data';
import { SearchInput } from 'evergreen-ui';
import React, { useState } from 'react';


const PlantListPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredItems = plantList.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className={styles.content}>
      <h1>Minhas plantas</h1>
      <SearchInput placeholder="Pesquisar planta" 
          onChange={(e: any) => setSearchTerm(e.target.value)} 
          value={searchTerm}/>
          <div className={styles.list}>
            {filteredItems.map((cardData) => (
            <PlantItem
              key={cardData.id}
              title={cardData.name}
              days={cardData.days}
              associated={cardData.garden.name}
              page={`${cardData.id}`}
            />
            ))}
          </div>
      </div>
    </div>
  );
};

export default PlantListPage;
