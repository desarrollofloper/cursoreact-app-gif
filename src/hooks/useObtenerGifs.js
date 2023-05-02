import { useState, useEffect } from 'react';
import obtenerGifs from '../utils/obtenerGifs';

export const useObtenerGifs = (categoria) => {
    const [cargandoGifs, setCargandoGifs] = useState(true);
    const [gifs, setGifs] = useState([]);

    const obtenerGifsSyncCB = async () => {
        const gifs = await obtenerGifs(categoria);
        setGifs(gifs);
        setCargandoGifs(false);
    }
    
    useEffect(() => {
        obtenerGifsSyncCB();
        // obtenerGifs(categoria).then((datos) => {
        //     setGifs(datos);
        // });
    }, []);

    return { gifs, cargandoGifs };
}