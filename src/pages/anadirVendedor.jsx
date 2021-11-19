
import React, {useEffect,useState,useParams,useLocation } from 'react';
import "styles/estiloFormularioVenta.css";


const AnadirVendedor =(props)=>{
    console.log("about ",props)
    const [codigo,setCodigo]=useState('');
    {/*useEffect(()=>{
        console.log("este es el codio: ",listVendedores);
    },[listVendedores]);*/}

    const metodo=()=>{
        console.log("este es el codio: ",codigo);
    }
    return ( 
     
              
        <div className="formularioCrearVentas">
        <div className="contenedorTituloRegistroVenta">
        <h1>Crear Vendedor</h1>                    
        </div>
        <form >
                    
        <label className="labelCampos" htmlFor="nombre">
            Nombre
            <input className="camposRegistroVenta" type="text" />
        </label>

        <label className="labelCampos" htmlFor="especialidad">
            especialidad
            <input className="camposRegistroVenta" type="text" />
        </label>

        <label className="labelCampos"  htmlFor="telefono">
            telefono
            <input className="camposRegistroVenta" type="number" />
        </label>

        <label className="labelCampos"  htmlFor="fechaingreso">
            Fecha Ingreso
            <input className="camposRegistroVenta" type="date" />
        </label>

        <div className="contBotonGuardarVenta">
        <input className="botonCancelar" type="submit" value="Cancelar" />
        <input type="button" onClick={metodo} className="botonGuardar"  value="Guardar" />           

        </div>          

    </form>

    </div>
            
    )
  }
  
  export default AnadirVendedor;
  