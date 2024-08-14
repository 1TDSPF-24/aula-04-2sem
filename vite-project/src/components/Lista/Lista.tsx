export default function Lista() {
    
    let usuarios = ['Gui', 'Ian', 'Arthur']
    
    return (
        <ul>
            {usuarios.map((usuario, index) => {
                return <li key={index}>{usuario}</li>
            })}
        </ul>
    )
}