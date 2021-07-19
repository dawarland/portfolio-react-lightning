import { createContext, useContext, useReducer } from 'react';
import combineReducers from 'react-combine-reducers'
import { initialState, AuthReducer, initialQueryState, QueryReducer } from './reducer';

const AuthStateContext = createContext({});
const AuthQueryContext = createContext({});
const AuthDispatchContext = createContext();

export function useAuthState() {
    const context = useContext(AuthStateContext);
    if (context === undefined) {
        throw new Error("useAuthState must be used within a AuthProvider");
    }

    return context;
}

export function useQueryState() {
    const context = useContext(AuthStateContext);
    if (context === undefined) {
        throw new Error("useAuthState must be used within a AuthProvider");
    }

    return context;
}

export function useAuthDispatch() {
    const context = useContext(AuthDispatchContext);
    if (context === undefined) {
        throw new Error('useAuthDispatch must be used within a AuthProvider');
    }

    return context;
}

export const AuthProvider = ({ children }) => {
    //const [user, dispatch] = useReducer(AuthReducer, initialState);
    const [rootReducerCombined, initialStateCombined] = combineReducers({ auth: [AuthReducer, initialState], query: [QueryReducer, initialQueryState] });
    const [store, dispatch] = useReducer(rootReducerCombined, initialStateCombined);

    /*return (
        <AuthStateContext.Provider value={user}>
            <AuthDispatchContext.Provider value={authDispatch}>
                {children}
            </AuthDispatchContext.Provider>
        </AuthStateContext.Provider>
    );*/
    return (
        <AuthStateContext.Provider value={store}>
            <AuthDispatchContext.Provider value={dispatch}>
                {children}
            </AuthDispatchContext.Provider>
        </AuthStateContext.Provider>
    );
};

