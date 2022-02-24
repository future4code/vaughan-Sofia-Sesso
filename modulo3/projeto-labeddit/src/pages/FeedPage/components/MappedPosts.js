import React, { useState } from 'react'
import { Card, CardsContainer } from '../styled'
import Typography from '@material-ui/core/Typography'
import { goToPost } from '../../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import SearchFeed from './SearchFeed'
import VoteButtons from '../../../components/VoteButtons/VoteButtons'
import { createPostVote, changePostVote, deletePostVote } from '../../../services/posts'
import CommentCounter from '../../../components/CommentCounter/CommentCounter'

const MappedPosts = ({ data, getData }) => {
    const navigate = useNavigate()
    const [query, setQuery] = useState("")

    const onClickPost = (id) => {
        goToPost(navigate, id)
    }

    const postCards = data && data
        .filter((post) => {
            return post.title.toLowerCase().includes(query.toLowerCase()) ||
                post.body.toLowerCase().includes(query.toLocaleLowerCase())
        })
        .map((post) => {
            const formattedTime = post.createdAt.slice(11, 19)
            const formattedDate = post.createdAt.slice(0, 10)

            return <Card color="secondary" key={post.id}>
                <div id='info-container' onClick={() => onClickPost(post.id)}>
                    <Typography color='secondary' >Postado por {post.username} às {formattedTime}, {formattedDate}</Typography>
                    <Typography color='secondary' variant='h6' ><strong>{post.title}</strong></Typography>
                    <Typography color='primary' >{post.body}</Typography>
                </div>
                <div>
                    <VoteButtons
                        id={post.id}
                        userVote={post.userVote}
                        voteSum={post.voteSum}
                        getData={getData}
                        createVote={createPostVote}
                        changeVote={changePostVote}
                        deleteVote={deletePostVote}
                    />
                    <CommentCounter
                        commentCount={post.commentCount}
                    />
                </div>
            </Card>
        })

    return <div>
        <SearchFeed
            query={query}
            setQuery={setQuery}
        />
        <CardsContainer>
            {postCards}
        </CardsContainer>
    </div>
}

export default MappedPosts