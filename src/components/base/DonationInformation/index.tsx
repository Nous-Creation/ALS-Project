import React from "react";
import { styled } from "styled-components";
import { AiFillBank, AiFillCaretRight } from "react-icons/ai";
import { BiCreditCard } from "react-icons/bi";

export const DonationInformation = () => {
  return (
    <Container>
      <ContentWrapper>
        <AiFillBank style={{ fontSize: "32px" }} />
        <Title>銀行振込</Title>
        <Desc>
          〇〇銀行
          <br />
          〇〇支点
          <br />
          店番号 111
          <br />
          普通預金
          <br />
          口座番号 1234567
          <br />
          中島竜基（ナカジマタツキ）
        </Desc>
      </ContentWrapper>

      <ContentWrapper>
        <BiCreditCard style={{ fontSize: "32px" }} />
        <Title>クレジットカード決済</Title>

        <PriceWrapper>
          <AiFillCaretRight />
          <Price>5,000円</Price>
        </PriceWrapper>

        <PriceWrapper>
          <AiFillCaretRight />
          <Price>10,000円</Price>
        </PriceWrapper>

        <PriceWrapper>
          <AiFillCaretRight />
          <Price>50,000円</Price>
        </PriceWrapper>

        <PriceWrapper>
          <AiFillCaretRight />
          <Price>150,000円</Price>
        </PriceWrapper>
      </ContentWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  margin: 80px 0;
  padding: 0 48px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;

  @media (max-width: 780px) {
    padding: 0 12px;
    display: block;
  }
`;

const ContentWrapper = styled.div`
  width: 410px;
  height: 340px;
  background-color: #ffffff;
  border-radius: 30px;
  text-align: left;
  padding: 24px;

  @media (max-width: 780px) {
    width: 100%;
    height: max-content;

    &:first-child {
      margin-bottom: 24px;
    }
  }
`;

const Title = styled.p`
  color: #000;
  font-family: Noto Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 12px;

  @media (max-width: 780px) {
    font-size: 20px;
  }
`;

const Desc = styled.p`
  color: #000;
  font-family: Noto Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 780px) {
    font-size: 16px;
  }
`;

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #e58c6c;
  }
`;

const Price = styled.p`
  color: #000;
  font-family: Noto Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 12px;

  @media (max-width: 780px) {
    font-size: 16px;
  }
`;
