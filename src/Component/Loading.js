import {useState, useEffect} from "react";
import { loginUser, useAuthState, useAuthDispatch } from '../Context'


function Loading(props) {
    const dispatch = useAuthDispatch()
    const { loading, errorMessage, userDetails } = useAuthState() //read the values of loading and errorMessage from context


    useEffect(() => {
        loginUser(dispatch).then( response => {
            if (!response) {
                return
            }
            //props.history.push('/dashboard')
        })
    }, [dispatch]);

    return (
        <div>
            <div className="demo-only demo--inverse" style={{height:"6rem",position:"relative"}}>
                <div role="status" className="slds-spinner slds-spinner_medium slds-spinner_brand">
                    <span className="slds-assistive-text">Loading</span>
                    <div className="slds-spinner__dot-a"></div>
                    <div className="slds-spinner__dot-b"></div>
                </div>
            </div>
            { errorMessage &&
            <div className="slds-scoped-notification slds-media slds-media_center slds-theme_error" role="status">
                <div className="slds-media__figure">
                    <span className="slds-icon_container slds-icon-utility-error" title="error">
                          <svg className="slds-icon slds-icon_small" aria-hidden="true">
                          </svg>
                          <span className="slds-assistive-text">Erreur</span>
                    </span>
                </div>
                <div className="slds-media__body">
                    <p>{errorMessage}</p>
                </div>
            </div>
            }
        </div>
    )
}

export default Loading
