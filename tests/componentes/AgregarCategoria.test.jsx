import { fireEvent, render, screen } from '@testing-library/react';
import { AgregarCategoria } from '../../src/componentes';

describe('Pruebas en componentes/AgregarCategoria', () => {
    const textoBusqueda = 'Gokú con cola';
    test('Debe cambiar el valor en la caja de texto', () => {
        const onAgregarCategoria = jest.fn();
        render( <AgregarCategoria onAgregarCategoria={ onAgregarCategoria } /> );
        const input = screen.getByRole('search');
        fireEvent.input(input, {target: {value: textoBusqueda}});
        expect(input.value).toBe(textoBusqueda);
    });
    test('Debe llamar onAgregarCategoria cuando se Submité', () => {
        const onAgregarCategoria = jest.fn();
        render( <AgregarCategoria onAgregarCategoria={ onAgregarCategoria } /> );
        const input = screen.getByRole('search');
        const form = screen.getByRole('form');
        fireEvent.input(input, {target: {value: textoBusqueda}});
        expect(onAgregarCategoria).not.toHaveBeenCalled();
        fireEvent.submit(form);
        expect(onAgregarCategoria).toHaveBeenCalledTimes(1);
        expect(onAgregarCategoria).toHaveBeenCalledWith(textoBusqueda, expect.any(Function), expect.any(Function));
    });
});