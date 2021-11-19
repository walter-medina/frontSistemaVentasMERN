import React, {useEffect,useState,useRef} from 'react';
import penciles from 'media/pencil1.png';
import plus_circle from 'media/plus-circle1.png';
import iconoDelete from 'media/delete.png';
import ActualizaUsuario from 'components/ActualizaUsuario'
import 'styles/estiloIndex.css';
import {eliminarElUsuario} from 'utils/api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';

const TablaUsuarios = ({ listaUsuarios , actualizaUsuario , setActualizaUsuario , setUsuarios, setMostrarTabla, mostrarTabla,setEjecutarConsulta }) => {
    const [identificacionUsuario, setIdentificacionUsuario] = useState();
    
    const eliminaUsuario = (identificacion)=>{
      const elUsuario = async (identificacion)=>{
        await eliminarElUsuario(identificacion,
          (respuesta)=>{
            console.log("respuesta ->" ,respuesta)
            console.log("Usuario Eliminado");
            toast.success('Usuario eliminado con éxito');
    
            setEjecutarConsulta(true)
          },(error)=>{
            console.error(error);
            toast.error('Error eliminando el usuario');
          })
        }
      swal({
        title:"Eliminar",
        text:"Estas seguro que deseas eliminar este vendedor?",
        icon:"warning",
        buttons:["No","Si"]
      }).then(respuesta=>{
        if(respuesta){
          elUsuario(identificacion);
        }
      })

    }
      

    
    const actUsuario =(identificacion)=>{
      setIdentificacionUsuario(identificacion);
      setActualizaUsuario(true);
    }
    
    return (
      <section>
        {actualizaUsuario ? (
          <ActualizaUsuario listaUsuarios={listaUsuarios} actualizaUsuario={actualizaUsuario} setActualizaUsuario={setActualizaUsuario} setUsuarios={setUsuarios} identificacionUsuario={identificacionUsuario}/>
          ) : (
          <div>
                <div>
                  <div className="contenedorImagenTitulo">                
                    <div className="iconoVentas">
                      <button 
                        onClick={() => {
                          setMostrarTabla(!mostrarTabla);
                        }}
                      ><img src={plus_circle} alt="" /></button>
                    </div>
                  
                    <div className="tituloGestionarVenta">
                      <h1>GESTIONAR USUARIOS</h1>
                    </div>
                  </div>
                </div>
            <div className='contenedorTablaVentas'>
              <table>
                <thead className="encabezadoTablaVentas">
                  <tr>
                    <th>Email</th>
                    <th>Estado</th>
                    <th>Rol</th>
                    <th>Actualizar</th>
                    <th>Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                  {listaUsuarios.map((usuario) => {
                    return (
                      <tr >
                        <td>{usuario.email}</td>
                        <td>{usuario.rol}</td>
                        <td>{usuario.estado}</td>
                        <td><button onClick={() => actUsuario(usuario)}><img  src={penciles } alt="actualizar usuario" /></button></td>
                        <td><button onClick={() => eliminaUsuario(usuario._id)}><img  src={iconoDelete } alt=" eliminar usuario" /></button></td>
                      </tr>
                    );
                })}
              </tbody>
            </table>
          </div>
        </div>
          )}
        
      </section>
      );
}

export default TablaUsuarios;
