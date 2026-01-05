import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ==================== RESERVATIONS ====================

export const createReservation = async (reservationData) => {
  try {
    const response = await apiClient.post('/reservations', {
      name: reservationData.name,
      email: reservationData.email,
      phone: reservationData.phone || null,
      date: reservationData.date,
      time: reservationData.time,
      guests: reservationData.guests,
      special_requests: reservationData.specialRequests || null,
    });
    return response.data;
  } catch (error) {
    console.error('Error creating reservation:', error);
    throw error;
  }
};

export const getReservations = async () => {
  try {
    const response = await apiClient.get('/reservations');
    return response.data;
  } catch (error) {
    console.error('Error fetching reservations:', error);
    throw error;
  }
};

// ==================== MENU ====================

export const getMenuItems = async (category = null) => {
  try {
    const params = category ? { category } : {};
    const response = await apiClient.get('/menu', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching menu items:', error);
    throw error;
  }
};

export const getSignatureDishes = async () => {
  try {
    const response = await apiClient.get('/menu/signature');
    return response.data;
  } catch (error) {
    console.error('Error fetching signature dishes:', error);
    throw error;
  }
};

export const getMenuCategories = async () => {
  try {
    const response = await apiClient.get('/menu/categories');
    return response.data;
  } catch (error) {
    console.error('Error fetching menu categories:', error);
    throw error;
  }
};

// ==================== WEATHER ====================

export const getWeather = async () => {
  try {
    const response = await apiClient.get('/weather');
    return response.data;
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
};

// ==================== CONTACT ====================

export const submitContact = async (contactData) => {
  try {
    const response = await apiClient.post('/contact', contactData);
    return response.data;
  } catch (error) {
    console.error('Error submitting contact:', error);
    throw error;
  }
};

// ==================== HEALTH CHECK ====================

export const healthCheck = async () => {
  try {
    const response = await apiClient.get('/health');
    return response.data;
  } catch (error) {
    console.error('API health check failed:', error);
    throw error;
  }
};

export default apiClient;
