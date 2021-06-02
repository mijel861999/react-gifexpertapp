import React, { useState} from 'react';
import {AddCategory} from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    // const categories = ['One Punch Man', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch Man']);

    // const handleAdd = () =>{
    //     // setCategories([...categories, 'Naruto']);
    //     // setCategories(['Naruto', ...categories]);
    //     setCategories( cats => [...cats, 'Naruto']);
    // }

    return (
        <>
            <h2>Gif Expert App</h2>
            <hr />

            <AddCategory 
                setCategories={setCategories}
            />
            {/* <button onClick={ handleAdd }>Agregar</button> */}

            <ol>
                { categories.map( (category) => (
                    <GifGrid
                        key={category} 
                        category = {category}
                    />
                ))
                }
            </ol>
        </>
    )
}
