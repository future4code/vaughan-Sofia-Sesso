import React, { useState } from 'react'
import share from '../../assets/share.svg'
import Typography from '@material-ui/core/Typography'

const ShareButton = ({ href }) => {
    const [copied, setCopied] = useState(false)

    const copy = () => {
        const input = document.createElement('input')
        input.value = href
        document.body.appendChild(input)
        input.select()
        document.execCommand('copy')
        document.body.removeChild(input)
        setCopied(true)
        setTimeout(() => setCopied(false), 1000)
    }

    return <button onClick={copy}>
        {copied ?
            <Typography color='secondary'>Link copiado!</Typography>
            :
            <img src={share} alt='Ícone de compartilhar post' />
        }
    </button>
}

export default ShareButton