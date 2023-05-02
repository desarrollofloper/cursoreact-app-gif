import { GIPHY_API_KEY } from '../config';

const obtenerGifs = async ( categoria ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${ encodeURIComponent(GIPHY_API_KEY) }&q=${ encodeURIComponent(categoria) }&limit=12&rating=r`;
    const respuesta = await fetch(url);
    const { data:datos } = await respuesta.json();
    return datos;
};
export default obtenerGifs;
