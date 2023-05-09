import obtenerGifs from '../../src/utils/obtenerGifs';

describe('Pruebas en utils/obtenerGifs', () => {
    const categoria = 'Gokú con cola';
    test('Debe recibir categoría y devolver objeto con datos', async () => {
        const datosGifs = await obtenerGifs(categoria);
        // console.log(datosGifs);
        expect(datosGifs).toBeInstanceOf(Array);
        if(datosGifs.length){
            const gif = datosGifs[0];
            // console.log(gif);
            expect(gif).toBeInstanceOf(Object);
            expect(typeof gif.id).toBe('string');
        }
    });
});