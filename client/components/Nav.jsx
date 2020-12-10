import React from "react";
import { isAuthenticated } from "authenticare/client";
import { Link } from "react-router-dom";
import { logOff } from "authenticare/client/auth";
import { changeNavState, changePage } from "../actions";
import { connect } from "react-redux";
import { IfAuthenticated, IfNotAuthenticated } from "./Authenticated";

import { Tabs, Menu } from "grommet";


function Nav({ dispatch, username }) {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <IfAuthenticated>
          <Link to="#" onClick={logOff}>
            Log off
          </Link>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <Link to="/Register">Register</Link>
          <Link to="/Login">Sign in</Link>
        </IfNotAuthenticated>
      </div>
    </>
  );
}

// removed for now
// {isAuthenticated ? (
//   <>
//     <Tabs>
//       <Link to="/">Home</Link>
//       <Link to="/UserProfile/:id">User Profile</Link>
//        auth issues trying to load the user profile perhaps due to id not being good?*
//       <Link to="/Events">Events</Link>
//       <Link to="/" onClick={() => logOffHandler()}>
//         Logout
//       </Link>
//     </Tabs>
//   </>
// ) : (
//   <>
//     <Link to="/">Home</Link>
//     <Link to="/Login">Log in</Link>
//     <Link to="/Register">Register</Link>
//   </>
// )}

//             <Link to="/" onClick={() => logout()}>
//               Logout
//             </Link>
function mapStateToProps(state) {
  return {
    username: state.createUser.username,
  };
}

export default connect(mapStateToProps)(Nav);

//__________________________________________
// import React from "react";
// import { connect } from "react-redux";
// import { Link, Redirect } from "react-router-dom";
// import { logoutUser } from "../actions/auth";
// import BackLink from "./BackLink";
// import Home from "./Home";
// import {HashRouter as Router, Route, Link} from 'react-router-dom'

// class Nav extends React.Component {
//   back = () => {
//     return <Redirect to="/" />
//   }
//   render() {
//     const { auth, logout } = this.props;
//     return (
//       <div>

//         {auth.isAuthenticated ? (
//           <>
//             <Link to="/">Home</Link>
//             <Link to="/Logout">Scrapbook</Link>
//             <Link to="/profile">Profile</Link>
//             <Link to="/" onClick={() => logout()}>
//               Logout
//             </Link>
//             <BackLink
//               destination='/'
//             />
//           </>
//         ) : (
//           <>
//           <div>
//               <h1>Encounters of the bird kind...</h1>
//               <h5>Register to get close.</h5>
//           </div>
//             <Link to="/login">Login</Link>
//             <Link to="/register">Register</Link>
//           </>
//         )}
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     logout: () => {
//       const confirmSuccess = () => ownProps.history.push("/");
//       dispatch(logoutUser(confirmSuccess));
//     },
//   };
// };

// const mapStateToProps = ({ auth }) => {
//   return {
//     auth,
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Nav);
