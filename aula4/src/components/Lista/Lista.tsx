export default function Lista() {

    const usuarios = ["Huguinho","Zezinho","Luizinho", "Nathan"];

  return (
        <ul>
            {usuarios.map((usuario)=>(
                <li>{usuario}</li>
            ))}
        </ul>
  );
}