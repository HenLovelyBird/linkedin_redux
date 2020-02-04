export default function(state = {}, action) {
    switch(action.type) {
        case "LOAD_PROFILES":
            return {
                ...state,
                profile: action.payload
            }
        case "LOAD_EXPERIENCES":
            return {
                ...state,
                experiences: action.payload
            }
            default:
                return state;
    }
}