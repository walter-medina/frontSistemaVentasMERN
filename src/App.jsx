import Layout from 'layouts/Layout';
import Index from 'pages';
import GestionarUsuario from 'pages/gestionarUsuarios';
import GestionarVendedor from 'pages/gestionarVendedores';
import AnadirVendedor from 'pages/anadirVendedor';
import FormularioCrearVentas from 'pages/formularioCrearVenta';
import ActualizarVenta from 'pages/actualizarVenta';

import AdministrarUsuarios from 'pages/AdministrarUsuarios';
import Ventas from 'pages/ventas';
import Productos from 'pages/gestionar_producto';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { UserContext } from 'context/userContext';
import React, { useState, useEffect } from 'react';
import PrivateRoute from 'components/PrivateRoute';

function App() {
  const [userData, setUserData] = useState({});

  return (
    <Auth0Provider
    domain='turing-misiontic.us.auth0.com'
    clientId='Qm4xSXJVM3aMW3xtufmLsJauTGHwxevb'
    redirectUri={window.location.origin}
    audience='api-turing-mintic'
    >
      <div className='App'>
      <UserContext.Provider value={{ userData, setUserData }}>
      <Router>
          <Switch>
          <Route path={['/', '/gestionarUsuarios', '/gestionar_vendedor','/AdministrarUsuarios','/gestionar_producto']}>   
            <Layout>
              <Switch>
              
                <Route path='/' exact >
                  <PrivateRoute roleList={['admin','vendedor']} estadoList={['autorizado']} >
                    <Ventas />
                  </PrivateRoute>
                </Route>
              
                <Route path='/gestionar_vendedor'  exact>
                  <PrivateRoute roleList={['admin']} estadoList={['autorizado']}>
                    <GestionarVendedor />
                  </PrivateRoute>
                </Route>
                <Route path='/AdministrarUsuarios'  exact>
                  <PrivateRoute roleList={['admin']} estadoList={['autorizado']}>
                    <AdministrarUsuarios />
                  </PrivateRoute>
                </Route> 
                  
              
                <Route path='/gestionar_producto'  exact>
                  <PrivateRoute roleList={['admin','vendedor']} estadoList={['autorizado']}>
                    <Productos />
                  </PrivateRoute>
                </Route> 


              </Switch>
            </Layout>
          </Route>
          {/*
          <Layout>
            <Route path='/ventas' exact>
              <Ventas />
            </Route>            
              
            <Route path='/actualizarVenta' exact>
              <ActualizarVenta />
                
            </Route> 
            <Route path='/formularioCrearUsuario' exact>
              <formularioCrearUsuario/>
            </Route> 
            <Route path='/gestionarUsuarios' exact>
              <GestionarUsuario />
            </Route> 
            <Route path='/formularioCrearVenta' exact>
              <FormularioCrearVentas />
            </Route> 
            <Route path='/gestionar_vendedor' exact>
              <GestionarVendedor />
            </Route>
            <Route path='/anadirVendedor' exact>
              <AnadirVendedor />
            </Route>
            
           
            <Route path='/gestionar_producto' exact>
              <Productos />
            </Route> 
            <Route path='/AdministrarUsuarios' exact>
              <AdministrarUsuarios />
            </Route> 
          </Layout>
        */}
        </Switch>
        
      </Router>
      </UserContext.Provider>
      </div>
    </Auth0Provider>
  );
}

export default App;