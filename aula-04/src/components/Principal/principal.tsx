import Imagem from "../imagem/imagem";
import Lista from "../Lista/Lista";

export default function Principal(){
    return (
        <main>
            <h1>Principal</h1>
            <div>
                <Imagem/>
            </div>
            <Lista/>
        </main>
    );
}