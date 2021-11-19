import React, {useEffect,useState,useRef} from 'react'
import { Link } from 'react-router-dom';
import 'styles/login.css';
import iconoVenta from 'media/usuario.png';
import { useAuth0 } from '@auth0/auth0-react';


{/*
const Index = () => {
    return (

    

        <div className="login-box">
        <img src={iconoVenta } className="avatar" alt="Logo login"/>
        <h1>Ventas Turing</h1>
        <form>

          <div>
          <label for="username">Usuario</label>
          <input required type="text" placeholder="Ingresar Usuario" />

          </div>
         
          
          
          <label for="password">Contraseña</label>
          <input required type="password" placeholder="Ingresar Contraseña" />

          <Link to="/ventas">
          <input type="submit" value="Entrar"/>
          
          </Link>
          <div className="gmail">
          <label  for="username">Ingresar con Gmail</label>

          </div >
          

          <input type="submit" value="Registrarse"/>
         
        </form>
      </div>


    );
}

*/}
const Index = () => {
  const { loginWithRedirect } = useAuth0();

  return <><button onClick={()=>{loginWithRedirect()}}>iniciar</button> </>;
}

export default Index;
