import styled from "styled-components"
import Typography from '@material-ui/core/Typography'

export const TypographyStyled = styled(Typography)`
    margin-bottom: 15px;
`

export const PostPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`

export const CommentsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    width: 90vw;
    max-width: 450px;
`

export const CreateCommentContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90vw;
    max-width: 450px;
    margin-top: 20px;

    textarea {
        background-color: #282928;
        color: #FFC2F6;
        border: 1px solid #FFC2F6;
        width: 100%;
        height: 100px;
        padding: 11px;
        font-family: 'Roboto', sans-serif;

        &:focus {
            outline: none;
        }
    }

    button {
        background-color: #282928;
        color: #FFC2F6;
        cursor: pointer;
        border: 1px solid #FFC2F6;
        padding: 7px;
        margin-top: 10px;

        &:hover {
            background-color: #5e5e5e;
        }

        &:active {
            background-color: #FFC2F6;
            color: #282928;
        }
    }
`