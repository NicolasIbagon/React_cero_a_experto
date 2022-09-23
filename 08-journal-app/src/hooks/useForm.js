import { useEffect, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );

    const [formValidation, setFormValidation] = useState({});



    useEffect(() => {
      first
    
      return () => {
        second
      }
    }, [third])
    

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = () =>{
        
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}