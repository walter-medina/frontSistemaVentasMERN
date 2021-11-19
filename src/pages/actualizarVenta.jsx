import React from 'react'
import { Link } from 'react-router-dom';
import "styles/estiloFormularioVenta.css";

const actualizarVenta = () => {
    return (
        <div className="formularioCrearVentas">
                <div className="contenedorTituloRegistroVenta">
                <h1>Actualizar Venta</h1>                    
                </div>

                <form >
                                
                
                <label className="labelCampos" htmlFor="codigo">
                    Código
                <input className="camposRegistroVenta" type="text" />
                </label>

                <label className="labelCampos" htmlFor="valorVenta">
                    Valor Venta
                <input className="camposRegistroVenta" type="text" />
                </label>

                <label className="labelCampos"  htmlFor="fechaVenta">
                    Fecha Venta
                <input className="camposRegistroVenta" type="date" />
                </label>

                <label className="labelCampos"  htmlFor="fechaVenta">
                    Fecha Pago
                <input className="camposRegistroVenta" type="date" />
                </label>

                <label className="labelCampos"  htmlFor="fechaVenta">
                    Responsable
                <input className="camposRegistroVenta" type="text" />
                </label>

                <label className="labelCampos"  htmlFor="fechaVenta">
                    Descripción
                <input className="camposRegistroVenta" type="text" />
                </label>

                <div className="contBotonGuardarVenta">
                <input className="botonCancelar" type="submit" value="Cancelar" />
                <input type="button" className="botonGuardar"  value="Guardar" />           

                </div>          

            </form>

            </div>
    )
}



export default actualizarVenta
