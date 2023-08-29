'use client'
import editStyles from '@/styles/editForm.module.css';
import { plantList } from '@/utils/data';
import { useRouter } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

interface PageProps {
  params: {
    slug: string;
  }
}

function findPlant(id: string) {
  return plantList.find(objeto => objeto.id === id);
}

const PlantDetailPage: React.FC<PageProps> = ({params}) => {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [gardens, setGardens] = useState([{name: '', id: ''}]);
  const [formData, setFormData] = useState<any>({
    name: '',
    days: 0,
    waterPerSecond: 0,
    gardenAssociated: '',
    garden: {id: '', name: ''},
  });

  useEffect(() => {
    const plant = findPlant(params.slug);
    setFormData(plant)

  }, [params.slug]);

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
        <Suspense fallback={<p>Carregando informações...</p>}/>
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
                  disabled={!isEditing}
                  >
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
