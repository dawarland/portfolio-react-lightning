import React, {useMemo, useReducer, useContext} from 'react';


//IMPORT REDUCER, INITIAL STATE AND ACTION TYPES
import {AuthReducer, initialState} from "./Context/reducer";

// CONFIG KEYS [Storage Keys]===================================
export const TOKEN_KEY = 'token';
export const USER_KEY = 'user';
export const keys = [TOKEN_KEY, USER_KEY];


const AuthContext = React.createContext();

function AuthProvider(props) {
    const [state, dispatch] = useReducer(AuthReducer, initialState || {});

    // Get Auth state
    const getSFDX = async () => {
        try {
            return ;
        } catch (error) {
            throw new Error(error)
        }
    };

    const value = useMemo(() => {
        return {state, getSFDX};
    }, [state]);

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    );
}

const useAuth = () => useContext(AuthContext);
export { AuthContext, useAuth }
export default AuthProvider;
