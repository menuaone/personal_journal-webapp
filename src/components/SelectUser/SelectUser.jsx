import { useContext } from 'react';
import { UserContext } from '../../context/user.context';

// eslint-disable-next-line react/prop-types
function SelectUser() {
    const { userId, setUserId } = useContext(UserContext);

    const changeUser = (e) => {
        setUserId(Number(e.target.value));
    };

    return (
        <select name="user" id="user" onChange={changeUser} value={userId}>
            <option value="1">Антон</option>
            <option value="2">Вася</option>
        </select>
    );
}

export default SelectUser;
