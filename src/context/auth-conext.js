import React from "react";

const authContext = React.createContext({
  authenticated: false,
  login: () => {},
});
/***
 * globally available js object
 */

export default authContext;
