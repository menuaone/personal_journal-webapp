import SelectUser from '../SelectUser/SelectUser';
import styles from './Header.module.css';

// eslint-disable-next-line react/prop-types
function Header() {
    return (
        <>
            <img className={styles.logo} src="/logo.svg" alt="journal_logo" />
            <SelectUser />
        </>
    );
}

export default Header;
