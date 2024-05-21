import SelectUser from '../SelectUser/SelectUser';
import styles from './Header.module.css';

// eslint-disable-next-line react/prop-types
function Header() {
    return (
        <>
            <div className={styles['logo-box']}>
                <img
                    className={styles.logo}
                    src="/pj_test.svg"
                    alt="journal_logo"
                />
                done by Menua Agamirov
            </div>
            <SelectUser />
        </>
    );
}

export default Header;
