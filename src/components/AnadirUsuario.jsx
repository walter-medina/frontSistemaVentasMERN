import React, {useEffect,useState,useRef} from 'react';

import 'styles/estiloIndex.css';
import plus_circle from 'media/plus-circle1.png';
import {crearUsuario} from 'utils/api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AnadirUsuario = ({setMostrarTabla,setEjecutarConsulta}) => {
    const form = useRef(null);
    const [codigo,setCodigo]=useState('');
    const submitForm = async (e) => {
      e.preventDefault();
      const fd = new FormData(form.current);
  
      const nuevoUsuario = {};
      fd.forEach((value, key) => {
        nuevoUsuario[key] = value;
      });
      console.log(nuevoUsuario)
      // Spreed operator
      await crearUsuario(nuevoUsuario,
      (response)=>{
        console.log(response.data);
        toast.success('Usuario agregado con éxito');
        setEjecutarConsulta(true);
      },(error)=>{
        console.error(error);
        toast.error('Error creando un usuario');
      })
      setMostrarTabla(true);

    };
    return ( 
      <div  className="formularioCrearVentas">
        
          <div className="contenedorTituloRegistroVenta">
          <h1>Crear Usuario</h1>                    
          </div>
        <form ref={form} onSubmit={submitForm}>
          <label className="labelCampos" htmlFor="identificacion">
            Identificacion
            <input name='identificacion' className="camposRegistroVenta" type="text" />
          </label>      
          <label className="labelCampos" htmlFor="nombre">
              Nombre
            <input name='nombre' className="camposRegistroVenta" type="text" />
          </label>
  
          <label className="labelCampos" htmlFor="rol">
            Rol
            <input className="camposRegistroVenta" type="text" name='rol' />
          </label>
  
          <div className="contBotonGuardarVenta">
            <button className="botonCancelar" type="submit" value="Cancelar" onClick={() => setMostrarTabla(true)}>Cancelar</button>
            <button className="botonGuardar" type="submit" value="Guardar">Crear</button>
  
          </div>          
  
      </form>
  
      </div>
    )
}

export default AnadirUsuario
