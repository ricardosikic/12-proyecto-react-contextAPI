import React from "react";

// como toda mi app esta dentro de un contexto
// importo el contexto tambien para los distintos componentes
// los componentes hijos, consumen del provider a traves del context
import { MiContexto } from "./contexto/context";

// este componente consume data del proveedor a traves del componente consumer

export class Saludo extends React.Component {
  render() {
    return (
      // desde mi contexto -> consume del provider
      // se le pasa un parametro que almacena this.state del provider y accedo al valor de este.
      <MiContexto.Consumer>
        {valorState => (
          <div>
            <h3>Mi apellido es: {valorState.apellido}</h3>
            <h3>Mi edad es: {valorState.edad}</h3>
          </div>
        )}
      </MiContexto.Consumer>
    );
  }
}
