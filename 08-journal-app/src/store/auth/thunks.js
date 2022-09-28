import { async } from "@firebase/util";
import { signInWithEmailAndPassword } from "firebase/auth";
import { loginUserWithEmailPassword, logoutFireBase, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { clearNotesLogout } from "../journal";
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = (email, password)=>{
    return async(dispatch) =>{
        dispatch(checkingCredentials());
    }
}


export const startGoogleSigIn = ()=>{
    return async(dispatch) =>{
        dispatch(checkingCredentials());

        const result = await signInWithGoogle();

            if(!result.ok) return dispatch(logout(result.errorMessage));

            
            dispatch(login(result))


    }
}


export const startCreatingUserWithEmailPassword = ({email, password, displayName})=>{
    return async(dispatch) =>{
        dispatch(checkingCredentials())

        const {ok, uid, photoURL, errorMessage} = await registerUserWithEmailPassword({email, password, displayName});

        if(!ok) return dispatch(logout({errorMessage}));

        dispatch(login({uid, displayName, email, photoURL}));




    }
}

export const startLoginWIthEmailPassowrd = ({email, password})=>{
    return async(dispatch) =>{
        dispatch(checkingCredentials())

        const {ok, uid, photoURL, errorMessage} = await loginUserWithEmailPassword({email, password})

        if(!ok) return dispatch(logout({errorMessage}));

        dispatch(login({uid, displayName, email, photoURL}))
    }
}


export const startLogout = () =>{
    return async(dispatch)=>{

        await logoutFireBase();
        
        dispatch(clearNotesLogout());
        dispatch(logout({}));

    }
} 