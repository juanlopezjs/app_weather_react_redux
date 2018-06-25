export default (state = { term: '' }, action ) => {
    switch (action.type) {
        case 'SEARCH_INPUT':
            return Object.assign({}, state, {term: action.payload})
        default:
            return state
    }
}