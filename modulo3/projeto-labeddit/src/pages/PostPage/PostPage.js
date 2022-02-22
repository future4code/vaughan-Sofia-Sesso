import React, { useEffect, useState } from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { useParams } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import ClickedPost from './components/ClickedPost'
import MappedComments from './components/MappedComments'
import CreateComment from './components/CreateComment'
import axios from 'axios'
import { PostPageContainer } from './styled'

const PostPage = () => {
    useProtectedPage()

    const params = useParams()

    const { data, getData } = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)

    const [isLoading, setIsLoading] = useState(false)
    const [posts, setPosts] = useState([])

    const getPosts = () => {
        const token = localStorage.getItem('token')
        setIsLoading(true)
        axios.get(`${BASE_URL}/posts`, {
            headers: {
                Authorization: token
            }
        })
            .then((res) => {
                setPosts(res.data)
                setIsLoading(false)
            })
            .catch((err) => {
                alert(err.response)
                setIsLoading(false)
            })
    }

    useEffect(() => {
        getPosts()
    }, [posts])

    return <PostPageContainer>
        <ClickedPost
            params={params}
            posts={posts}
            isLoading={isLoading}
        />
        <CreateComment
            params={params}
            getData={getData} />
        <MappedComments
            data={data}
        />
    </PostPageContainer>
}

export default PostPage