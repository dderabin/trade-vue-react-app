import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks'
import './../../assets/css/login-styles.scss';

export const DefaultLayout = ({ children }) => {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/favourites')
    }
  }, [isAuthenticated, navigate])
  return <>{children}</>;
};
