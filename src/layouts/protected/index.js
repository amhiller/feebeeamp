import React, { useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { Navigate, Route, useNavigate } from 'react-router-dom';

const protectedRoute = (Comp, route='/authentication/sign-in') => (props) => {
  let navigate = useNavigate();
  
  async function checkAuthState() {
    try {
      await Auth.currentAuthenticatedUser()
    } catch (err) {
      navigate(route)
      console.log(err);
    }
  }

  useEffect(() => {
    checkAuthState()
  })

  return <Comp {...props} />
}

export default protectedRoute;