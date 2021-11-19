//La gestion de ventas será nuestro pagina de inicio o index
import plus_circle from 'media/plus-circle1.png';
//La gestion de ventas será nuestro pagina de inicio o index
import React, {useEffect,useState,useRef} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import TablaVendedores from 'components/TablaVendedores'
import AnadirVendedor from 'components/AnadirVendedor';
import 'styles/estiloIndex.css';
import { obtenerVendedores } from 'utils/api';

let vendedoresBackend = [
  {identificacion:"12123",nombre:"andres",especialidad:"Venta de calzado",telefono:"1331",fecha_ingreso:"22-09-2021"},
  {identificacion:"213123",nombre:"walter",especialidad:"Venta de ropa",telefono:"231321",fecha_ingreso:"21-09-2021"},
  {identificacion:"4112",nombre:"fabian",especialidad:"Venta de manillas",telefono:"123123",fecha_ingreso:"20-09-2021"},
  {identificacion:"3412",nombre:"diana",especialidad:"Venta de electrodomesticos",telefono:"12312",fecha_ingreso:"19-09-2021"},
  {identificacion:"56531",nombre:"ruby",especialidad:"Venta de celulares",telefono:"123341",fecha_ingreso:"17-09-2021"}
]

const GestionarVendedor =()=>{
    const [vendedores, setVendedores] = useState([]);
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [actualizaVendedor, setActualizaVendedor] = useState(false);
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

  
    useEffect(() => {
        console.log('consulta', ejecutarConsulta);
        if (ejecutarConsulta) {
            obtenerVendedores(
            (response)=>{
              setVendedores(response.data);
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


    return(
        <section>
            {mostrarTabla ? (
              <div>
                
                <div className="contenedorTablaVentas">
                  <TablaVendedores listaVendedores={vendedores} actualizaVendedor={actualizaVendedor} setActualizaVendedor={setActualizaVendedor} setVendedores={setVendedores} setMostrarTabla={setMostrarTabla} mostrarTabla={mostrarTabla} setEjecutarConsulta={setEjecutarConsulta}/>
                </div>
              </div>
              ) : (
                <AnadirVendedor
                setMostrarTabla={setMostrarTabla}
                />
            )}
          <ToastContainer position='bottom-center' autoClose={3000} />
        </section>

    );
}


export default GestionarVendedor;