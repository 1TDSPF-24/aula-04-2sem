import React from 'react';

export default function Lista(){

    const usuarios = ["Hugo", "Ze", "Luiz"]

    return(
        <ul>
            {usuarios.map((usuario,i)=>(
                <li key={i}>{usuario}</li>
            ))}
        </ul>
    );
}