import React, {useEffect,useState,useRef} from 'react';

import 'styles/estiloIndex.css';
import plus_circle from 'media/plus-circle1.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {crearVendedor} from 'utils/api'
const AnadirVendedor =({setMostrarTabla})=>{
    const form = useRef(null);
    const [codigo,setCodigo]=useState('');
    const submitForm = async (e) => {
      e.preventDefault();
      const fd = new FormData(form.current);
  
      const nuevoVendedor = {};
      fd.forEach((value, key) => {
        nuevoVendedor[key] = value;
      });
      console.log(nuevoVendedor)
      // Spreed operator
      //setVendedores([...listaVendedores,nuevoVendedor])
      await crearVendedor({ 
        identificacion: nuevoVendedor.identificacion, 
        nombre: nuevoVendedor.nombre, 
        especialidad: nuevoVendedor.especialidad , 
        telefono: nuevoVendedor.telefono, 
        fecha_ingreso: nuevoVendedor.fecha_ingreso  },
        (response)=>{
          console.log(response.data);
          toast.success('Vendedor agregado con éxito');
        },
        (error)=>{
          console.error(error);
          toast.error('Error creando un vendedor');
        }
      )
      
      setMostrarTabla(true);

    };
    return ( 
      <div  className="formularioCrearVentas">
        
          <div className="contenedorTituloRegistroVenta">
          <h1>Crear Vendedor</h1>                    
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
  
          <label className="labelCampos" htmlFor="especialidad">
            especialidad
            <input className="camposRegistroVenta" type="text" name='especialidad' />
          </label>
  
          <label className="labelCampos"  htmlFor="telefono">
            telefono
            <input name='telefono' className="camposRegistroVenta" type="number" />
          </label>
  
          <label className="labelCampos"  htmlFor="fecha_ingreso">
            Fecha Ingreso
            <input name='fecha_ingreso' className="camposRegistroVenta" type="date" />
          </label>
  
          <div className="contBotonGuardarVenta">
            <button className="botonCancelar" type="submit" value="Cancelar" onClick={() => setMostrarTabla(true)}>Cancelar</button>
            <button className="botonGuardar" type="submit" value="Guardar">Crear</button>
  
          </div>          
  
      </form>
  
      </div>
        
      )
}

export default AnadirVendedor;
