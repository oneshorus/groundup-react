import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

export const getListMachineType = () => {
  return axios.get(`${API_BASE_URL}/list/machinetype`);
};

export const getListAnomalyReason = () => {
  return axios.get(`${API_BASE_URL}/list/anomalyreason`);
};

export const getListAction = () => {
    return axios.get(`${API_BASE_URL}/list/action`);
};

export const getListAnomalyLevel = () => {
  return axios.get(`${API_BASE_URL}/list/anomalyLevel`);
};

export const getListAnomaly = () => {
  return axios.get(`${API_BASE_URL}/anomaly`);
};

export const getAnomalyDetail = id => {
  return axios.get(`${API_BASE_URL}/anomaly/${id}`);
};

// export const createItem = (itemData) => {
//   return axios.post(`${API_BASE_URL}/items`, itemData);
// };

// export const updateItem = (itemId, itemData) => {
//   return axios.put(`${API_BASE_URL}/items/${itemId}`, itemData);
// };
