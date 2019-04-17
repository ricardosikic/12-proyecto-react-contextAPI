import React from "react";
import ReactDOM from "react-dom";

// importo solo el componente saludo y provider
import { Saludo } from "./saludo";
import MiProvider from "./contexto/context";

class App extends React.Component {
  render() {
    return (
      // provider envuelve a los elementos que consumiran de sus datos
      <MiProvider>
        <Saludo />
      </MiProvider>
    );
  }
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
