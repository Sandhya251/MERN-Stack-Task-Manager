// import { ReactNode } from 'react';
// import { Navigate } from 'react-router-dom';
// import { useAuth } from './AuthContext';

// const PrivateRoute = ({ children }: { children:ReactNode  }) => {
//   const { token } = useAuth();
//   return token ? children : <Navigate to="/login" />;
// };

// export default PrivateRoute;
import React, { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

type Props = {
  children: ReactElement;
};

const PrivateRoute = ({ children }: Props): ReactElement => {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
