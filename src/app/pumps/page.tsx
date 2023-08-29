'use client'
import GreenButton from "@/components/green-button";
import PumpItem from "@/components/pump-item";
import { Device } from "@/entities/Device";
import DeviceService from "@/services/device.service";
import styles from '@/styles/pumps.module.css';
import { FetchAll } from "@/use_cases/device/FetchAll";
import { SearchInput } from 'evergreen-ui';
import Link from "next/link";
import React, { useEffect, useState } from "react";

let pumpsData: Device[] = [];
const deviceService = new DeviceService();
const fetchUC = new FetchAll(deviceService); 

const Pumps: React.FC = () => { {
  const [searchTerm, setSearchTerm] = useState('');
  const [pumps, setPumps] = useState([{id: '', name: '', isWorking: true, serialID: '', user: ''}]);

  useEffect(() => {
    async function fetch() {

      const allPumps = await fetchUC.execute();
      setPumps(allPumps);
    }

    fetch();
  }, []);

  const filteredItems = pumps.filter(item =>
    item.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
      <div className={styles.container}>
        <SearchInput placeholder="Pesquisar irrigador" 
          onChange={(e: any) => setSearchTerm(e.target.value)} 
          value={searchTerm}/>
        <div className={styles.content}>
          <div className={styles.list}>
            {filteredItems.map((cardData) => (
            <PumpItem
              key={cardData.id}
              name={cardData.name}
              isWorking={cardData.isWorking}
              page={`${cardData.id}`}
            />
            ))}
          </div>
          </div>
          <Link href='/pumps/register' className={styles.bottom}>
          <GreenButton 
          content='Adicionar irrigador'
          />
          </Link>
      </div>
    )
  }
}

export default Pumps;