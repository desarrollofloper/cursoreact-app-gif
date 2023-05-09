import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { CategoriaGridItem } from './CategoriaGridItem';
import { useObtenerGifs } from '../hooks/useObtenerGifs';

export const CategoriaGrid = ({ categoria }) => {
    const {gifs, cargandoGifs} = useObtenerGifs(categoria);
    const backgroundImage = !cargandoGifs && gifs.length && `url(${ gifs[0].imagen_original_url })`;
    return (
        <div className='CategoriaGrid' style={{ backgroundImage }}>
            <h2>{ categoria }</h2>
            <div className='mt-2'>
                {
                    cargandoGifs
                    ? <div data-testid="indicador-carga">Cargando<FontAwesomeIcon icon={ faSpinner } spin className='ml-2' /></div>
                    : (
                        gifs.length
                        ? <div data-testid="bloque-gifs" className="contenedorCategoriaGridItem">{ gifs.map(gif => ( <CategoriaGridItem key={ gif.id } gif={ gif } /> )) }</div>
                        : <div data-testid="bloque-no-gifs">Sin coincidencias</div>
                    )
                }
            </div>
        </div>
    )
}

CategoriaGrid.propTypes = {
    categoria: PropTypes.string.isRequired,
}
