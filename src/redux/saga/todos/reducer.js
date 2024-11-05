
const initialState = {
    todos: [],
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TODOS':
            return { ...state, todos: action.payload };
        case 'ADD_TODO':
            return { ...state, todos: [...state.todos, action.payload] };
        default:
            return state;
    }
};

export default todoReducer;