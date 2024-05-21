import './CardButton.css';

// eslint-disable-next-line react/prop-types
function CardButton({ children, className, ...props }) {
    const cl = 'card-button' + (className ? ' ' + className : '');
    return (
        // ...props добавлено для обработки кликов
        <button {...props} className={cl}>
            {children}
        </button>
    );
}

export default CardButton;
