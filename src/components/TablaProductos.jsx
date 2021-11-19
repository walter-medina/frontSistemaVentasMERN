import React from 'react'
import plus_circle from 'media/plus-circle1.png';

const TablaProductos = () => {
    return (
        <div>
                <div>
                  <div className="contenedorImagenTitulo">                
                    <div className="iconoVentas">
                      <button>
                          <img src={plus_circle} alt="" /></button>
                    </div>
                  
                    <div className="tituloGestionarVenta">
                      <h1>GESTIONAR PRODUCTO</h1>
                    </div>
                  </div>
                </div>
            <div className='contenedorTablaVentas'>
              <table>
                <thead className="encabezadoTablaVentas">
                  <tr>
                    <th>Identificacion</th>
                    <th>Descripción</th>
                    <th>Valor Unitario</th>
                    <th>Estado</th>                    
                  </tr>
                </thead>
                <tbody>                  
                      
                 
              </tbody>
            </table>
          </div>
        </div>
    )
}



export default TablaProductos;
