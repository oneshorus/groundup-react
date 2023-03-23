import axios from 'axios';

import {API_BASE_URL} from './Config'


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

export const updateAnomaly = (id, anomaly) => {
  return axios.post(`${API_BASE_URL}/anomaly/${id}`, anomaly);
};
