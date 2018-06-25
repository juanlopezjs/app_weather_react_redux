const searchInput = (term) => {
    return{
        type: 'SEARCH_INPUT',
        payload: term
    }
}

export default searchInput;