import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { FeedPageContainer } from './styled'
import CreatePost from './components/CreatePost'
import MappedPosts from './components/MappedPosts'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'

const FeedPage = () => {
    useProtectedPage()

    const { data, getData } = useRequestData([], `${BASE_URL}/posts`)

    return <FeedPageContainer>
        <CreatePost
            getData={getData}
        />
        <MappedPosts
            data={data}
            getData={getData}
        />
    </FeedPageContainer>
}

export default FeedPage