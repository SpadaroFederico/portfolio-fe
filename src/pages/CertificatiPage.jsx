import React from 'react';
import CertificazioniList from '../components/admin/CertificazioniList';
import { DataContext } from '../context/DataContext';
import { useContext, useEffect } from 'react';


export default function CertificazioniPage() {
  return <CertificazioniList isAdmin={false} />;
}

