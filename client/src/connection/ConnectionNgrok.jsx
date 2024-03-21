import server from './Connection';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: server.api.baseURL,
  headers: {
    'ngrok-skip-browser-warning': 'true', // Agregar el encabezado de solicitud para evitar la advertencia de ngrok
  },
});

export default axiosInstance;
