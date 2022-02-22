import React from 'react'
import { Card } from '../../FeedPage/styled'
import Typography from '@material-ui/core/Typography'
import arrow from '../../../assets/arrow.svg'
import speechBubble from '../../../assets/speech-bubble.svg'

const ClickedPost = ({ params, posts, isLoading }) => {

    const post = posts && posts.filter((post) => {
        if (post.id === params.id) {
            return post
        }
    })

    return <>
        {isLoading && <p>Carregando...</p>}
        {!isLoading && posts && post[0] &&
            <Card color="secondary">
                <div id='info-container'>
                    <Typography color='secondary' >Postado por {post[0].username}</Typography>
                    <Typography color='secondary' ><strong>{post[0].title}</strong></Typography>
                    <Typography color='primary'>{post[0].body}</Typography>
                </div>
                <div>
                    <div id='interaction-container'>
                        <img id='arrow-up' src={arrow} alt='Ícone de upvote' />
                        <Typography color='secondary'>{post[0].voteSum ? post[0].voteSum : 0}</Typography>
                        <img id='arrow-down' src={arrow} alt='Ícone de downvote' />
                    </div>
                    <div id='interaction-container'>
                        <img id='speech-bubble' src={speechBubble} alt='Ícone de comentários' />
                        <Typography color='secondary'>{post[0].commentCount ? post[0].commentCount : 0} comentários</Typography>
                    </div>
                </div>
            </Card>
        }
    </>


}

export default ClickedPost