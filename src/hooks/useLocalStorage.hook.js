import { useState, useEffect } from 'react';

// кастомный хук по сохранению значений в local storage

// key - ключ, который перейдет как состояние
export function useLocalStorage(key) {
    const [data, setData] = useState();

    // читаем данные из localstorage и рендерим 1 раз при открытии приложения
    useEffect(() => {
        const res = JSON.parse(localStorage.getItem(key));
        if (res) {
            setData(res);
        }
    }, []);

    // принимает data и сохраняет в LS
    const saveData = (newData) => {
        localStorage.setItem(key, JSON.stringify(newData));
        setData(newData);
    };

    return [data, saveData];
}
