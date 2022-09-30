export const initialState = {
    status: 'checking', //'checking','not-authenticated', 'authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,  
}

export const authenticatedState = {
    status: 'authenticated', //'checking','not-authenticated', 'authenticated'
    uid: '12345',
    email: 'nicolas@gmail.com',
    displayName: 'Demo user',
    photoURL: 'https://hola.jpg',
    errorMessage: null,  
}

export const NotAuthenticatedState = {
    status: 'not-authenticated', //'checking','not-authenticated', 'authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null, 
}


export const demoUser = {
    uid: 'Prueba',
    email:'prueba@gmail.com',
    displayName: 'Prueba',
    photoURL: 'https://foto.jpg'
}