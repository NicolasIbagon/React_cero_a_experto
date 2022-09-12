import { useState } from "react";


export const AddCategory = (props) => {


  const [inputValue, setInputValue] = useState('One Punch')


  const onInputChange = (event) =>{
    setInputValue(event.target.value);
  }

  const onSubmit = (event) =>{




    event.preventDefault();
    if(inputValue.trim().length <=1) return;

    
    props.onNewCategory(event.target.value);

    console.log(inputValue);

    //setCategories( categories =>  [inputValue, ...categories])
    props.onNewCategory(inputValue.trim());
    setInputValue('')
    }

  return (

    <form onSubmit={(event)=> onSubmit(event)}>
    <input  
        type="text" 
        placeholder="Buscar gifs"

        value={inputValue}
        onChange={(event) => onInputChange(event)}
    />
    </form>
  )
}
