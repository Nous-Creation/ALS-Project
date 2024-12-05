import { ContributionProps } from "@/pages";
import React from "react";
import { styled } from "styled-components";

export const Contribution = ({
  contribution,
  updateDate,
  expenditure,
  treatment,
}: ContributionProps) => {
  const date = new Date(updateDate);

  const formattedDate = `${date.getFullYear()}年${String(
    date.getMonth() + 1
  ).padStart(2, "0")}月${String(date.getDate()).padStart(2, "0")}日`;

  return (
    <Container>
      <Title>
        {formattedDate}
        <Br />
        時点での募金額
      </Title>
      <ContributionWrapper>
        <ContributionPrice>{contribution}</ContributionPrice>
        <PriceUnit>円</PriceUnit>
      </ContributionWrapper>
      <Title>治療費総額</Title>
      <ExpenditurePrice>{expenditure}円</ExpenditurePrice>
      <SubTitle>治療費詳細</SubTitle>
      <Treatment>{treatment}</Treatment>
    </Container>
  );
};

const Container = styled.div`
  margin: 100px auto;
  padding: 0 48px;

  @media (max-width: 780px) {
    padding: 0 24px;
  }
`;

const Title = styled.h2`
  color: #000;
  font-family: Noto Sans;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 980px) {
    font-size: 28px;
  }

  @media (max-width: 780px) {
    text-align: center;
  }
`;

const Br = styled.br`
  display: none;
  @media (max-width: 780px) {
    display: block;
  }
`;

const ContributionWrapper = styled.div`
  display: flex;
  align-items: end;
  width: max-content;
  margin: 0 auto 40px;
`;

const ContributionPrice = styled.p`
  color: #e58c6c;
  font-family: Noto Sans;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  text-align: center;
  margin-right: 8px;

  @media (max-width: 980px) {
    font-size: 48px;
  }

  @media (max-width: 780px) {
    text-align: center;
  }
`;

const PriceUnit = styled.p`
  color: #000;
  font-family: Noto Sans;
  font-size: 20px;
  font-style: normal;

  @media (max-width: 980px) {
    font-size: 16px;
  }

  @media (max-width: 780px) {
    text-align: center;
  }
`;

const ExpenditurePrice = styled.p`
  color: #e58c6c;
  font-family: Noto Sans;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  text-align: center;
  margin-right: 8px;
  margin: 0 auto 40px;

  @media (max-width: 980px) {
    font-size: 32px;
  }

  @media (max-width: 780px) {
    text-align: center;
  }
`;

const SubTitle = styled.h2`
  color: #000;
  font-family: Noto Sans;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 780px) {
    font-size: 20px;
    text-align: center;
  }
`;

const Treatment = styled.p`
  font-family: Noto Sans;
  font-size: 20px;
  font-style: normal;
  /* font-weight: 700; */
  line-height: 32px;
  text-align: center;
  margin-right: 8px;
  white-space: pre-wrap;

  @media (max-width: 780px) {
    text-align: center;
    font-size: 16px;
  }
`;
