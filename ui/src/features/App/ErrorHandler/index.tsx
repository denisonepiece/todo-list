import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../../api';

function ErrorHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    api.interceptors.response.use(undefined, (error) => {
      switch (error.response?.status) {
        case 401:
          localStorage.removeItem('access_token');
          navigate('/login');
      }
    });
  }, [navigate]);

  return <></>;
}

export default ErrorHandler;
