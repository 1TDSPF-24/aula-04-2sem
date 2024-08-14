import React from 'react'

export default function Lista() {
  
  const usuarios = ["Hugo", "Marcel", "Mohamed"]
  
  return (
     <ul>
        {usuarios.map((usario, i) => (
            <li>usario</li>
        ))};
     </ul>
  );
}
