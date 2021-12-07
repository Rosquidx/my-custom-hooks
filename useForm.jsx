import  { useState } from 'react'

const useForm = (initialState = {}) => {

    const [valores, setValores] = useState(initialState);

    const handleInputChange = ({target}) => {
        setValores({
            ...valores,
            [target.name]: target.value.trim(),
          });
    }

    return [valores, handleInputChange];
    
}

export default useForm
