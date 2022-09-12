import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"


export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])


    const onAddCategory = (newCategory) =>{

        if(categories.includes(newCategory)) return;

        setCategories([newCategory,...categories] )
    }


    return (
    <>
        {/* titulo */}
        <h1>GiftExpertApp</h1>


        {/* Input */}
        <AddCategory   
            //setCategories = {setCategories} 
            onNewCategory = {event => onAddCategory(event)}

        />

            {categories.map(category=>{
                return <GifGrid key={category}
                                category = {category}
                />
            })}




        {/* Listado de Gif */}

        <button onClick={onAddCategory}>Agregar</button>
            {/* Gif Item */}

    </>
    )
}
