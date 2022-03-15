import React from 'react'
import { Comment } from './styled'
import speechBubble from '../../assets/speech-bubble.svg'
import Typography from '@material-ui/core/Typography'

const CommentCounter = ({ commentCount }) => {
    return <Comment>
        <img src={speechBubble} alt='Ícone de comentários' />
        <Typography color='secondary'>{commentCount ? commentCount : 0} comentários</Typography>
    </Comment>
}

export default CommentCounter