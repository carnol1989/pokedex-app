import { useState } from 'react';

export const useForm = ( initialValueState = {} ) => {    
    const [formValue, setForm] = useState(initialValueState)

    const handleInput = ({ target }) => {
        setForm({
            ...formValue,
            [target.name]: target.value
        })
    }
    const setInitialForm = () => {
        setForm(initialValueState)
    }
    
    return [formValue, handleInput, setInitialForm]
}

export default useForm