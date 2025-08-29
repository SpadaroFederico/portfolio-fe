import React, { useEffect, useState } from 'react';
import ProgettiList from '../components/admin/ProgettiList';
import { apiFetch } from '../utils/apiFetch';

export default function ProgettiPage() {
  const [progetti, setProgetti] = useState([]);

  useEffect(() => {
    const fetchProgetti = async () => {
      const res = await apiFetch('/api/progetti');
      if (res.ok) {
        setProgetti(res.data);
      } else {
        console.error('Errore nel fetch dei progetti:', res.data?.msg || res.data?.message);
      }
    };

    fetchProgetti();
  }, []);

  const handleEdit = (p) => {
    console.log('Edit', p);
  };

  const handleDelete = (p) => {
    console.log('Delete', p);
  };

  // Chiavi normalizzate (tutte minuscole, senza spazi strani)
  const immaginiProgetti = {
    "spotify interface": '/absolutepng/pikachuheadphones.png',
    "discord interface": '/absolutepng/animediscord.png',
    "dc comics react": '/absolutepng/robinandgengar.png',
    "hygge": '/absolutepng/espeonmeasures.png',
    "lasbustiamoo?": '/absolutepng/animecardchar.png'
  };

  return (
    <div>
      <ProgettiList
        progetti={progetti}
        immaginiProgetti={immaginiProgetti}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
