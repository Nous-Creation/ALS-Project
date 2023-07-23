import React from "react";
import { styled } from "styled-components";

interface Props {
  text: string;
  onClick: () => void;
}

export const Button = ({ text, onClick }: Props) => {
  return (
    <Container onClick={onClick}>
      {text}
      <ArrowImage src="images/arrow-right.png" />
    </Container>
  );
};

const Container = styled.button`
  border: none;
  color: #ffffff;
  background-color: #e58c6c;
  width: 249px;
  height: 50px;
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  border-radius: 25px;
  position: relative;
  cursor: pointer;
`;

const ArrowImage = styled.img`
  position: absolute;
  right: 20px;
  bottom: 20px;
`;
