import axios from 'axios';

//create BASE API (env 처리 추후 예정)
const api = axios.create({
  baseURL: `${process.env.REACT_APP_AXIOS_API}`,
});

//API TOKEM Intercepters (토큰이름은 백에서 주면 변경)
api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('access_token');
  if (token) {
    config.headers['access_token'] = token;
  }
  return config;
});

export default api;
