'use client'
import { Garden } from '@/entities/Garden';
import DeviceService from '@/services/device.service';
import editStyles from '@/styles/editForm.module.css';
import { FindById } from '@/use_cases/device/FindById';
import { Update } from '@/use_cases/device/Update';
import { useState } from 'react';

interface PageProps {
  params: {
    slug: string;
  }
}

const deviceService = new DeviceService();
const updateUC = new Update(deviceService);
const findUC = new FindById(deviceService);

const PlantDetailPage: React.FC<PageProps> = ({params}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [gardens, setGardens] = useState<Garden[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    serialID: '',
    isWorking: false,
    garden: gardens[0].name
  });

  const handleFormEdit = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
    setFormData(
      {...formData,
      [name]: event.target.value}
    )
  }

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

  const handleGardenEdit = (
    event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      garden: event.target.value,
    });
}
const handleForm = (event: React.FormEvent<HTMLFormElement>) =>{
  event.preventDefault();
  console.log(formData.name);
}

  return (
      <div className={editStyles.container}>
        <h1 className={editStyles.formTitle}>
            Informações do dispositivo
        </h1>
        <div className={editStyles.registerForm}>
            <form 
            className={editStyles.form} 
            onSubmit={(e) => handleForm(e)}
            method='POST'>
                <label htmlFor="Nome do dispositivo">Nome do dispositivo</label>
                <input 
                    type="text" 
                    placeholder={`${formData.name}`} 
                    className={editStyles.input} 
                    onChange={(e) => handleFormEdit(e, 'name')}
                    readOnly={!isEditing}
                />
                <label htmlFor='Serial ID'>Serial ID</label>
                <input 
                    type='text'
                    placeholder={`${formData.serialID}`}
                    className={editStyles.input}
                    onChange={(e) => handleFormEdit(e, 'serialID')}
                    readOnly={!isEditing}/>
                <select 
                  className={editStyles.input} 
                  onChange={(e) => handleGardenEdit(e)}
                  disabled={!isEditing}>
                    {gardens.map((garden: any) => (
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
