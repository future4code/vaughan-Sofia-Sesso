import React from 'react'
import useForm from '../../../hooks/useForm'
import { createPost } from '../../../services/posts'
import { CreatePostContainer } from '../styled'

const CreatePost = (props) => {

    const [form, onChange, clear] = useForm({
        title: "",
        body: ""
    })

    const onSubmitPost = (event) => {
        event.preventDefault()
        createPost(form, clear, props.getData)
    }

    return <CreatePostContainer onSubmit={onSubmitPost}>
        <input
            placeholder='Título'
            name='title'
            value={form.title}
            onChange={onChange}
        />
        <textarea
            placeholder='Escreva seu post'
            name='body'
            value={form.body}
            onChange={onChange}
        />
        <button>Criar Post</button>
    </CreatePostContainer>
}

export default CreatePost