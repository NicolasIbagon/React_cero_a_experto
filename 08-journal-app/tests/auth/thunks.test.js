import { CheckOutlined } from "@mui/icons-material"
import { loginUserWithEmailPassword, logoutFireBase, signInWithGoogle } from "../../src/firebase/providers"
import { checkingCredentials, login, logout } from "../../src/store/auth/authSlice"
import { checkingAuthentication, startGoogleSigIn, startLoginWIthEmailPassowrd, startLogout } from "../../src/store/auth/thunks"
import { clearNotesLogout } from "../../src/store/journal"
import { demoUser } from "../fixtures/authFixtures"

jest.mock('../../../src/firebase/providers')


describe('Pruebas sobre thunks de auth', () => { 

    const dispatch = jest.fn()


    beforeEach(() => jest.clearAllMocks());
    test('Debe de invocar el checkingCredentials', async() => { 
        
        
        await checkingAuthentication()(dispatch);
        
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());

     })


    test('startGiigkeSigIn debe de llamar checkingCredentiasl y login - Exito', async() => { 
        const loginData = {ok : true, ...demoUser}
        await signInWithGoogle.mockResolvedValue(loginData);


        await startGoogleSigIn()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData))
     })


     test('startGiigkeSigIn debe de llamar checkingCredentiasl y login - Error', async() => { 
        const loginData = {ok : false, errorMessage: 'Un error en Google'}
        await signInWithGoogle.mockResolvedValue(loginData);


        await startGoogleSigIn()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));


     })


    test('startLoginWithEmailPassword debe de llamar checkinagCredentials y login - Exito', async() => { 

        const loginData = {ok:true, ...demoUser};
        const formData = {email : demoUser.email, password: '123456'};

        await loginUserWithEmailPassword.mockResolvedValue(loginData);


        await startLoginWIthEmailPassowrd(formData)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        
        expect(dispatch).toHaveBeenCalledWith(login(loginData));

     })

     test('startLogout debe de llamar logoutFirebase, clearNotes y logout', async() => { 

        await startLogout()(dispatch);


        expect(logoutFireBase).toHaveBeenCalled();

        expect(dispatch).toHaveBeenCalledWith(clearNotesLogout())

        expect(dispatch).toHaveBeenCalledWith(logout());

      })
 })