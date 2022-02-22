import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { FeedPageContainer, CardsContainer } from './styled'
import CreatePost from './components/CreatePost'
import MappedPosts from './components/MappedPosts'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'

const FeedPage = () => {
    useProtectedPage()

    const { data, getData } = useRequestData([], `${BASE_URL}/posts`)

    return <FeedPageContainer>
        <CreatePost getData={getData} />
        <CardsContainer>
            <MappedPosts data={data} />
        </CardsContainer>
    </FeedPageContainer>
}

export default FeedPage