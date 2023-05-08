const Todoreducer = (state = { todos: [] }, action) => {

    switch (action.type)// type action for performing the task which is import to call
    {
        case "ADD_Todo":
            return { todos: action.payload }

        case "Remove_Todo":
            return { todos: action.payload }

        default:
            return state;

    }
};
export default Todoreducer;