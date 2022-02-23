import React from 'react'
import { SearchContainer } from '../styled'
import search from '../../../assets/search.svg'

const SearchFeed = ({ query, setQuery }) => {

    const onChangeQuery = (event) => {
        setQuery(event.target.value)
    }

    return <SearchContainer>
        <input
            placeholder='Busca'
            value={query}
            onChange={onChangeQuery}
        />
        <button><img src={search} alt='Ícone de busca' /></button>
    </SearchContainer>
}

export default SearchFeed