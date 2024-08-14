export default function Lista() {
    const usuarios = ["Huguinho","Zezinho","Luizinho"];

    return (
        <ul>
            {usuarios.map((usuario,i)=>(
            <li key={i}>{usuario}</li>
            ))}
        </ul>
       
    );
}