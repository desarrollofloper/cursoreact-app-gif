import { useState } from 'react';
import { AgregarCategoria, CategoriaGrid } from './componentes';
import { GIPHY_API_KEY } from './config';
import './assets/css/AppGif.css';

export const AppGif = () => {
    // const [categoriaBusqueda, setCategoriaBusqueda] = useState('');
    const [categorias, setCategorias] = useState([]);

    const handleAgregarCategoria = (categoria, onSuccess, onError) => {
        console.log(categoria);
        if(categoria.trim().length < 5){
            onError();
            return;
        }
        if((categorias.filter(item => item.toLowerCase() == categoria.toLowerCase())).length){
            onError('duplicado');
            const categoriasReordenadas = categorias.filter(item => item.toLowerCase() != categoria.toLowerCase());
            categoriasReordenadas.unshift(categoria);
            setCategorias(categoriasReordenadas);
            return;
        }
        setCategorias([categoria, ...categorias]);
        onSuccess();
    };

    const bloqueCategoriaGrids = categorias.length ? (
        categorias.map(item => (
            <CategoriaGrid
                key={ item + '_' + (Math.random() * 1000000) }
                categoria={ item }
            />
        ))
    ) : ( <div>No has realizado alguna búsqueda.</div> );

    return (
        <>
            <header>
                <div style={{ display: 'inline-flex', alignItems: 'center', }}>
                    <h1 style={{ marginRight: '1rem', }}>App Gif</h1><span>{ GIPHY_API_KEY }</span>
                </div>
                <AgregarCategoria
                    onAgregarCategoria={ handleAgregarCategoria }
                    // setCategorias={ setCategorias }
                />
            </header>
            <main>
                <div>
                    { bloqueCategoriaGrids }
                </div>
            </main>
        </>
    );
}
