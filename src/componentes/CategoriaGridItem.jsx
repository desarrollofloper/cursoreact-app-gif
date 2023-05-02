export const CategoriaGridItem = ({gif}) => {
    return (
        <a className='CategoriaGridItem' href={ gif.url } target='_blank'>
            <img src={ gif.images.fixed_height_small.url } title={ gif.title } />
            <span className='detalleItem'>
                <span>{ gif.title }</span>
            </span>
        </a>
    )
}
