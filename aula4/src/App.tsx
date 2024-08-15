import Cabecalho from "./components/Cabecalho/cabecalho";
import Principal from "./components/Principal/Principal";
import Rodape from "./components/Rodape/Rodape";


// export default para que um arquivo ou função possa ser importado por outros arquivos
export default function App()
{

  // rfc é um comando para criarmos funções mais rápido no react
  return (
    // Toda tag vazia em react é um fragment
    <>
      <Cabecalho/>
      <Principal/>
      <Rodape/>
    </>

  );
}