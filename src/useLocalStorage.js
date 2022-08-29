import { useEffect, useState } from 'react';
const getSaved = (key, init) => {
    const savedValue = JSON.parse(localStorage.getItem(key));
    if (savedValue) return savedValue
    if (init instanceof Function) return init()
    return init
}
const useLocalStorage = (key, init) => {
    const [value, setValue] = useState(() => {
        return getSaved(key, init)
    });
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue]
}

export default useLocalStorage