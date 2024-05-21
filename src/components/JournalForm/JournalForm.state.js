export const INITIAL_STATE = {
    isValid: {
        post: true,
        title: true,
        date: true,
    },
    values: {
        post: '',
        title: '',
        date: '',
        tag: '',
    },
    isFormReadyToSubmit: false,
};
// функция reducer - первый аргумент начальное состояние, второй аргумент action - это то, что нужно сделать
export function formReducer(state, action) {
    switch (action.type) {
        // ...state.values - использование предыдущих values
        case 'SET_VALUE':
            return { ...state, values: { ...state.values, ...action.payload } };
        case 'CLEAR':
            return {
                ...state,
                values: INITIAL_STATE.values,
                isFormReadyToSubmit: false,
            };
        case 'RESET_VALIDITY':
            return { ...state, isValid: INITIAL_STATE.isValid };
        case 'SUBMIT': {
            const titleValidity = state.values.title?.trim().length;
            const postValidity = state.values.post?.trim().length;
            const dateValidity = state.values.date;

            return {
                // values: action.payload, это убирается, тк теперь всегда актуальное значние в state
                ...state,
                isValid: {
                    post: postValidity,
                    title: titleValidity,
                    date: dateValidity,
                },
                // форма готова к валидации в случае когда заполнены обязательные поля
                isFormReadyToSubmit:
                    postValidity && titleValidity && dateValidity,
            };
        }
    }
}
