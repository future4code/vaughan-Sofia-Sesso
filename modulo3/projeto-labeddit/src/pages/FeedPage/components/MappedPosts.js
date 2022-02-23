import React, { useState } from 'react'
import { Card } from '../styled'
import Typography from '@material-ui/core/Typography'
import arrow from '../../../assets/arrow.svg'
import speechBubble from '../../../assets/speech-bubble.svg'
import { goToPost } from '../../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import { createPostVote, changePostVote, deletePostVote } from '../../../services/posts'

const MappedPosts = ({ data, getData }) => {
    const navigate = useNavigate()
    const [isVotedUp, setIsVotedUp] = useState(false)
    const [isVotedDown, setIsVotedDown] = useState(false)

    const onClickPost = (id) => {
        goToPost(navigate, id)
    }

    const onClickUpArrow = (id) => {
        if (isVotedUp) {
            setIsVotedUp(false)
            deletePostVote(id, getData)
        } else if (isVotedDown) {
            setIsVotedDown(false)
            createPostVote(id, getData, setIsVotedUp)
        }
        else {
            createPostVote(id, getData, setIsVotedUp)
        }
    }

    const onClickDownArrow = (id) => {
        if (isVotedDown) {
            setIsVotedDown(false)
            deletePostVote(id, getData)
        } else if (isVotedUp) {
            setIsVotedUp(false)
            changePostVote(id, getData, setIsVotedDown)
        }
        else {
            changePostVote(id, getData, setIsVotedDown)
        }
    }

    const postCards = data.map((post) => {
        return <Card color="secondary" key={post.id}>
            <div id='info-container' onClick={() => onClickPost(post.id)}>
                <Typography color='secondary' >Postado por {post.username}</Typography>
                <Typography color='secondary' ><strong>{post.title}</strong></Typography>
                <Typography color='primary'>{post.body}</Typography>
            </div>
            <div>
                <div id='interaction-container'>
                    <button onClick={() => onClickUpArrow(post.id)}>
                        <img id={isVotedUp ? 'clicked-arrow-up' : 'arrow-up'} src={arrow} alt='Ícone de upvote' />
                    </button>
                    <Typography color='secondary'>{post.voteSum ? post.voteSum : 0}</Typography>
                    <button onClick={() => onClickDownArrow(post.id)}>
                        <img id={isVotedDown ? 'clicked-arrow-down' : 'arrow-down'} src={arrow} alt='Ícone de downvote' />
                    </button>
                </div>
                <div id='interaction-container'>
                    <img id='speech-bubble' src={speechBubble} alt='Ícone de comentários' />
                    <Typography color='secondary'>{post.commentCount ? post.commentCount : 0} comentários</Typography>
                </div>
            </div>
        </Card>
    })

    return postCards
}

export default MappedPosts