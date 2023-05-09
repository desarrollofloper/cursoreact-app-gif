import PropTypes from 'prop-types';

export const CategoriaGridItem = ({gif}) => {
    return (
        <a className='CategoriaGridItem' href={ gif.url } target='_blank'>
            <img src={ gif.imagen_url } title={ gif.titulo } />
            { gif.titulo ? (
                <span className='detalleItem'>
                    <span>{ gif.titulo }</span>
                </span>
            ) : <></> }
        </a>
    )
}

CategoriaGridItem.propTypes = {
    gif: PropTypes.shape({
        // id: PropTypes.string,
        url: PropTypes.string.isRequired,
        imagen_url: PropTypes.string.isRequired,
        titulo: PropTypes.string,
        // imagen_original_url: PropTypes.string,
    }),
}
