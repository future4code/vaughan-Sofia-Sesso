import React, {Component} from 'react'
import styled from 'styled-components'

import facebook from '../../img/facebook.svg'
import instagram from '../../img/instagram.svg'
import twitter from '../../img/twitter.svg'

const ContainerIcones = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 10px;
    border-top: 1px black solid;
`

export class SecaoCompartilhar extends Component {
	
	render() {
		return <ContainerIcones>
			<img alt={'Icone'} src={facebook} onClick={() => this.props.escolher("Facebook")}/>
			<img alt={'Icone'} src={instagram} onClick={() => this.props.escolher("Instagram")}/>
			<img alt={'Icone'} src={twitter} onClick={() => this.props.escolher("Twitter")}/>
        </ContainerIcones>
	}
}