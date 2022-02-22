import React from 'react'
import { Card } from '../styled'
import Typography from '@material-ui/core/Typography'
import arrow from '../../../assets/arrow.svg'
import speechBubble from '../../../assets/speech-bubble.svg'
import { goToPost } from '../../../routes/coordinator'
import { useNavigate } from 'react-router-dom'

const MappedPosts = (props) => {
    const navigate = useNavigate()

    const onClickPost = (id) => {
        goToPost(navigate, id)
    }

    const postCards = props.data.map((post) => {
        return <Card color="secondary" key={post.id}>
            <div id='info-container' onClick={() => onClickPost(post.id)}>
                <Typography color='secondary' >Postado por {post.username}</Typography>
                <Typography color='secondary' ><strong>{post.title}</strong></Typography>
                <Typography color='primary'>{post.body}</Typography>
            </div>
            <div>
                <div id='interaction-container'>
                    <img id='arrow-up' src={arrow} alt='Ícone de upvote' />
                    <Typography color='secondary'>{post.voteSum ? post.voteSum : 0}</Typography>
                    <img id='arrow-down' src={arrow} alt='Ícone de downvote' />
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