import React from 'react'
import useForm from '../../../hooks/useForm'
import { createComment } from '../../../services/comments'
import { CreateCommentContainer } from '../styled'

const CreateComment = (props) => {

    const [form, onChange, clear] = useForm({
        body: ""
    })

    const onSubmitComment = (event) => {
        event.preventDefault()
        createComment(form, clear, props.params.id, props.getData)
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