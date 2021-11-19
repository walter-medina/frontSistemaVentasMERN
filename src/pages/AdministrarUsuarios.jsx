import React, {useEffect,useState,useRef} from 'react';

import plus_circle from 'media/plus-circle1.png';

import TablaVendedores from 'components/TablaVendedores'
import TablaUsuarios from 'components/TablaUsuarios'
import AnadirUsuario from 'components/AnadirUsuario';
import 'styles/estiloIndex.css';
import {obtenerUsuarios} from 'utils/api'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

let usuariosBackend = [
    {identificacion:"12123",nombre:"andres",rol:"Venta de calzado"},
    {identificacion:"9999",nombre:"andres",rol:"Venta de calzado"},
    {identificacion:"8888",nombre:"andres",rol:"Venta de calzado"},
    {identificacion:"55555",nombre:"andres",rol:"Venta de calzado"},
    {identificacion:"66666",nombre:"andres",rol:"Venta de calzado"},
]

const AdministrarUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [actualizaUsuario, setActualizaUsuario] = useState(false);
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

    useEffect(() => {
        console.log('consulta', ejecutarConsulta);
        if (ejecutarConsulta) {
            obtenerUsuarios(
            (response)=>{
                setUsuarios(response.data)
                setEjecutarConsulta(false);
            },
            (error)=>{
                console.log("Error",error)
            });
        }
    }, [ejecutarConsulta]);
    
    useEffect(() => {
        //obtener lista de vehículos desde el backend
        if (mostrarTabla) {
          setEjecutarConsulta(true);
        }
    }, [mostrarTabla,actualizaUsuario]);
    
    return(
        <section>
            {mostrarTabla ? (
              <div>
                <div className="contenedorTablaVentas">
                  <TablaUsuarios listaUsuarios={usuarios} actualizaUsuario={actualizaUsuario} setActualizaUsuario={setActualizaUsuario} setUsuarios={setUsuarios} setMostrarTabla={setMostrarTabla} mostrarTabla={mostrarTabla} setEjecutarConsulta={setEjecutarConsulta}/>
                </div>
              </div>
              ) : (
                <AnadirUsuario
                    setMostrarTabla={setMostrarTabla}
                    setEjecutarConsulta={setEjecutarConsulta}
                />
            )}
          <ToastContainer position='bottom-center' autoClose={3000} />

        </section>

    );
}

export default AdministrarUsuarios;
