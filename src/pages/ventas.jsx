import React, {useEffect,useState,useRef} from 'react';
import 'styles/estiloIndex.css';
import plus_circle from 'media/plus-circle1.png';
import penciles from 'media/pencil1.png';
import iconoDelete from 'media/delete.png';
import {Dialog} from '@material-ui/core';
import swal from 'sweetalert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';
import PrivateComponent from 'components/PrivateComponent';

import { obtenerVentas,eliminarLaVenta,crearLaVenta,actualizarLaVenta} from 'utils/api';

const FormularioCrearVenta=({setMostrarTabla,mostrarTabla})=>{
  const form=useRef(null)//es como tener todo el html del formulario en una variable y de esta manera accedo a todo lo que tenga el form
  

  /*METODO PARA GUARDAR UNA VENTA EN BD*/
  const guardarVenta= async(e)=>{  
      e.preventDefault()
      const infoFormulario=new FormData(form.current);//me traigo todos los campos del formulario y los tengo en una variable
      const nuevoProducto={};

      infoFormulario.forEach((value,key)=>{//recorro todos los campos del formulario y los almaceno en un objeto nuevoProducto
          nuevoProducto[key]=value;

      });      
      
      //setProducto([...listaProducto,nuevoProducto])  esto se usaba cuando la bd estaba en el mismo venta

     /*********ME PERMITE ENVIAR INFORMACION A LA BD */
     crearLaVenta(nuevoProducto,
      (response)=>{
        console.log(response.data);
        toast.success("Venta Guardada !!");
      },
      (error)=>{
        console.error(error);
        toast.error("Error guardando la Venta!!")
      })

    setMostrarTabla(!mostrarTabla)

  }

 
  return(
  
      <div  className="formularioCrearVentas">
          
          <div className="contenedorTituloRegistroVenta">
          <h1>Crear Venta</h1>                    
          </div>

          <form ref={form} onSubmit={guardarVenta}>
              <label className="labelCampos">
                  Identificador
                  <input  name='identificador' className="camposRegistroVenta" type="text" required/>
              </label> 

              <label className="labelCampos" htmlFor="descripcion">
                  Valor Total Venta
                  <input   name='valorTotalVenta' className="camposRegistroVenta" type="number" required />
              </label>

              <label className="labelCampos" htmlFor="valor unitario">
                  Cantidad
                  <input   className="camposRegistroVenta" type="number" name='cantidad' required />
              </label>
              <label className="labelCampos" htmlFor="valor unitario">
                  Precio Unitario
                  <input   className="camposRegistroVenta" type="number" name='precioUnitario' required />
              </label>

              <label className="labelCampos" htmlFor="valor unitario">
                  Fecha de Venta
                  <input   className="camposRegistroVenta" type="date" name='fechaVenta' required />
              </label>

              <label className="labelCampos" htmlFor="valor unitario">
                  Identificación Cliente
                  <input   className="camposRegistroVenta" type="text" name='identificacionCliente' required />
              </label>

              <label className="labelCampos" htmlFor="valor unitario">
                Nombre Cliente
                  <input   className="camposRegistroVenta" type="text" name='nombreCliente' required />
              </label>

              <label className="labelCampos" htmlFor="valor unitario">
                Nombre Vendedor
                  <input   className="camposRegistroVenta" type="text" name='nombreVendedor' required />
              </label>

              <label className="labelCampos"  htmlFor="estado">
                  Estado
                  <select  className="camposRegistroVenta" name="estado"  required>
                      <option value="" selected disabled>Seleccione una opción</option>
                      <option >En Proceso</option>
                      <option >Cancelada</option>
                      <option >Entregada</option>
                  </select>
                  
              </label>                
              

              <div className="contBotonGuardarVenta">
                  
                  <button onClick={()=>{setMostrarTabla(!mostrarTabla)}} className="botonCancelar" type="submit" value="Cancelar" >Cancelar</button>
                  <button type='submit'  className="botonGuardar" value="Guardar">Crear</button>

              </div>          

          </form>

      </div>
       )

}


const TablaVenta = ({setMostrarTabla,mostrarTabla,listaVenta,actualizarForm,setActualizarForm,setEjecutarConsulta}) => {

  const [venta,setVenta]=useState();
  const [busqueda, setBusqueda] = useState('');
  const [vehiculosFiltrados, setVehiculosFiltrados] = useState(listaVenta);
  //const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    setVehiculosFiltrados(
      listaVenta.filter((elemento) => {
        return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
      })
    );
  }, [busqueda,listaVenta]);

 const actualizarVenta=(venta)=>{
   setActualizarForm(!actualizarForm)
   setVenta(venta)  
 }
 
 

  const eliminarVenta = (venta) => { 
   
    //setOpenDialog(true);

    const eliminar=async(venta)=>{
      await eliminarLaVenta(
        venta,
        (response) => {
          console.log(response.data);
          toast.success('venta eliminada con éxito');
          setEjecutarConsulta(true)
          
        },
        (error) => {
          console.error(error);
          toast.error('Error eliminando la venta');
        }
      );

    }

    swal({
      title:"Eliminar",
      text:`Está seguro de eliminar el la venta`,
      icon:"warning",
      buttons:["No","Si"]
    }).then(respuesta=>{
      if(respuesta){
        eliminar(venta);
      }
    })   

       
  };
 
  
    return (
      <>
      {actualizarForm ? (<FormularioActualizarVenta setActualizarForm={setActualizarForm} actualizarForm={actualizarForm} venta={venta} setEjecutarConsulta={setEjecutarConsulta}/>):
        (
          <div>
                <div>
                  <input value={busqueda} onChange={(e)=>{setBusqueda(e.target.value)}} className="buscar" type="text" placeholder='Buscar Venta' />

                  <div className="contenedorImagenTitulo">                
                    <div className="iconoVentas">
                      <button onClick={()=>{setMostrarTabla(!mostrarTabla)}}>
                          <img src={plus_circle} alt="" />
                     </button>
                    </div>
                  
                    <div className="tituloGestionarProducto">
                      <h1>GESTIONAR VENTA</h1>
                    </div>
                  </div>
                </div>
            <div className='contenedorTablaVentas'>
              <table>
                <thead className="encabezadoTablaVentas">
                  <tr>
                    <th>Identificador</th>
                    <th>Valor Total Venta</th>
                    <th>Cantidad</th>
                    <th>Precio Unitario</th> 
                    <th>Fecha Venta</th> 
                    <th>Identificacion Cliente</th> 
                    <th>Nombre Cliente</th> 
                    <th>Nombre Vendedor</th> 
                    <th>Estado</th> 
                    <PrivateComponent roleList={['admin']}>
                      <th>Actualizar</th> 
                      <th>Eliminar</th>
                    </PrivateComponent>  
                  </tr>
                </thead>
                <tbody>
                    {vehiculosFiltrados.map((venta)=>{                 
                       
                        return(
                         <>                        
                          <tr key={nanoid()} > 
                            <td>{venta.identificador}</td>
                            <td>{venta.valorTotalVenta}</td>
                            <td>{venta.cantidad}</td>
                            <td>{venta.precioUnitario}</td>
                            <td>{venta.fechaVenta}</td>
                            <td>{venta.identificacionCliente}</td>
                            <td>{venta.nombreCliente}</td>
                            <td>{venta.nombreVendedor}</td>
                            <td>{venta.estado}</td>
                            <PrivateComponent roleList={['admin']}>
                            <td>  <button onClick={()=>{actualizarVenta(venta)}}> <img src={penciles} alt="" /> </button></td>
                            <td>  <button onClick={()=>{eliminarVenta(venta)}}> <img src={iconoDelete} alt="" /> </button></td>
                                                 
                            </PrivateComponent>                              
                          </tr> 
                          
                          {/* <Dialog open={openDialog}>
                              <div className="contenedorDialogoEliminar">
                                <h1 >
                                  ¿Está seguro de querer eliminar el producto {venta.descripcion}?
                                </h1>
                                <div className='contBotonesDiagEliminar'>
                                  <button onClick={()=>eliminarVenta(venta)}
                                    
                                    className='botonSi'
                                  >
                                    Sí
                                  </button>
                                  <button 
                                    onClick={() => setOpenDialog(false)}
                                    className='botonNo'
                                  >
                                    No
                                  </button>
                                </div>
                              </div>
                           </Dialog>    */}                                           

                          </>                 

                        )

                    })}
                                  
                      
                 
              </tbody>
            </table>
          </div>
        </div>
        )
      }

      </>
      

        
    )
}

const FormularioActualizarVenta=({setActualizarForm,actualizarForm,venta,setEjecutarConsulta})=>{
  const form=useRef(null)
  const actualizarVenta=async(e)=>{
   
    e.preventDefault();
    const datosFormulario=new FormData(form.current);
    const editarVenta={};

    datosFormulario.forEach((value,key)=>{//recorro todos los campos del formulario y los almaceno en un objeto nuevoProducto
      editarVenta[key]=value;

        });
        
        actualizarLaVenta(venta,editarVenta,
        (response)=>{
          //console.log(response.data);
          toast.success("Venta actualizada!!");
          setEjecutarConsulta(true)
        },(error)=>{
          //console.error(error);
          toast.error("La venta no se actualizó")
        })
        
    setActualizarForm(!actualizarForm)


  } 


  return(
    <div  className="formularioCrearVentas">
            
    <div className="contenedorTituloRegistroVenta">
    <h1>Editar Venta</h1>                    
    </div>

    
    <form ref={form} onSubmit={actualizarVenta}>
              <label className="labelCampos">
                  Identificador
                  <input  name='identificador' className="camposRegistroVenta" type="text" value={venta.identificador} required/>
              </label> 

              <label className="labelCampos" htmlFor="descripcion">
                  Valor Total Venta
                  <input   name='valorTotalVenta' className="camposRegistroVenta" type="number" defaultValue={venta.valorTotalVenta}required />
              </label>

              <label className="labelCampos" htmlFor="valor unitario">
                  Cantidad
                  <input   className="camposRegistroVenta" type="number" name='cantidad' defaultValue={venta.cantidad} required />
              </label>
              <label className="labelCampos" htmlFor="valor unitario">
                  Precio Unitario
                  <input   className="camposRegistroVenta" type="number" name='precioUnitario' defaultValue={venta.precioUnitario} required />
              </label>

              <label className="labelCampos" htmlFor="valor unitario">
                  Fecha de Venta
                  <input   className="camposRegistroVenta" type="date" name='fechaVenta'defaultValue={venta.fechaVenta} required />
              </label>

              <label className="labelCampos" htmlFor="valor unitario">
                  Identificación Cliente
                  <input   className="camposRegistroVenta" type="text" name='identificacionCliente' defaultValue={venta.identificacionCliente} required />
              </label>

              <label className="labelCampos" htmlFor="valor unitario">
                Nombre Cliente
                  <input   className="camposRegistroVenta" type="text" name='nombreCliente' defaultValue={venta.nombreCliente} required />
              </label>

              <label className="labelCampos" htmlFor="valor unitario">
                Nombre Vendedor
                  <input   className="camposRegistroVenta" type="text" name='nombreVendedor' defaultValue={venta.nombreVendedor} required />
              </label>

              <label className="labelCampos"  htmlFor="estado">
                  Estado
                  <select  className="camposRegistroVenta" name="estado" defaultValue={venta.estado} required>
                      <option value="" selected disabled>Seleccione una opción</option>
                      <option >En Proceso</option>
                      <option >Cancelada</option>
                      <option >Entregada</option>
                  </select>
                  
              </label>                
              

              <div className="contBotonGuardarVenta">
                  
                  <button onClick={()=>{setActualizarForm(!actualizarForm)}} className="botonCancelar" type="submit" value="Cancelar" >Cancelar</button>
                  <button type='submit'  className="botonGuardar" value="Actualizar">Actualizar</button>

              </div>          

          </form>


</div>
  )

}





const Venta= () => {
  const [mostrarTabla,setMostrarTabla]=useState(true)
  const [actualizarForm,setActualizarForm]=useState(false)
  const [ejecutarConsulta,setEjecutarConsulta]=useState(true)
 
  const [venta,setVenta]=useState([])//es un arreglo que almacenará los ventas que vengan de la bd

  useEffect(() => {
   
    if (ejecutarConsulta) {
      obtenerVentas(
        (response)=>{
          setVenta(response.data);
          setEjecutarConsulta(false);
        }
        ,(error)=>{
          console.log(error)
        }
        );
    }
}, [ejecutarConsulta]);

useEffect(() => {
    //Si esta en true deberia volver a hacer la peticion a la api
    if (mostrarTabla) {
      setEjecutarConsulta(true);
    }
}, [mostrarTabla]);

 
  return (
      <div>   
         

          {mostrarTabla ? (
           <TablaVenta setMostrarTabla={setMostrarTabla} mostrarTabla={mostrarTabla} listaVenta={venta} actualizarForm={actualizarForm} setActualizarForm={setActualizarForm} venta={venta} setEjecutarConsulta={setEjecutarConsulta} /> 
          )
          :(<FormularioCrearVenta setMostrarTabla={setMostrarTabla} mostrarTabla={mostrarTabla} setVenta={setVenta } listaVenta={venta}/>
          )
          }           
          <ToastContainer  position="top-center"  autoClose={3000} />            

      </div>
            
  );
}



export default Venta;