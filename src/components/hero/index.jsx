import React from "react";
import { Overlay, Paragraph, HeroSection } from "./style";
import Lucy from "../../assets/lucy.jpg";
import { Container } from "../../theme/global";
import TitleName from "../title";

const Hero = () => {
  return (
    <HeroSection bg={Lucy}>
      <Overlay></Overlay>
      <Container>
        <TitleName color={"white"} size={"3rem"} title={"title"} />
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          nesciunt aliquam voluptas illo repellat iure officiis ut officia
          saepe, iste eveniet?
        </Paragraph>
      </Container>
    </HeroSection>
  );
};

export default Hero;
