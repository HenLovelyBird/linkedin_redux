export default function(state = {}, action) {
    switch(action.type) {
        case "LOAD_NEWSFEED":
            return {
                ...state,
                Newsfeed: action.payload
            }
        case "LOAD_COMMENTS":
            return {
                ...state,
                comment: action.payload
            }
            default: 
                return state;
    }
}