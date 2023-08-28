export const setAuthToken = (token: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('authToken', token);
    }
  };
  
  export const getAuthToken = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('authToken');
    }
    return null;
  };
  
  export const removeAuthToken = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('authToken');
    }
  };
  
  export const isAuthenticated = () => {
    const token = getAuthToken();
    return token !== null;
  };

export const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
    removeAuthToken();
  };
  
  