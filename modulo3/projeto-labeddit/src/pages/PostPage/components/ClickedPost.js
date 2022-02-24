import React from 'react'
import { Card } from '../../FeedPage/styled'
import Typography from '@material-ui/core/Typography'
import VoteButtons from '../../../components/VoteButtons/VoteButtons'
import { createPostVote, changePostVote, deletePostVote } from '../../../services/posts'
import CommentCounter from '../../../components/CommentCounter/CommentCounter'

const ClickedPost = ({ params, posts, getPosts }) => {

    const post = posts && posts.filter((post) => {
        if (post.id === params.id) {
            return post
        }
    })

    return <>
        {posts && post[0] ?
            <Card color="secondary" key={post[0].id} >
                <div id='info-container'>
                    <Typography color='secondary' >Postado por {post[0].username} às {post[0].createdAt.slice(11, 19)}, {post[0].createdAt.slice(0, 10)}</Typography>
                    <Typography color='secondary' variant='h6' ><strong>{post[0].title}</strong></Typography>
                    <Typography color='primary' >{post[0].body}</Typography>
                </div>
                <div>
                    <VoteButtons
                        id={post[0].id}
                        userVote={post[0].userVote}
                        voteSum={post[0].voteSum}
                        getData={getPosts}
                        createVote={createPostVote}
                        changeVote={changePostVote}
                        deleteVote={deletePostVote}
                    />
                    <CommentCounter
                        commentCount={post[0].commentCount}
                    />
                </div>
            </Card>
            : <Typography color='secondary'>Carregando...</Typography>
        }
    </>
}

export default ClickedPost