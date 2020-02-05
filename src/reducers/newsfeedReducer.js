export default function(state = {}, action) {
    console.log(action)
    switch(action.type) {
        case "LOAD_NEWSFEED":
            return {
                ...state,
                news: action.payload.posts,
                totalPosts: action.payload.Total
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