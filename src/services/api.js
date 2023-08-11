import { API_PORT, API_URL } from "../utils/constants";

const sendDeviceRequest = async (command) => {
    const response = await fetch(`${API_URL}:${API_PORT}/${command}`, {
      method: 'POST'
    });
  
    if (!response.ok) {
      throw new Error('Request failed');
    }
  };
  
  export { sendDeviceRequest };
  