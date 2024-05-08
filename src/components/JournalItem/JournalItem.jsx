import './JournalItem.css';

// деструктуризировали пропсы и передали из в компонент
// eslint-disable-next-line react/prop-types
function JournalItem({ title, post, date }) {
    // форматирование даты с помощью intl
    const formatedDate = new Intl.DateTimeFormat('ge-Ge').format(date);

    return (
        <>
            <h2 className="journal-item__header">{title}</h2>
            <h2 className="journal-item__body">
                <div className="journal-item__date">{formatedDate}</div>
                <div className="journal-item__text">{post}</div>
            </h2>
        </>
    );
}

export default JournalItem;
