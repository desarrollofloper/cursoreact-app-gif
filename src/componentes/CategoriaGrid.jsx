// import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { CategoriaGridItem } from './CategoriaGridItem';
import { useObtenerGifs } from '../hooks/useObtenerGifs';

export const CategoriaGrid = ({ categoria }) => {
    const {gifs, cargandoGifs} = useObtenerGifs(categoria);
    const backgroundImage = !cargandoGifs && gifs.length && `url(${ gifs[0].images.original.url })`;
    console.log(gifs);
    return (
        <div className='CategoriaGrid' style={{ backgroundImage }}>
            <h2>{ categoria }</h2>
            <div className='mt-2'>
                {
                    cargandoGifs
                    ? <div>Cargando<FontAwesomeIcon icon={ faSpinner } spin className='ml-2' /></div>
                    : (
                        gifs.length
                        ? <div className="contenedorCategoriaGridItem">{ gifs.map(gif => ( <CategoriaGridItem key={ gif.id } gif={ gif } /> )) }</div>
                        : <div>Sin coincidencias</div>
                    )
                }
            </div>
        </div>
    )
}

// CategoriaGrid.propTypes = {
//     categoria: PropTypes.string.isRequired,
// }
