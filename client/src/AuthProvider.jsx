import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

// Create the Auth Context
const AuthContext = createContext();

// AuthProvider Component
export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmailg] = useState(null); // Add user state
    const [name, setName] = useState(null); // Add user state
    const [age, setAge] = useState(null); // Add user state

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, email, setEmailg ,name , setName,age, setAge }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom Hook to use Auth Context
export const useAuth = () => {
    return useContext(AuthContext);
};

// PropTypes validation
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
