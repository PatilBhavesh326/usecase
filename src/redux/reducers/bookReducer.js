
const bookReducer = (state=[],action) => {

    switch(action.type){
        case 'GENERATE_BOOK_INFO':
            return[
                ...state
            ]
        default:
            return state;
    }
}

export default bookReducer;