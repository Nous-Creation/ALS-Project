import { Button } from "@/components/ui";
import React from "react";
import { styled } from "styled-components";

const descMessage = `・ALS治療の医療費の支援\n・介護費用\n※今後進行する可能性も想定し介護費用も使い道として考えております。\n\n上記に付随する経費（交通費、通院費、宿泊費、ホームページ運用費用、社団法人登記費用等）`;

export const DonationUsed = () => {
  return (
    <Container>
      <Wrapper>
        <LeftWrapper>
          <Title>寄付金の使い道</Title>
          <Description>{descMessage}</Description>
        </LeftWrapper>
        <RightWrapper>
          <DonationImage src="/images/donation2.png" />
        </RightWrapper>
      </Wrapper>
      <Button text="寄付をする" />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  margin: 80px 0;
  padding: 0 48px;
  text-align: center;

  @media (max-width: 780px) {
    padding: 0 12px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-bottom: 48px;
  text-align: center;

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
  margin: 0 auto;

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
