import React, { useEffect, useState } from 'react';
import ProgettiList from '../components/admin/ProgettiList';

export default function ProgettiPage() {
  const [progetti, setProgetti] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/progetti') // URL del tuo backend
      .then(res => res.json())
      .then(data => setProgetti(data))
      .catch(err => console.error(err));
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
