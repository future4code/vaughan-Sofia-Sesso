import React from 'react'
import useForm from '../../../hooks/useForm'
import { createComment } from '../../../services/comments'
import { CreateCommentContainer } from '../styled'

const CreateComment = ({ params, getData }) => {

    const [form, onChange, clear] = useForm({
        body: ""
    })

    const onSubmitComment = (event) => {
        event.preventDefault()
        createComment(form, clear, params.id, getData)
    }

    return <CreateCommentContainer onSubmit={onSubmitComment}>
        <textarea
            placeholder='Escreva seu comentário'
            name='body'
            value={form.body}
            onChange={onChange}
        />
        <button>Enviar Comentário</button>
    </CreateCommentContainer>
}

export default CreateComment