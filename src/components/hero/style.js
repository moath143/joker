import styled from "styled-components";

export const HeroSection = styled.section`
  background: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  z-index: -1;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;



export const Paragraph = styled.p`
  z-index: 5;
  color: #fff;
  position: relative;
  margin-bottom: 100px;
  width: 30%;
`;
