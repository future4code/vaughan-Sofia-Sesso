import React, { useState } from 'react'
import { Card } from '../../FeedPage/styled'
import Typography from '@material-ui/core/Typography'
import arrow from '../../../assets/arrow.svg'
import { CommentsContainer, TypographyStyled } from '../styled'
import { createCommentVote, changeCommentVote, deleteCommentVote } from '../../../services/comments'

const MappedComments = ({ data, getData, params }) => {

    const [isVotedUp, setIsVotedUp] = useState(false)
    const [isVotedDown, setIsVotedDown] = useState(false)

    const onClickUpArrow = (id) => {
        if (isVotedUp) {
            setIsVotedUp(false)
            deleteCommentVote(id, getData, params)
        } else if (isVotedDown) {
            setIsVotedDown(false)
            createCommentVote(id, getData, params, setIsVotedUp)
        }
        else {
            createCommentVote(id, getData, params, setIsVotedUp)
        }
    }

    const onClickDownArrow = (id) => {
        if (isVotedDown) {
            setIsVotedDown(false)
            deleteCommentVote(id, getData, params)
        } else if (isVotedUp) {
            setIsVotedUp(false)
            changeCommentVote(id, getData, params, setIsVotedDown)
        }
        else {
            changeCommentVote(id, getData, params, setIsVotedDown)
        }
    }

    const comments = data && data.map((comment) => {
        const formattedTime = comment.createdAt.slice(11, 19)
        const formattedDate = comment.createdAt.slice(0, 10)

        return <Card key={comment.id}>
            <Typography color='secondary'>Postado por {comment.username} às {formattedTime}, {formattedDate}</Typography>
            <Typography color='primary'>{comment.body}</Typography>
            <div id='interaction-container'>
                <div>
                    <button onClick={() => onClickUpArrow(comment.id)}>
                        <img id={comment.userVote === 1 ? 'clicked-arrow-up' : 'arrow-up'} src={arrow} alt='Ícone de upvote' />
                    </button>
                    <Typography color='secondary'>{comment.voteSum ? comment.voteSum : 0}</Typography>
                    <button onClick={() => onClickDownArrow(comment.id)}>
                        <img id={comment.userVote === -1 ? 'clicked-arrow-down' : 'arrow-down'} src={arrow} alt='Ícone de downvote' />
                    </button>
                </div>
            </div>
        </Card>
    })

    return <CommentsContainer>
        <TypographyStyled color='secondary' >Comentários:</TypographyStyled>
        {comments && comments}
        {comments.length === 0 && <Typography color='secondary'>Não há comentários neste post</Typography>}
    </CommentsContainer>
}

export default MappedComments