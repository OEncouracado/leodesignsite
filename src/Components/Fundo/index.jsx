import React from 'react'
import { Container } from 'react-bootstrap';
import Icon from '../Icon';
import "./style.css"

function Fundo() {
  return (
    <div className="back">
        <Container className="fundo py-3">
            <Icon/>
        </Container>
    </div>
  )
}

export default Fundo