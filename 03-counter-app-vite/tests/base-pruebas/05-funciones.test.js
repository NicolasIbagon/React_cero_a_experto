import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";


describe('Pruebas en 05-funciones', () => {


    test('getUser debe retornar un objecto' ,()=>{
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };


        const user = getUser();


        expect(testUser).toStrictEqual(user);

    })


    test('getUsuarioActivo debe retornar un objeto', ()=>{

        const nombre = "Nicolas"
        const usuarioActivo = getUsuarioActivo(nombre);

        const testUsuarioActivo = {
            uid: 'ABC567',
            username: nombre
        }

        expect(testUsuarioActivo).toStrictEqual(usuarioActivo)
    
    
    })

 })