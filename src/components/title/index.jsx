import React from 'react'
import { Container } from '../../theme/global';
import { Title } from './style';

const TitleName = (props) => {
    return (
      <Container>
        <Title size={props.size} color={props.color}>
          {props.title}
        </Title>
      </Container>
    );
}

export default TitleName;