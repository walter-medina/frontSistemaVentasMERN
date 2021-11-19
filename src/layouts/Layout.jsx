import MenuLateral from 'components/menuLateral';
import Footer from 'components/Footer';
import React, { useEffect,useState } from 'react';
import 'styles/estiloMenuLateral.css'
import { Auth0Provider } from '@auth0/auth0-react';
import { useAuth0 } from '@auth0/auth0-react';
import { obtenerDatosUsuario } from 'utils/api';
import { useUser } from 'context/userContext';
import ReactLoading from 'react-loading';
//const baseURL = 'http://localhost:3000'
const baseURL = 'https://shrouded-beach-28471.herokuapp.com'

const Layout = ({ children }) => {
  const { isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently, logout } =
    useAuth0();
  const [loadingUserInformation, setLoadingUserInformation] = useState(false);
  const { setUserData } = useUser();

  useEffect(() => {
    const fetchAuth0Token = async () => {

      // 1. pedir token a auth0
      setLoadingUserInformation(true);

      const accessToken = await getAccessTokenSilently({
        audience: `api-turing-mintic`,
      });
      // 2. recibir token de auth0
      localStorage.setItem('token', accessToken);
      console.log(accessToken);
      // 3. enviarle el token a el backend
      await obtenerDatosUsuario(
        (response) => {
          console.log('response con datos del usuario', response);
          setUserData(response.data);
          setLoadingUserInformation(false);
        },
        (err) => {
          console.log('err', err);
          setLoadingUserInformation(false);
          logout({ returnTo: baseURL });
        }
      );
    };
    if (isAuthenticated) {
      fetchAuth0Token();
    }
  }, [isAuthenticated, getAccessTokenSilently]);
  
  if (isLoading || loadingUserInformation)
    return <ReactLoading type='cylon' color='#abc123' height={667} width={375} />;

  if (!isAuthenticated) {
    return loginWithRedirect();
  }
  return (
    <div>
      <div className='mainContainer'>
        <MenuLateral />
        <main>{children}
        <Footer />   
        </main> 
         
      </div>
    
    </div>
  );

};

export default Layout;