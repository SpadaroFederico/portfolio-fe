import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';


function Login(){

    const navigate = useNavigate();
    
const [form, setForm] = useState({
    email: '',
    password: ''
});

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        const data = await res.json();
        if(res.ok){
            console.log('Login riuscito, token:', data.token);
            alert('Login riuscito, token: ' + data.token);
            localStorage.setItem('token', data.token);
            navigate('/admin')
        }else{
            console.error('Errore durante il login:', data.message);
            alert('Login fallito: ' + data.message);
        }

        } catch (error) {
        console.error('Errore di rete:', error);
    }
}

    return (
        <div className='login-container'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder={'Inserisci la mail'} value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} />
                <input type="text" placeholder={'Inserisci la password'}  value={form.password} onChange={(e) => setForm({...form, password: e.target.value})} />
                <button type="submit">Accedi</button>
            </form>
        </div>
        
    )
}

export default Login;