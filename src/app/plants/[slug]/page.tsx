'use client'
import { Garden } from '@/entities/Garden';
import { Plant } from '@/entities/Plant';
import GardenService from '@/services/garden.service';
import PlantService from '@/services/plant.service';
import editStyles from '@/styles/editForm.module.css';
import { FetchAll } from '@/use_cases/garden/FetchAll';
import { FindById } from '@/use_cases/plant/FindById';
import { FindGardensById } from '@/use_cases/plant/FindGardensById';
import { Update } from '@/use_cases/plant/Update';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface PageProps {
  params: {
    slug: string;
  }
}

const plantService = new PlantService();
const gardenService = new GardenService();
const updateUC = new Update(plantService);
const findUC = new FindById(plantService)
const fetchAssociatedGardens = new FindGardensById(plantService);
const fetchGardens = new FetchAll(gardenService);

const PlantDetailPage: React.FC<PageProps> = ({params}) => {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [plant, setPlant] = useState<Plant>();
  const [gardens, setGardens] = useState<Garden[]>([]);
  const [associatedGardens, setAssociatedGardens] = useState<Garden[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    days: 0,
    waterPerSecond: 0,
    gardenAssociated: '',
  });

  // useEffect(() => {
  //   async function fetch() {
  //      const allGardensAssociated = await fetchAssociatedGardens.execute(params.slug.toString());
  //      const allGardens = await fetchGardens.execute();
  //      setGardens(allGardens);
  //      const plant = await findUC.execute(params.slug.toString());
  //      setGardens(allGardensAssociated);
  //      setPlant(plant);
        //  setFormData({
        //   ...formData,
        //   name: plant?.name || '',
        //   days: plant?.days || 0,
        //   waterPerSecond: plant?.waterPerSecond || 0,
        //   gardenAssociated: associatedGardens[0].name || ''
        //  });
  //   }

  //   fetch();
  // }, [params.slug]);

  const handleFormEdit = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
    setFormData(
      {...formData,
      [name]: event.target.value}
    )
  }

  const handleGardenEdit = (
    event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      gardenAssociated: event.target.value,
    });
  }
  const handleForm = (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    console.log(formData.gardenAssociated);
  }

  return (
      <div className={editStyles.container}>
        <h1 className={editStyles.formTitle}>
            Informações da planta
        </h1>
        <div className={editStyles.registerForm}>
            <form 
            className={editStyles.form} 
            onSubmit={(e) => handleForm(e)}
            method='POST'>
                <label htmlFor="Nome da planta">Nome da planta</label>
                <input 
                    type="text" 
                    placeholder={`${formData.name}`} 
                    className={editStyles.input} 
                    onChange={(e) => handleFormEdit(e, 'name')}
                    readOnly={!isEditing}
                />
                <label htmlFor='Intervalo'>Intervalo de dias</label>
                <input 
                    type='number'
                    placeholder={`${formData.days}`}
                    className={editStyles.input}
                    onChange={(e) => handleFormEdit(e, 'days')}
                    readOnly={!isEditing}/>
                <label htmlFor='Água por segundo'>Água por segundo</label>
                <input 
                    type='number'
                    placeholder={`${formData.waterPerSecond}`}
                    className={editStyles.input}
                    onChange={(e) => handleFormEdit(e, 'waterPerSecond')}
                    readOnly={!isEditing}/>
                <select 
                  className={editStyles.input} 
                  onChange={(e) => handleGardenEdit(e)}
                  disabled={!isEditing}>
                    {gardens.map((garden) => (
                    <option 
                        key={garden.id} 
                        value={`${garden.name}`}>
                        {garden.name}
                    </option>
                    ))}
                </select>
                {isEditing ? (
                    <div className={editStyles.bottomButtons}>
                      <button 
                        onClick={() => setIsEditing(false)}
                        className={editStyles.cancelButton}>Cancelar</button>
                      <button type='submit' className={editStyles.saveButton}>Salvar</button>
                    </div>
                  ) : (
                    <button onClick={() => setIsEditing(true)} className={editStyles.button}>Editar</button>
                )}
            </form>
        </div>
      </div>
  );
};

export default PlantDetailPage;
