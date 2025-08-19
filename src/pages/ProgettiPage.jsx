import React, { useEffect, useState } from 'react';
import ProgettiList from '../components/admin/ProgettiList';

export default function ProgettiPage() {
  const [progetti, setProgetti] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/progetti')  // URL del tuo backend
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

  return (
    <div>
      <ProgettiList 
        progetti={progetti} 
      />
    </div>
  );
}
