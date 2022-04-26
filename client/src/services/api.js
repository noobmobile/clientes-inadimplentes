import { notification } from 'antd';
import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:3001/api`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  config => config,
  error => handleError(error)
);

api.interceptors.response.use(
  response => mapResponseToUsefulData(response),
  error => handleError(error)
);

const httpErrorHandler = error => {
  if (error?.response?.data?.error) {
    notification.error({
      message: error.response.data.error,
    });
  }
};
const httpSucessMessage = message => {
  notification.success({
    message,
  });
};

const handleError = error => {
  console.error(error);
  httpErrorHandler(error);
  return Promise.reject(error);
};

const mapResponseToUsefulData = response => {
  const data = response.data;

  if (data?.message) {
    httpSucessMessage(data.message);
  }
  return data;
};

export default api;
