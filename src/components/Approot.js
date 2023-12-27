// Approot.js

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const root = (WrappedComponent) => {
  return (props) => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(() => {
      if (!token||token=='undefined') {
        console.log('请先登陆');
        navigate('/', { replace: true });
      }
    }, []);

    if (token) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
};

export default root;
