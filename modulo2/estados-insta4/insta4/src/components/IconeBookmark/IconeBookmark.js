import React from 'react'
import styled from 'styled-components'

const IconeContainer = styled.div`
    display: flex;
`

export function IconeBookmark (props) {
	return <IconeContainer>
		<img alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
	</IconeContainer>
}
