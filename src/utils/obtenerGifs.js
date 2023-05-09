import { GIPHY_API_KEY } from '../config';

const obtenerGifs = async ( categoria ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${ encodeURIComponent(GIPHY_API_KEY) }&q=${ encodeURIComponent(categoria) }&limit=12&rating=r`;
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();
    const gifs = data.map(gif => ({
        id: gif.id,
        url: gif.url,
        imagen_url: gif.images.fixed_height_small.url,
        titulo: gif.title,
        imagen_original_url: gif.images.original.url,
    }));
    return gifs;
};
export default obtenerGifs;
