import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const AgregarCategoria = ({ onAgregarCategoria /* setCategorias */ }) => {
    const [inputValue, setInputValue] = useState('');
    const [codigoError, setCodigoError] = useState('');
    const onInputValueChange = (event) => {
        setInputValue(event.target.value);
    };
    const onSubmitform = (event) => {
        event.preventDefault();
        // if(inputValue.trim().length < 2){
        //     return;
        // }
        onAgregarCategoria(inputValue, () => {
            setInputValue('');
            setCodigoError('');
        }, (codigo = '') => {
            setCodigoError(codigo);
            if(codigo == 'duplicado') setInputValue('');
        });
        // setCategorias(categorias => [inputValue, ...categorias]);
    };
    return (
        <form onSubmit={ onSubmitform } role="form">
            <div className='bloque-input mt-2'>
                <div style={{ display:'flex', alignItems:'center', }}>
                    <input role="search" type='search' placeholder='Buscar' className='mr-3 fs-1_4em' value={ inputValue } onChange={ onInputValueChange } required />
                    <button type='submit' className='boton botonTema'>
                        <FontAwesomeIcon icon={ faMagnifyingGlass } />
                    </button>
                </div>
                { inputValue && codigoError == 'busquedacorta' ? <div className="mt-2"><small>La entrada es muy corta.</small></div> : '' }
            </div>
        </form>
    )
}

AgregarCategoria.propTypes = {
    onAgregarCategoria: PropTypes.func.isRequired,
}