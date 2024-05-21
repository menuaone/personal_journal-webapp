import './JournalList.css';
import CardButton from '../CardButton/CardButton';
import JournalItem from '../JournalItem/JournalItem';
import { useContext, useMemo } from 'react';
import { UserContext } from '../../context/user.context';

// eslint-disable-next-line react/prop-types
function JournalList({ items, setItem }) {
    const { userId } = useContext(UserContext);

    // сортировка данных по возрастанию даты, свежие наверх
    const sortItems = (a, b) => {
        if (a.date > b.date) {
            return -1;
        } else {
            return 1;
        }
    };

    // useMemo позволяет запомнить состояние, и не обновлять его в случае не изменения параметров, которые указаны в массиве, вторым аргументом
    const filteredItems = useMemo(
        () => items.filter((el) => el.userId === userId).sort(sortItems),
        [items, userId]
    );

    // проверка есть ли записи: если нет, то вывести фразу
    if (items.length === 0) {
        return <p>Записей пока нет, добавьте запись</p>;
    }

    return (
        <>
            {filteredItems.map((el) => (
                <CardButton key={el.id} onClick={() => setItem(el)}>
                    <JournalItem
                        title={el.title}
                        post={el.post}
                        date={el.date}
                    />
                </CardButton>
            ))}
        </>
    );

    // return <div className="journal-list">{children}</div>;
}

export default JournalList;
