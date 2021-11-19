//import agregar from "media/plus-circle1.png";
import { Link } from "react-router-dom";
import React, {useEffect,useState} from 'react'
//import { Link } from 'react-router-dom';

import penciles from 'media/pencil1.png';
import plus_circle from 'media/plus-circle1.png';
import iconoDelete from 'media/delete.png';
import 'styles/stylesGestionarUsuario.css';





const usuario=()=>[
{
 identificacion:"1151765432",
 nombre:"Ruby Medina",
 rol:"vendedor"
 
},
{
 identificacion:"1144765432",
 nombre:"Isaias Medina",
 rol:"Administrador"

},
{
  identificacion:"1151786543",
  nombre:"Sebastian Perez",
  rol:"Director"
 

}


];

 const TablaGestionarUsuarios=({listaUsuarios})=> {
   return (
     <section>
       <div className="contenedorImagenTituloUsuario">
        <Link to ='/formularioCrearUsuario'>
          <div className="iconoUsuario">
          <img src={plus_circle} alt="crear Usuario" />
          </div>
            
          </Link>
       <h1 className="tituloGestionarUsuario">GESTIONAR USUARIOS</h1>

       </div>
      
       <div className="contenedorTablaUsuarios">
         <table>
           <thead className="encabezadoTablaUsuarios"> 
            <tr>
              <th>Identificación </th>
              <th>Nombre</th>
              <th>Rol</th>
              <th>Actualizar</th>
              <th>Eliminar</th>

            </tr>

           </thead>
           <tbody>
             {listaUsuarios.map((usuario)=>{
               return(
                 <tr>
                   <td>{usuario.identificacion}</td>
                   <td>{usuario.nombre}</td>
                   <td>{usuario.rol}</td>
                   <td>  <img  src={penciles } alt="actualizar usuario" /></td>
                   <td>  <img  src={iconoDelete } alt=" eliminar usuario" /></td>

                  
                  
                    </tr>
               )

               })}

           </tbody>

       </table>
       </div>

     </section>

   )

 }



 const IndexUsuario =()=>{  
  const [ventas,setVentas]=useState([]);
  useEffect(()=>{
      //se trae la lista de ventas desde el backend, en este caso desde el objeto venta y lo coloca en setVentas
      setVentas(usuario);
     },[])  

  return(  
      //llamo a la funcion TablaVentas  y le paso a la lista la variable ventas, variable que tiene todos las ventas de la bd
      <TablaGestionarUsuarios listaUsuarios={ventas}/>       

      

  );

}

export default IndexUsuario;