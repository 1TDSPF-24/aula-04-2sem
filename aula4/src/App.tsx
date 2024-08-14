import Cabecalho from "./components/cabecalho/cabecalho";
import Principal from "./components/principal/principal";
import Rodape from "./components/rodape/rodape";

export default
  function app() {
  return (
    <>
      <Cabecalho />
      <Principal />
      <Rodape />
    </>
  )
}