import { render, screen } from '@testing-library/react';
import { CategoriaGridItem } from '../../src/componentes';

describe('Pruebas en componentes/CategoriaGridItem', () => {
    const gif = {
        url: 'https://foo.bar',
        imagen_url: 'https://foo.bar/',
        titulo: 'Foou',
    };
    test('Match Snapshot', () => {
        const { container } = render( <CategoriaGridItem gif={ gif } /> );
        expect(container).toMatchSnapshot();
    });
    test('Debe renderizar elementos del parámetro', () => {
        render( <CategoriaGridItem gif={ gif } /> );
        const img = screen.getByRole('img');
        expect(img.src).toBe(gif.imagen_url);
        expect(img.title).toBe(gif.titulo);
    });
});