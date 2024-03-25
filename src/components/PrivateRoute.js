// src/components/PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
        //   <Navigate to="/login" replace />
        <Navigate to={{pathname:'/login',
         state: {from: props.location},
        }}
        />
        )
      }
    />
  );
};

export default PrivateRoute;




// src/components/PrivateRoute.js
// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';
// import { isAuthenticated } from '../utils/auth';

// const PrivateRoute = ({ children, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         isAuthenticated() ? (
//           children
//         ) : (
//           <Navigate
//             to={{
//               pathname: '/login',
//               state: { from: location },
//             }}
//           />
//         )
//       }
//     />
//   );
// };

// export default PrivateRoute;