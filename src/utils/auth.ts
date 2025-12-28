export const isLoggedIn = () => {
    return sessionStorage.getItem("isAuth") === "true";
  };
  
  export const loginUser = () => {
    sessionStorage.setItem("isAuth", "true");
  };
  
  export const logoutUser = () => {
    sessionStorage.removeItem("isAuth");
  };
  