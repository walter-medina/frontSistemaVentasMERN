import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { useUser } from 'context/userContext';
import { obtenerDatosUsuario } from 'utils/api';


/*
const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently } = useAuth0();
  //Traemos el usuario del context
  const { setUserData } = useUser();
  useEffect(() => {
    const fetchAuth0Token = async () => {
      // 1. pedir token a auth0
      const accessToken = await getAccessTokenSilently({
        audience: `api-turing-mintic`,
      });
       // 2. recibir token de auth0
      localStorage.setItem('token', accessToken);
      console.log(accessToken);
      // 3. enviarle el token a el backend
      console.log("hikaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
      await obtenerDatosUsuario(
        (response) => {
          console.log('response con datos del usuario', response);
          setUserData(response.data);
        },
        (err) => {
          console.log('err', err);
        }
      );
    };
    if (isAuthenticated) {
      fetchAuth0Token();
    }
  }, [isAuthenticated, getAccessTokenSilently]);
  
  if (isLoading) {
    return <ReactLoading type='cylon' color='#abc123' height={667} width={375} />;
  }

  localStorage.setItem('isAuthenticated', isAuthenticated);
  if (!isAuthenticated){
    return loginWithRedirect();
  }
  {/*if (!isAuthenticated){
    return loginWithRedirect();
  }}
  return <> {children} </>;
 
};
*/

const PrivateRoute = ({ roleList,estadoList, children }) => {
  const { userData } = useUser();
  console.log("roleList ",roleList)
  console.log("estadoList",estadoList)
  if (roleList.includes(userData.rol) && estadoList.includes(userData.estado) ) {
    return children;
  }



  

  return <div >No estás autorizado para ver este sitio.</div>;
   
  
};

export default PrivateRoute;
