import axios from "axios";
import { useContext, createContext, useReducer } from "react";
import { reducer } from "../reducers/authReducer";
import { useNavigate, useLocation } from "react-router-dom";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  let location = useLocation();
  let navigate = useNavigate();
  const intialState = {
    userName: "",
    token: null,
    email: "",
    password: "",
    isLoggedIn: false,
    userNotFound: false,
    userExists: false,
  };
  const [userState, userDispatch] = useReducer(reducer, intialState);

  // Login Function

  const loginUser = async (email, password) => {
    if (email !== "" && password !== "") {
      try {
        let response = await axios.post("/api/auth/login", {
          email: email,
          password: password,
        });

        const { data } = response;
        const { encodedToken, foundUser } = data;

        if (response.status === 200) {
          userDispatch({
            type: "UPDATE_TOKEN_AND_USER_DATA",
            payload: { encodedToken, foundUser },
          });
          if (location.state) {
            navigate(location.state.from.pathname);
          } else {
            navigate("/videolisting");
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  // Sign up Function

  const signupUser = async (firstName, lastName, email, password) => {
    if (firstName !== "" && lastName !== "" && email !== "" && password) {
      try {
        const response = await axios.post("/api/auth/signup", {
          firstName,
          lastName,
          email,
          password,
        });
        if (response.status === 201) {
          const { data } = response;
          const { encodedToken, createdUser } = data;
          userDispatch({
            type: "UPDATE_TOKEN_AND_USER_DATA",
            payload: { encodedToken, foundUser: createdUser },
          });
          navigate("/");
        }
      } catch (error) {
        console.log(error);
        if (error.response.status === 422) {
          userDispatch({ type: "USER_ALREADY_EXISTS" });
        }
      }
    }
  };
  const logoutUser = () => {
    navigate("/videolisting");
    userDispatch({ type: "USER_LOGOUT" });
  };
  return (
    <AuthContext.Provider
      value={{ ...userState, userDispatch, loginUser, signupUser, logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
