import styled from "styled-components";


export const Title = styled.h1`
  z-index: 5;
  color: ${props => props.color};
  position: relative;
  padding: 20px 0;
  font-size: ${(props) => props.size};
  text-transform: capitalize;
`;
