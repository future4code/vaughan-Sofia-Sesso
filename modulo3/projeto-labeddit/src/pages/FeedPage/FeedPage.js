import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { FeedPageContainer } from './styled'
import CreatePost from './components/CreatePost/CreatePost'
import MappedPosts from './components/MappedPosts/MappedPosts'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'

const FeedPage = () => {

    useProtectedPage()

    const { data, isLoading, getData } = useRequestData([], `${BASE_URL}/posts`)

    return <FeedPageContainer>
        <CreatePost
            getData={getData}
        />
        <MappedPosts
            data={data}
            getData={getData}
            isLoading={isLoading}
        />
    </FeedPageContainer>
}

export default FeedPage