import React, { useState } from 'react'
import arrow from '../../assets/arrow.svg'
import { ButtonsContainer } from './styled'
import Typography from '@material-ui/core/Typography'

const VoteButtons = ({ id, userVote, voteSum, getData, params, createVote, changeVote, deleteVote }) => {
    const [isVotedUp, setIsVotedUp] = useState(false)
    const [isVotedDown, setIsVotedDown] = useState(false)

    const onClickUpArrow = (id) => {
        if (isVotedUp) {
            setIsVotedUp(false)
            deleteVote(id, getData, params)
        } else if (isVotedDown) {
            setIsVotedDown(false)
            createVote(id, getData, setIsVotedUp, params)
        }
        else {
            createVote(id, getData, setIsVotedUp, params)
        }
    }

    const onClickDownArrow = (id) => {
        if (isVotedDown) {
            setIsVotedDown(false)
            deleteVote(id, getData, params)
        } else if (isVotedUp) {
            setIsVotedUp(false)
            changeVote(id, getData, setIsVotedDown, params)
        }
        else {
            changeVote(id, getData, setIsVotedDown, params)
        }
    }

    return <ButtonsContainer>
        <button onClick={() => onClickUpArrow(id)}>
            <img id={userVote === 1 ? 'clicked-arrow-up' : 'arrow-up'} src={arrow} alt='Ícone de upvote' />
        </button>
        <Typography color='secondary'>{voteSum ? voteSum : 0}</Typography>
        <button onClick={() => onClickDownArrow(id)}>
            <img id={userVote === -1 ? 'clicked-arrow-down' : 'arrow-down'} src={arrow} alt='Ícone de downvote' />
        </button>
    </ButtonsContainer>
}

export default VoteButtons