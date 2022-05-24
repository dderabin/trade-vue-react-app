import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks'
import { useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import './../../assets/css/login-styles.scss';

export const DefaultLayout = ({ children }) => {
  const navigate = useNavigate()
  const { successMessage, failMessage } = useSelector(state => state.appState);
  const alert = useAlert()
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/favourites')
    }
  }, [isAuthenticated, navigate])

  useEffect(() => {
    if (successMessage) {
      alert.success(successMessage)
    }
  }, [successMessage])

  useEffect(() => {
    if (failMessage) {
      alert.error(failMessage)
    }
  }, [failMessage])

  return <>{children}</>;
};
