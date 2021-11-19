import axios from 'axios';

//const baseURL = "http://localhost:5000"
const baseURL = "https://fathomless-mesa-97310.herokuapp.com"

const getToken = () => {
  return `Bearer ${localStorage.getItem('token')}`;
};
export const obtenerVendedores = async (callBackResponse,callBackError) => {
  const options = { method: 'GET', url: `${baseURL}/vendedores/`
  ,headers: {
    Authorization: getToken(),
  },};
  localStorage.setItem('options_vendedores', options.Authorization);

  await axios
    .request(options)
    .then(callBackResponse)
    .catch(callBackError);
};

export const crearVendedor = async (data,callBackResponse,callBackError) => {
  const options = { method: 'POST', url: `${baseURL}/vendedores/` ,data,headers: { Authorization: getToken(), }};
  await axios
    .request(options)
    .then(callBackResponse)
    .catch(callBackError);
};

export const actualizarElVendedor = async (identificacionVendedor,nuevoVendedor,callBackResponse,callBackError) => {
  const options = {
    method: 'PATCH',
    url: `${baseURL}/vendedores/${identificacionVendedor._id}/`,
    headers: { 'Content-Type': 'application/json',Authorization: getToken(), },
    data: nuevoVendedor,
  };
  await axios
    .request(options)
    .then(callBackResponse)
    .catch(callBackError);
};

export const eliminarElVendedor = async (id,callBackResponse,callBackError) => {
  const options = {
    method: 'DELETE',
    url: `${baseURL}/vendedores/${id}/`,
    headers: { 'Content-Type': 'application/json',Authorization: getToken(), },
  };
  await axios
    .request(options)
    .then(callBackResponse)
    .catch(callBackError);
};
export const obtenerDatosUsuario = async (successCallback, errorCallback) => {
  const options = {
    method: 'GET',
    url: `${baseURL}/usuarios/self`,
    headers: {
      Authorization: getToken(), // 3. enviarle el token a backend
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};
export const obtenerUsuarios = async (callBackResponse,callBackError) => {
  const options = { method: 'GET', url: `${baseURL}/usuarios/`,headers: {
    Authorization: getToken(),
  }, };
  await axios
    .request(options)
    .then(callBackResponse)
    .catch(callBackError);
};

export const crearUsuario = async (nuevoUsuario,callBackResponse,callBackError) => {
  const options = { method: 'POST', url: `${baseURL}/usuarios/` ,data:nuevoUsuario,headers: { 'Content-Type': 'application/json',Authorization: getToken(), }};
  await axios
    .request(options)
    .then(callBackResponse)
    .catch(callBackError);
};

export const actualizarElUsuario = async (identificacionUsuario,nuevoUsuario,callBackResponse,callBackError) => {
  const options = {
    method: 'PATCH',
    url: `${baseURL}/usuarios/${identificacionUsuario._id}/`,
    headers: { 'Content-Type': 'application/json',Authorization: getToken(), },
    data: nuevoUsuario,

  };
  await axios
    .request(options)
    .then(callBackResponse)
    .catch(callBackError);
};

export const eliminarElUsuario = async (id,callBackResponse,callBackError) => {
  const options = {
    method: 'DELETE',
    url: `${baseURL}/usuarios/${id}/`,
    headers: { 'Content-Type': 'application/json' , Authorization: getToken(),},
  };
  await axios
    .request(options)
    .then(callBackResponse)
    .catch(callBackError);
};

export const obtenerProductos = async (callBackResponse,callBackError)=>{
  const options = {method: 'GET', url: `${baseURL}/producto/`,headers: { Authorization: getToken(),}};
  await axios 
  .request(options)
  .then(callBackResponse)
  .catch(callBackError);
}

export const ActualizarProducto = async(codigo,venta,callBackResponse,callBackError)=>{
  const options = {
    method: 'PATCH',
    url: `${baseURL}/productoeditar`,
    headers: {'Content-Type': 'application/json',Authorization: getToken(),},
    data: {
     id: codigo._id,
      identificacion: venta.identificacion,
      descripcion: venta.descripcion,
      valorUnitario: venta.valorUnitario,
      estado: venta.estado
    }
  };
  await axios 
  .request(options).then(callBackResponse).catch(callBackError);        
}


export const eliminarElProducto = async (productoid,callBackResponse,callBackError)=>{
  const options = {
    method: 'DELETE',
    url: `${baseURL}/productoeliminar`,
    headers: {'Content-Type': 'application/json',Authorization: getToken(),},
    data: {id: productoid._id}
  };
  
  await axios 
  .request(options).then(callBackResponse).catch(callBackError);
}

export const crearElProducto = async (nuevoProducto,callBackResponse,callBackError)=>{
  const options = {
    method: 'POST',
    url: `${baseURL}/productonuevo`,
    headers: {'Content-Type': 'application/json',Authorization: getToken(),},
    data: {
      identificacion:nuevoProducto.identificacion,
      descripcion: nuevoProducto.descripcion,
      valorUnitario: nuevoProducto.valorUnitario,
      estado: nuevoProducto.estado
    }
  };

 await axios.request(options).then(callBackResponse).catch(callBackError);
}

//**********API REST VENTAS */


export const obtenerVentas = async (callBackResponse,callBackError)=>{
  const options = {method: 'GET', url: `${baseURL}/venta/`,headers: { Authorization: getToken(),}};
  await axios 
  .request(options)
  .then(callBackResponse)
  .catch(callBackError);
}





export const eliminarLaVenta = async (venta,callBackResponse,callBackError)=>{
  const options = {
    method: 'DELETE',
   // url: 'http://localhost:5000/ventaeliminar/',
    url:`${baseURL}/ventaeliminar/`,
    //url: `${baseURL}/ventaeliminar/${venta._id}/`,
    headers: {'Content-Type': 'application/json',Authorization: getToken(),},
    data: {id: venta._id}
  };
  
  await axios 
  .request(options).then(callBackResponse).catch(callBackError);
}

export const crearLaVenta = async (nuevaVenta,callBackResponse,callBackError)=>{
  const options = {
    method: 'POST',
    url: `${baseURL}/ventanueva/`,
    headers: {'Content-Type': 'application/json',Authorization: getToken(),},
    data: {
      identificador: nuevaVenta.identificador,
      valorTotalVenta: nuevaVenta.valorTotalVenta,
      cantidad:nuevaVenta.cantidad,
      precioUnitario: nuevaVenta.precioUnitario,
      fechaVenta:nuevaVenta.fechaVenta,
      identificacionCliente:nuevaVenta.identificacionCliente,
      nombreCliente: nuevaVenta.nombreCliente,
      nombreVendedor: nuevaVenta.nombreVendedor,
      estado: nuevaVenta.estado
    }
  };

   await axios.request(options).then(callBackResponse).catch(callBackError);
  
 
}

export const actualizarLaVenta = async(idVenta,editarVenta,callBackResponse,callBackError)=>{
  const options = {
    method: 'PATCH',
    //url: 'http://localhost:5000/ventaeditar',
    url: `${baseURL}/ventaeditar/`,
    headers: {'Content-Type': 'application/json',Authorization: getToken(),},
    data: {
      id: idVenta._id,
      identificador: editarVenta.identificador,
      valorTotalVenta: editarVenta.valorTotalVenta,
      cantidad: editarVenta.cantidad,
      precioUnitario: editarVenta.precioUnitario,
      fechaVenta: editarVenta.fechaVenta,
      identificacionCliente: editarVenta.identificacionCliente,
      nombreCliente: editarVenta.nombreCliente,
      nombreVendedor: editarVenta.nombreVendedor,
      estado: editarVenta.estado
    }
  };
  await axios 
  .request(options).then(callBackResponse).catch(callBackError);        
}