export default function Lista() {
  
    const usuarios = ["Huguinho" , "Zezinho" , "Luizinho"]
  
    return (
    <ul>
        {usuarios.map((usuario,i) => {
            return <li key={i}>{usuario}</li>
        })}
    </ul>
  );
};
