import React from 'react';
import { Link } from 'react-router-dom';
import 'styles/estiloMenuLateral.css'
import logoVenta from 'media/logoVenta.png';
import iconoVenta from 'media/iconoVenta.png';
import iconoVendedor from 'media/iconoVendedor.png';
import iconoAdmin from 'media/iconoAdmin.png';
import iconoSesion from 'media/iconoSesion.png';
import { useAuth0 } from '@auth0/auth0-react';
import iconoProducto from 'media/producto.png';
import PrivateComponent from './PrivateComponent';
//const baseURL = 'http://localhost:3000'
const baseURL = 'https://shrouded-beach-28471.herokuapp.com'
const Menu = () => {
    const { logout } = useAuth0();

    return (
       <nav className="menuLateral"> 
        <ul>
            <li> 
                <nav className="navMenuLateral">
                <img src={logoVenta} alt="Logo aplicación" />
                <h1>Ventas Turing</h1>  
                </nav>  
            </li>

            <PrivateComponent roleList={['admin','vendedor']}>
                <li>
                    <Link to='/' className="itemMenuLateral"> 
                        <img src={iconoVenta} alt="Ícono Venta" />
                        <h4>Ventas</h4>
                    </Link>                 
                </li>
            </PrivateComponent>
            <PrivateComponent roleList={['admin']}>
                <li>    
                    <Link to='/gestionar_vendedor' className="itemMenuLateral">          
                    <img src={iconoVendedor} alt="Ícono Vendedor" />
                    <h4>Vendedores</h4>      
                    </Link> 
                </li>
            </PrivateComponent>
            <PrivateComponent roleList={['admin','vendedor']}>

                <li>    
                    <Link to='/gestionar_producto' className="itemMenuLateral">          
                    <img src={iconoProducto} alt="Ícono Producto" />
                    <h4>Productos</h4>      
                    </Link> 
                </li>
            </PrivateComponent>
            <PrivateComponent roleList={['admin']}>
                <li>
                    
                <Link to='/AdministrarUsuarios' className="itemMenuLateral"> 
                    <img src={iconoAdmin} alt="Ícono administración de usuarios" />
                    <h4>Administración de Usuarios</h4>
                </Link>

                </li>      
            </PrivateComponent>
      

            <li>
            <Link to='/' className="itemMenuLateral"> 
                <img src={iconoSesion} alt="Ícono cerrar sesión" />
               
                <button onClick={() => logout({ returnTo: baseURL })}>Cerrar Sesión</button>
            </Link>

            </li>
            
        </ul>                    
 

       </nav>   
    );
}

export default Menu;