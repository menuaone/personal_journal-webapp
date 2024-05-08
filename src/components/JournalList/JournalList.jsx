import './JournalList.css';
import CardButton from '../CardButton/CardButton';
import JournalItem from '../JournalItem/JournalItem';
import { useContext } from 'react';
import { UserContext } from '../../context/user.context';

// eslint-disable-next-line react/prop-types
function JournalList({ items }) {
    const { userId } = useContext(UserContext);

    // проверка есть ли записи: если нет, то вывести фразу
    if (items.length === 0) {
        return <p>Записей пока нет, добавьте запись</p>;
    }
    // сортировка данных по возрастанию даты, свежие наверх
    const sortItems = (a, b) => {
        if (a.date > b.date) {
            return -1;
        } else {
            return 1;
        }
    };
    return (
        <>
            {items
                .filter((el) => el.userId === userId)
                .sort(sortItems)
                .map((el) => (
                    <CardButton key={el.id}>
                        <JournalItem
                            title={el.title}
                            text={el.post}
                            date={el.date}
                            id={userId}
                        />
                    </CardButton>
                ))}
        </>
    );

    // return <div className="journal-list">{children}</div>;
}

export default JournalList;
