import axios from 'axios';

axios.defaults.baseURL = 'http://open.duyiedu.com';

axios.interceptors.request.use((config) => {
  const request = config;
  request.params = {
    ...request.params,
    appkey: '15556677737_1585147447159',
  };
  return request;
});

axios.interceptors.response.use((response) => {
  if (response.status === 200) {
    if (response.config.url === '/api/meituan/list/areaList.json') {
      return response.data;
    }
    return response.data.data;
  }
  return response;
});

export default axios;
