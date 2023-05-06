import { render } from '@testing-library/react';
import { CategoriaGridItem } from '../../src/componentes';

describe('Pruebas en CategoriaGridItem', () => {
    test('Snapshot', () => {
        const gif = {
            url: '',
            imagen_url: '',
            titulo: '',
        };
        const { container } = render( <CategoriaGridItem gif={ gif } /> );
        expect(container).toMatchSnapshot();
    });
});