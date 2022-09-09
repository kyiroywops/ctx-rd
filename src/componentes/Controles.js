import React, {useContext} from 'react';
import styled from 'styled-components';
import { ContextoTema } from '../contextos/contextoTema';

const Controles = () => {
    const {aumentarFuente, disminiuirFuente, alinearIzquierda, alinearDerecha, alinearCentro } = useContext(ContextoTema);

    return ( 
        <ContenedorControles>
            <div>
                <Boton onClick={aumentarFuente}>Aumentar fuente</Boton>
                <Boton onClick={disminiuirFuente}>Disminuir fuente</Boton>
            </div>
            <div>
                <Boton onClick={alinearIzquierda}>Alinear a la izquierda</Boton>
                <Boton onClick={alinearCentro}>Alinear al centro</Boton>
                <Boton onClick={alinearDerecha}>Alinear a la derecha</Boton>
            </div>
        </ContenedorControles>
     );
}
 
const ContenedorControles = styled.div`
    margin-top: 20px;
`;
 
const Boton = styled.button`
    background: #165168;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 12px;
    padding: 7px;
    margin-right: 10px;
    margin-bottom: 10px;
    border-radius: 3px;
 
    &:hover {
        background: #191668;
    }
`;
 

export default Controles;