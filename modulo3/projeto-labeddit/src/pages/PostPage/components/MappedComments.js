import React from 'react'
import { Card } from '../../FeedPage/styled'
import Typography from '@material-ui/core/Typography'
import arrow from '../../../assets/arrow.svg'
import { CommentsContainer } from '../styled'

const MappedComments = (props) => {

    const comments = props.data.map((comment) => {
        return <Card key={comment.id}>
            <Typography color='secondary'>Postado por {comment.username}</Typography>
            <Typography color='primary'>{comment.body}</Typography>
            <div id='interaction-container'>
                <div>
                    <img id='arrow-up' src={arrow} alt='Ícone de upvote' />
                    <Typography color='secondary'>{comment.voteSum ? comment.voteSum : 0}</Typography>
                    <img id='arrow-down' src={arrow} alt='Ícone de downvote' />
                </div>
            </div>
        </Card>
    })

    return <CommentsContainer>{comments}</CommentsContainer>
}

export default MappedComments