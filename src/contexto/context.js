import React from "react";

// contexto que engloba a todo el arbol de renderizacion.
export const MiContexto = React.createContext();

// creo mi componente provider, el que actua como store
class MiProvider extends React.Component {
  // inicializo los states que van a ser usudas por los distintos componentes.
  constructor(props) {
    super(props);
    this.state = { apellido: "grondona", edad: 40 };
  }

  render() {
    return (
      // los componentes hijos consumiran los states contenidos en el provider
      // a traves de el contexto mediante el cual accederan al provider y sus valores.
      <MiContexto.Provider value={this.state}>
        {this.props.children}
      </MiContexto.Provider>
    );
  }
}

export default MiProvider;
