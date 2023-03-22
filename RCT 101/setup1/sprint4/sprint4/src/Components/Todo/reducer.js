
export const initialState = [
    { id: 1, title: "Learn HTML", status: false },
    { id: 2, title: "Learn REACT", status: true },
    { id: 3, title: "Learn JAVASCRIPT", status: false },
];

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO": {
            return [...state, action.sanas];
        }
        case "DELETE_TODO": {
            const todoAfterDelete = state.filter((todo) => todo.id !== action.sanas);
            return todoAfterDelete;
        }
        case "DONE_TODO": {
            const todosAfterUpdate = state.map((todo) =>
                todo.id === action.sanas ? { ...todo, status: !todo.status } : todo
            );
            return todosAfterUpdate;
        }
        default: {
            throw new Error(`invalid action`);
        }
    }
};