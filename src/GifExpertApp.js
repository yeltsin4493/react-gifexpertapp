import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
    // const [categories, setcategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);
    const [categories, setcategories] = useState(['One Punch']);

    // const Agregar = () => {
    //     // setcategories([...categories, 'hola'])
    //     setcategories(cats => [...cats, 'hola'])
    //     console.log(categories)
    // }
    // console.log(categories)

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setcategories={setcategories} />
            {/* KZlYJTL5Q3z1NW1II1P2ll3wkx2crsFq */}
            <hr />
            {/* <button onClick={Agregar}>Agregar</button> */}
            <ol>
                {
                    categories.map(category =>
                        <GifGrid 
                        key={category}
                        category={category} />
                    )
                }
            </ol>
        </>
    );
};
