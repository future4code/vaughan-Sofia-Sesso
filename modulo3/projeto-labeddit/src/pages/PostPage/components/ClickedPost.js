import React, { useState } from 'react'
import { Card } from '../../FeedPage/styled'
import Typography from '@material-ui/core/Typography'
import arrow from '../../../assets/arrow.svg'
import speechBubble from '../../../assets/speech-bubble.svg'
import { createPostVote, changePostVote, deletePostVote } from '../../../services/posts'

const ClickedPost = ({ params, posts, getPosts }) => {

    const [isVotedUp, setIsVotedUp] = useState(false)
    const [isVotedDown, setIsVotedDown] = useState(false)

    const onClickUpArrow = (id) => {
        if (isVotedUp) {
            setIsVotedUp(false)
            deletePostVote(id, getPosts)
        } else if (isVotedDown) {
            setIsVotedDown(false)
            createPostVote(id, getPosts, setIsVotedUp)
        }
        else {
            createPostVote(id, getPosts, setIsVotedUp)
        }
    }

    const onClickDownArrow = (id) => {
        if (isVotedDown) {
            setIsVotedDown(false)
            deletePostVote(id, getPosts)
        } else if (isVotedUp) {
            setIsVotedUp(false)
            changePostVote(id, getPosts, setIsVotedDown)
        }
        else {
            changePostVote(id, getPosts, setIsVotedDown)
        }
    }

    const post = posts && posts.filter((post) => {
        if (post.id === params.id) {
            return post
        }
    })

    return <>
        {posts && post[0] ?
            <Card color="secondary">
                <div id='info-container'>
                    <Typography color='secondary' >Postado por {post[0].username}</Typography>
                    <Typography color='secondary' ><strong>{post[0].title}</strong></Typography>
                    <Typography color='primary'>{post[0].body}</Typography>
                </div>
                <div>
                    <div id='interaction-container'>
                        <button onClick={() => onClickUpArrow(post[0].id)}>
                            <img id='arrow-up' src={arrow} alt='Ícone de upvote' />
                        </button>
                        <Typography color='secondary'>{post[0].voteSum ? post[0].voteSum : 0}</Typography>
                        <button onClick={() => onClickDownArrow(post[0].id)}>
                            <img id='arrow-down' src={arrow} alt='Ícone de downvote' />
                        </button>
                    </div>
                    <div id='interaction-container'>
                        <img id='speech-bubble' src={speechBubble} alt='Ícone de comentários' />
                        <Typography color='secondary'>{post[0].commentCount ? post[0].commentCount : 0} comentários</Typography>
                    </div>
                </div>
            </Card>
            : <p>Carregando...</p>
        }
    </>


}

export default ClickedPost