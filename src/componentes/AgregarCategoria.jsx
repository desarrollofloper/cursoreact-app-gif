import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export const AgregarCategoria = ({ onAgregarCategoria /* setCategorias */ }) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputValueChange = (event) => {
        setInputValue(event.target.value);
    };
    const handleSubmitform = (event) => {
        event.preventDefault();
        console.log(event);
        if(inputValue.trim().length < 2) return;
        onAgregarCategoria(inputValue, () => { setInputValue(''); }, (codigo = '') => {
            if(codigo == 'duplicado') setInputValue('');
        });
        // setCategorias(categorias => [inputValue, ...categorias]);
    };
    return (
        <form onSubmit={ handleSubmitform }>
            <div className='bloque-input mt-2'>
                <div style={{ display:'flex', alignItems:'center', }}>
                    <input type='search' placeholder='Buscar' className='mr-3 fs-1_4em' value={ inputValue } onChange={ handleInputValueChange } required />
                    <button type='submit' className='boton botonTema'>
                        <FontAwesomeIcon icon={ faMagnifyingGlass } />
                    </button>
                </div>
            </div>
        </form>
    )
}
