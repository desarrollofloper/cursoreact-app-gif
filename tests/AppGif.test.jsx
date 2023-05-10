import { fireEvent, render, screen, within } from '@testing-library/react';
import { AppGif } from '../src/AppGif';

describe('Pruebas en AppGif', () => {
    const categoria = 'Gokú Bulma';
    const categoriaNoValida = 'Fo';
    const categoria2 = 'otra cosa aquí';
    test('Debe contener o no ciertos componentes según la ruta crítica', () => {
        render(<AppGif />);
        const header = screen.getByTestId('header');
        expect(within(header).queryAllByTestId('AgregarCategoria').length).toBe(1);
        const main = screen.getByTestId('main');
        expect(within(main).queryAllByTestId('CategoriaGrid').length).toBe(0);

        /* Al enviar form con busqueda vacía, no deberían aún haber CategoriaGrid */
        const formBuscador = within(header).getByTestId('AgregarCategoria');
        fireEvent.submit(formBuscador);
        expect(within(main).queryAllByTestId('CategoriaGrid').length).toBe(0);

        /* Al enviar form con busqueda válida, debería haber 1 CategoriaGrid, y el input del buscador resetearse */
        const inputBuscador = within(within(header).getByTestId('AgregarCategoria')).getByRole('search');
        fireEvent.change(inputBuscador, {target: {value: categoria}});
        fireEvent.submit(formBuscador);
        expect(within(main).queryAllByTestId('CategoriaGrid').length).toBe(1);
        expect(inputBuscador.value).toBe('');

        /* Al enviar form con busqueda muy corta, debería haber aún 1 CategoriaGrid, y el input del buscador preservar ese valor buscado */
        fireEvent.change(inputBuscador, {target: {value: categoriaNoValida}});
        fireEvent.submit(formBuscador);
        expect(within(main).queryAllByTestId('CategoriaGrid').length).toBe(1);
        expect(inputBuscador.value).toBe(categoriaNoValida);

        /* Al enviar form con busqueda válida, debería haber ahora 2 CategoriaGrid, y el input del buscador resetearse */
        fireEvent.change(inputBuscador, {target: {value: categoria2}});
        fireEvent.submit(formBuscador);
        expect(within(main).queryAllByTestId('CategoriaGrid').length).toBe(2);
        expect(inputBuscador.value).toBe('');

        /* Al enviar form con busqueda válida que ya se había realizado, debería haber aún 2 CategoriaGrid, y el input del buscador resetearse */
        fireEvent.change(inputBuscador, {target: {value: categoria}});
        fireEvent.submit(formBuscador);
        expect(within(main).queryAllByTestId('CategoriaGrid').length).toBe(2);
        expect(inputBuscador.value).toBe('');
    });
});