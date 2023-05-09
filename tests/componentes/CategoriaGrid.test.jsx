import { render, screen } from '@testing-library/react';
import { CategoriaGrid } from '../../src/componentes';
import { useObtenerGifs } from '../../src/hooks/useObtenerGifs';

jest.mock('../../src/hooks/useObtenerGifs');

describe('Pruebas en componentes/CategoriaGrid', () => {
    const categoria = 'Gokú Bulma';
    test('Debe mostrar el loading al principio', () => {
        useObtenerGifs.mockReturnValue({
            gifs: [],
            cargandoGifs: true,
        });
        render(<CategoriaGrid categoria={ categoria } />);
        // screen.debug();
        expect(screen.getByTestId('indicador-carga'));
        expect(screen.getByRole('heading', {level: 2}).textContent.trim()).toBe(categoria);
    });
    test('Debe de mostrar elementos si gifs se devuelve alguno', () => {
        useObtenerGifs.mockReturnValue({
            gifs: [
                {
                    id: 'foobar1',
                    url: 'https://foo.bar',
                    imagen_url: 'https://foo.bar/',
                    titulo: 'Foou',
                    imagen_original_url: 'https://foo.bar/',
                },
                {
                    id: 'foobar2',
                    url: 'https://foo.bar',
                    imagen_url: 'https://foo.bar/',
                    titulo: 'Baaar',
                    imagen_original_url: 'https://foo.bar/',
                },
            ],
            cargandoGifs: false,
        });
        const rendered = render(<CategoriaGrid categoria={ categoria } />);
        // expect(screen.getByTestId('bloque-gifs'));
        expect(rendered.getByTestId('bloque-gifs'));
        expect(rendered.baseElement.querySelectorAll('[data-testid="bloque-no-gifs"]').length).toBe(0);
    });
    test('Debe de mostrar nota si gifs se devuelve vacío', () => {
        useObtenerGifs.mockReturnValue({
            gifs: [],
            cargandoGifs: false,
        });
        const rendered = render(<CategoriaGrid categoria={ categoria } />);
        // expect(screen.getByTestId('bloque-no-gifs'));
        expect(rendered.getByTestId('bloque-no-gifs'));
        expect(rendered.baseElement.querySelectorAll('[data-testid="bloque-gifs"]').length).toBe(0);
    });
});