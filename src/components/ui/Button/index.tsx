import React from "react";
import styled from "styled-components";

interface Props {
  text: string;
  isEmail: boolean;
}

export const Button = ({ text, isEmail }: Props) => {
  return (
    <Container
      href={isEmail ? "mailto:tatsuki.nakajima.als@gmail.com" : "#donation"}
    >
      {text}
      <ArrowImage src="images/arrow-right.png" />
    </Container>
  );
};

const Container = styled.a`
  display: inline-block;
  border: none;
  color: #ffffff;
  background-color: #e58c6c;
  width: 249px;
  height: 50px;
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 900;
  line-height: 50px;
  border-radius: 25px;
  position: relative;
  cursor: pointer;
`;

const ArrowImage = styled.img`
  position: absolute;
  right: 20px;
  bottom: 20px;
`;
