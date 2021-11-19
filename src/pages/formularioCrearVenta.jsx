import React, {useEffect,useState} from 'react';
import "styles/estiloFormularioVenta.css";
import { Link } from 'react-router-dom';
import Index from 'pages/index';




const FormularioCrearVenta = () => {
    const [codigo,setCodigo]=useState('');
    const [valorVenta,setValorVenta]=useState('');
    const [fechaVenta,setFechaVenta]=useState('');
    const [fechaPago,setFechaPago]=useState('');
    const [responsable,setResponsable]=useState('');
    const [descripcion,setDescripcion]=useState('');


    const guardarVentas=()=>{
       
       console.log(codigo,valorVenta,fechaVenta,fechaPago,responsable,descripcion);
       //funcionMostrarTabla([...listaVenta,{codigo:codigo,valorVenta:valorVenta,fechaVenta:fechaVenta,fechaPago:fechaPago,responsable:responsable,descripcion:descripcion},]);
      
       }

    
    return (      
              
            <div className="formularioCrearVentas">
                <div className="contenedorTituloRegistroVenta">
                <h1>Registrar Venta</h1>                    
                </div>

                <form >
                                
                
                <label className="labelCampos" htmlFor="codigo">
                    Código
                <input
                value={codigo}                
                onChange={(e)=>{
                    setCodigo(e.target.value);

                }} 
                className="camposRegistroVenta" type="text" />
                </label>

                <label className="labelCampos" htmlFor="valorVenta">
                    Valor Venta
                <input 
                 value={valorVenta}                
                 onChange={(e)=>{
                     setValorVenta(e.target.value);
 
                 }} 
                
                className="camposRegistroVenta" type="text" />
                </label>

                <label className="labelCampos"  htmlFor="fechaVenta">
                    Fecha Venta
                <input
                value={fechaVenta}                
                onChange={(e)=>{
                    setFechaVenta(e.target.value);

                }} 
                
                className="camposRegistroVenta" type="date" />
                </label>

                <label className="labelCampos"  htmlFor="fechaVenta">
                    Fecha Pago
                <input 
                value={fechaPago}                
                onChange={(e)=>{
                    setFechaPago(e.target.value);

                }} 
                
                
                className="camposRegistroVenta" type="date" />
                </label>

                <label className="labelCampos"  htmlFor="fechaVenta">
                    Responsable
                <input 
                  value={responsable}                
                  onChange={(e)=>{
                      setResponsable(e.target.value);
  
                  }} 
                
                className="camposRegistroVenta" type="text" />
                </label>

                <label className="labelCampos"  htmlFor="fechaVenta">
                    Descripción
                <input
                value={descripcion}                
                onChange={(e)=>{
                    setDescripcion(e.target.value);

                }} 
                
                className="camposRegistroVenta" type="text" />
                </label>

                <div className="contBotonGuardarVenta">
                <input className="botonCancelar" type="submit" value="Cancelar" />
               
                <input type="button" onClick={()=>{guardarVentas()}} className="botonGuardar"  value="Guardar" /> 
                        

                </div>          

            </form>

            </div>
            
      
    )
}






export default FormularioCrearVenta;
