import React, {useState} from 'react';

// Creamos contexto = estado global
const ContextoTema = React.createContext();


const ProovedorTema = ({children}) => {

    const [tema, cambiarTema] = useState({
        alineado: 'left',
        fuente: 20
    });

    return (
        <ContextoTema.Provider value={ {tema} }>
            {children}
        </ContextoTema.Provider>
    );
}
 
export {ContextoTema, ProovedorTema};