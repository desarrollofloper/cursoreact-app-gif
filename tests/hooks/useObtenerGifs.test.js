import { renderHook, waitFor } from '@testing-library/react';
import { useObtenerGifs } from '../../src/hooks/useObtenerGifs';

describe('Pruebas en hooks/useObtenerGifs', () => {
    const categoria = 'Gokú Bulma';
    // test('Debe de regresar el estado inicial', () => {
    //     const { result } = renderHook(() => useObtenerGifs(categoria));
    //     const { gifs, cargandoGifs } = result.current;
    //     expect(gifs.length).toBe(0);
    //     expect(cargandoGifs).toBe(true);
    // });
    test('Debe de retornar desactivar cargando eventualmente', async () => {
        const renderedHook = renderHook(() => useObtenerGifs(categoria));
        expect(renderedHook.result.current.cargandoGifs).toBe(true);
        await waitFor(
            () => expect(renderedHook.result.current.cargandoGifs).toBe(false),
        );
        expect(renderedHook.result.current.cargandoGifs).toBe(false);
    });
});