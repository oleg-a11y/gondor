import axios from "axios";

const { VITE_BASE } = import.meta.env;

export const apiClient = axios.create({
  baseURL: VITE_BASE,
});
