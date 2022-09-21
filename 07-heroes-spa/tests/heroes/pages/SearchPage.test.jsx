import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { Search } from "../../../src/heroes/pages/Search"


const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: ()=> mockedUseNavigate
}))

describe('Pruebas en SearchPage', () => { 

    beforeEach(()=> jest.clearAllmocks());

    test('Debe de mostrarse correctamente con valores por defecto', () => { 


        const {container} = render(
            <MemoryRouter>
                <Search/>
            </MemoryRouter>
        );

        expect(container).toMatchSnapshot();
     })


     test('Debe de mostrar a batman y el input con el valor del queryString', () => { 

        const {container} = render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Search/>
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');

        expect(input.value).toBe('batman');

        const img= screen.getByRole('img');
        expect(img.src).toContain('/assets/heroes/dc-batman.jpg');

        const alertDanger = screen.getByLabelText('alert-danger');
        expect(alertDanger.style.display).toBe('none');
      })

    test('Debe de mostrar error si no se encuentra un heroe (batman123)', () => { 
        const {container} = render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <Search/>
            </MemoryRouter>
        );
        const alertDanger = screen.getByLabelText('alert-danger');
        expect(alertDanger.style.display).toBe('none');
     })

    test('Debe de llamar al navigate a la pantalla nueva ', () => { 
        const {container} = render(
            <MemoryRouter initialEntries={['/search']}>
                <Search/>
            </MemoryRouter>
        );

        const input=screen.getByRole('textbox');
        fireEvent.change(input, {target: {name: 'searchText', value:'superman'}})

        const form = screen.getByRole('form')
        fireEvent.submit(form);


        expect(mockedUseNavigate).toHaveBeenCalledWith('?q=superman')
     })
 })