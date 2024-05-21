import './App.css';

import JournalList from './components/JournalList/JournalList';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import Header from './components/Header/Header';
import Body from './layout/Body/Body';
import LeftPanel from './layout/LeftPanel/LeftPanel';
import { useLocalStorage } from './hooks/useLocalStorage.hook';
import { UserContextProvider } from './context/user.context';
import { useState } from 'react';

// перенесено в localstorage
// const INITIAL_DATA = [
//     {
//         "id": 1,
//         "title": "Подготовка к обновлению курсов",
//         "post": "Думал, что очень много времени...",
//         "date": new Date(),
//     },
//     {
//         "id": 2,
//         "title": "Поход в горы",
//         "post": 'Горные походы открывают удивительные природные ландшафты',
//         "date": new Date(),
//     },
// ];

function mapItems(items) {
    if (!items) {
        return [];
    }
    return items.map((i) => ({
        ...i,
        date: new Date(i.date),
    }));
}

function App() {
    // прописали динамические переменные, чтобы иметь возможность быстро их менять
    // сохранить текущее состояние - оно сохраняется, как INITIAL_DATA
    const [items, setItems] = useLocalStorage(['data']);
    const [selectedItem, setSelectedItem] = useState(null);

    // установка нового состояния. На входе новый массив, затем берется новое состояние, где есть функция, берущая старое значние (oldItem) и добавляющее новое значние к уже существующему
    const addItem = (item) => {
        if (!item.id) {
            // создание item
            setItems([
                ...mapItems(items),
                {
                    ...item,
                    date: new Date(item.date),
                    id:
                        // adding keys to items
                        items.length > 0
                            ? Math.max(...items.map((i) => i.id)) + 1
                            : 1,
                },
            ]);
            // обновление item
        } else {
            setItems([
                ...mapItems(items).map((i) => {
                    if (i.id === item.id) {
                        return {
                            ...item,
                        };
                    }
                    return i;
                }),
            ]);
        }
    };

    const deleteItem = (id) => {
        setItems([...items.filter((i) => i.id !== id)]);
    };

    return (
        <UserContextProvider>
            <div className="app">
                <LeftPanel>
                    <Header />
                    <JournalAddButton clearForm={() => setSelectedItem(null)} />
                    <JournalList
                        items={mapItems(items)}
                        setItem={setSelectedItem}
                    />
                </LeftPanel>
                <Body>
                    <JournalForm
                        onSubmit={addItem}
                        data={selectedItem}
                        onDelete={deleteItem}
                    />
                </Body>
            </div>
        </UserContextProvider>
    );
}

export default App;
