import React from "react";
import { styled } from "styled-components";

const descMessage = `病気の進行を早期にストップさせる可能性を秘めた治療を受けるための様々な費用として概算した金額となっております。集まった寄付金は、随時、本サイトに開示していきます。\nもし必要以上に集まった場合は、今後のALS治療の長期化に備え、支援団体が管理して参ります。将来的において、淳司のALSが完全治癒を実現した場合には、寄付金の残額は難病支援を求めている団体等に寄付いたします。`;

export const DonationExplanation = () => {
  return (
    <Container>
      <LeftWrapper>
        <DonationImage src="/images/donation1.png" />
      </LeftWrapper>

      <RightWrapper>
        <Title>目標金額</Title>
        <Description>{descMessage}</Description>
      </RightWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  margin: 80px auto;
  padding: 0 48px;
  text-align: center;
  display: flex;
  align-items: center;

  @media (max-width: 780px) {
    display: block;
  }
`;

const LeftWrapper = styled.div`
  width: 50%;
  background-position: center;

  @media (max-width: 780px) {
    width: 100%;
    margin-bottom: 12px;
  }
`;

const Title = styled.h2`
  color: #000;
  font-family: Noto Sans;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 24px;

  @media (max-width: 980px) {
    font-size: 24px;
  }
`;

const Description = styled.p`
  color: #000;
  font-family: Noto Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  white-space: pre-wrap;
  text-align: left;
  width: 75%;

  @media (max-width: 980px) {
    width: 100%;
    font-size: 16px;
  }
`;

const RightWrapper = styled.div`
  width: 50%;
  text-align: left;

  @media (max-width: 780px) {
    width: 100%;
  }
`;

const DonationImage = styled.img`
  width: 80%;
  margin: 0 auto;
  display: block;

  @media (max-width: 780px) {
    width: 100%;
  }
`;
