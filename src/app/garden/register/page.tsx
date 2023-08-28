'use client'
import { Garden } from '@/entities/Garden';
import { Plant } from '@/entities/Plant';
import editStyles from '@/styles/editForm.module.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface PageProps {
  params: {
    slug: string;
  }
}


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
            Informações do Jardim
        </h1>
        <div className={editStyles.registerForm}>
            <form 
            className={editStyles.form} 
            onSubmit={(e) => handleForm(e)}
            method='POST'>
                <label htmlFor="Nome da planta">Nome do jardim</label>
                <input 
                    type="text" 
                    placeholder={`${formData.name}`} 
                    className={editStyles.input} 
                    onChange={(e) => handleFormEdit(e, 'name')}
                    readOnly={!isEditing}
                />
                <label htmlFor='Bombas'>Bombas</label>
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
