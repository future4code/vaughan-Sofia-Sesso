import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Card } from '../../../../styled/styled'
import { CommentsContainer, TypographyStyled } from './styled'
import { createCommentVote, changeCommentVote, deleteCommentVote } from '../../../../services/comments'
import VoteButtons from '../../../../components/VoteButtons/VoteButtons'

const MappedComments = ({ data, getData, params, isLoading }) => {

    const comments = data && data.map((comment) => {
        const formattedTime = comment.createdAt.slice(11, 16)
        const formattedDate = comment.createdAt.slice(0, 10)

        return <Card key={comment.id}>
            <Typography color='secondary'>Postado por {comment.username} às {formattedTime}, {formattedDate}</Typography>
            <Typography color='primary'>{comment.body}</Typography>
            <div>
                <VoteButtons
                    id={comment.id}
                    userVote={comment.userVote}
                    voteSum={comment.voteSum}
                    getData={getData}
                    params={params}
                    createVote={createCommentVote}
                    changeVote={changeCommentVote}
                    deleteVote={deleteCommentVote}
                />
            </div>

        </Card>
    })

    return <CommentsContainer>
        <TypographyStyled color='secondary' >Comentários:</TypographyStyled>
        {isLoading ? <Typography color='secondary' variant='h6'>Carregando...</Typography> : comments}
        {!isLoading && comments && comments}
        {!isLoading && comments.length === 0 && <Typography color='secondary'>Não há comentários neste post</Typography>}
    </CommentsContainer>
}

export default MappedComments