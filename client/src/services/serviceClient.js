import api from './api';

export const ServiceClient = {
  list: filters => {
    return api.get('/clients', {
      params: filters,
    });
  },
  remove: clientId => {
    return api.delete(`/clients/${clientId}`);
  },
  create: values => {
    return api.post('/clients', {
      ...values,
    });
  },
};
